import { Future, Trace } from "substrate/Future";

// Only Futures that resolve to string | number are legal property accessors
type FutureTable = Record<string, Future<string | number | unknown>>;

export const ID_PREFIX = "$$ID:";
export const GET_TARGET = "$$GET_TARGET";

/**
 * @internal
 */
const makeProxyFactory = (futureTable: FutureTable = {}) => {
  // Converts a future into an internal-ID that we use in the `FutureTable`. We're using this special
  // format to mitigate potential conflicts with actual user-provided strings.
  const futureId = (future: Future<any>): string => {
    // @ts-ignore (accessing protected property: _id)
    return `${ID_PREFIX}${future._id}`;
  };

  // Transforms a `Future` into an internal-ID to be used in the `FutureTable` and stores the `Future`
  // in this table as a side-effect. Should be called when a `[Symbol.toPrimitive]()` is called on a `Future`.
  const futureToPrimitive = (future: Future<any>): string => {
    const id = futureId(future);
    futureTable[id] = future; // store in lookup table
    return id;
  }

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
          // Because we would like to use `Future` values as accessors with bracket-notation on proxied `Future` values
          // we need to ensure that when a `Future` instance is being converted into a primitive (as all values are when
          // used with bracket-access are) we track a reference to the value and use a special ID that can be used
          // later on in the proxy to look up and use the original `Future` when constructing the `Trace` used in the
          // resulting proxied `Future`.
          return () => futureToPrimitive(unproxy(target));
        }

        const nextProp = prop.startsWith(ID_PREFIX)
          ? // When the prop is a Future ID, we will lookup the corresponding Future
            // so that we can use it as a TraceProp in the resulting new Future.
            futureTable[prop]!
          : // Otherwise the prop is not a future (converted to string at this point)
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
    futureToPrimitive,
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
