import { Future, Trace } from "substrate/Future";

// Only Futures that resolve to string | number are legal property accessors
type FutureTable = Record<string, Future<string | number | unknown>>;

export const ID_PREFIX = "$$ID:";
export const GET_TARGET = "$$GET_TARGET";

/**
 * @internal
 */
export const makeProxyFactory = (futureTable: FutureTable = {}) => {
  const futureId = (future: Future<any>): string => {
    // @ts-ignore (accessing protected property: _id)
    return `${ID_PREFIX}${future._id}`;
  };

  const makeProxy = <T = unknown>(future: Future<T>): any => {
    return new Proxy(future, {
      has(target: Future<T>, prop: any) {
        // We're using a *special* property (GET_TARGET) as a means to
        // test whether the target object is a Proxied Future or not.
        if (prop === GET_TARGET) return true;

        // Otherwise, behave normally.
        return prop in target;
      },

      get(target: Future<T>, prop: any, _receiver: any) {
        // We're using a *special* property (GET_TARGET) as a means to
        // retrieve the underlying Future (unproxied)
        if (prop === GET_TARGET) return target;

        if (prop === Symbol.toPrimitive) {
          // When the prop is not a primitive (number, string, Symbol) it will be attempted
          // to be converted into one. This case will happen when the prop is a Future.
          //
          // Because only primitive types can be used as property accessors, what we're doing
          // here is returning a Future ID, which is a string. We use this specially formatted
          // ID to store the original Future in a lookup table we maintain as some hidden
          // state in the SDK.
          //
          // When the prop (Future ID) is used as an accessor (eg. in the case of "bracket"
          // access) we will use the returned Future ID here and look up the referenced Future
          // when constructing new proxied Futures (in it's TraceProps).
          return () => {
            const utarget = unproxy(target);
            const id = futureId(utarget);
            futureTable[id] = utarget; // store in lookup table
            return id;
          };
        }

        const nextProp = prop.startsWith(ID_PREFIX)
          ? // When the prop is a Future ID, we will lookup the corresponding Future
            // so that we can use it as a TraceProp in the resulting new Future.
            futureTable[prop]!
          : // Otherwise the prop is not a future (always converted to string)
            (prop as string);

        // @ts-ignore (access protected prop: _directive)
        const trace = target._directive.next(nextProp);
        if (!(trace instanceof Trace)) throw "something's not right.";

        return makeProxy(new Future<any>(trace));
      },
    });
  };

  return {
    makeProxy,
  };
};

/**
 * @internal
 * Returns `true` when `Future` is proxied.
 */
export const isProxy = <T = any>(future: Future<T>) => {
  // We return true when checking for this property on Proxied Futures.
  return GET_TARGET in future;
};

/**
 * @internal
 * Returns the un-proxied `Future` when it is proxied.
 */
export const unproxy = <T = any>(maybeProxiedFuture: Future<T>): Future<T> => {
  if (!isProxy(maybeProxiedFuture)) return maybeProxiedFuture;
  // @ts-ignore (using "virtual" property to access underlying proxy target)
  return maybeProxiedFuture.$$GET_TARGET as Future<T>;
};

/**
 * @internal
 * We instantiate a proxyFactory as a side effect of importing this file so that we can
 * share the hidden-state of the `FutureTable` across the the SDK
 */
export const proxyFactory = makeProxyFactory();
