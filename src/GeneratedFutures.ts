/**
 * Current Status: Experiment (3/18/2024)
 *
 * The current TS SDK's implementation of Futures uses two main techniques for
 * achieving the syntax of getting these values to behave and look like normal
 * JS objects.
 *
 * eg.
 *
 *    const a = new Node()
 *    const b = new Node()
 *
 *    const future1 = a.future.x.y.z[123]
 *    const future2 = b.future.t.u[future1]
 *
 * The two challenges here are how to allow for this dynamic property access
 * into objects that may be unknown in structure ahead of time and how we are
 * implementing property access via `[]`.
 *
 * The dynamic property access is achieved using the Proxy API and in order
 * to make these proxy values more understandable to the user we use type
 * assertions to give the user the illusion they are "special" types that may
 * be similar enough to the API responses. The biggest issues with this that
 * I see is that the Proxy API makes using the values this was overly complex
 * and the type assertions (I think) would really put off most TypeScript
 * users who do not appreciate "tricks".
 *
 * Achieving the property-access via `[]` is also a notable challenge here
 * too because in order to use a value in this slot, TypeScript requires this
 * value to be of a "proper index type" (eg. string | number). This poses a
 * problem for us because the values we want to support may also be `Future`
 * types. In order to pull this off, the best "hack" Ive come up with is to
 * use another type assertion that can satisfy the typechecker, but also make
 * it sort of apparent the user is dealing with a special value. The first
 * downside here though is that it will be apparent to the user that this is
 * a "trick" and it may lead to some confusion around what the values they
 * are using actually are since the types are misrepresenting them as
 * `string | number` which exposes these interfaces on the variables too. The
 * second downside is that we need to have some complicated mechanism to
 * track these values since the runtime will convert them into strings when
 * used in `[]` - since we still need a reference to the `Future` we're using.
 **/

/** ------- Future Types */

type EventualType = "any" | "string" | "number" | "array" | "object";
type FutureKind = "trace" | "string-concat" | null;

class Future {
  kind: FutureKind;
}

class Trace extends Future {
  override kind: FutureKind = "trace";
  t: EventualType = "any";
  props: TraceProp[];

  constructor(props: TraceProp[] = []) {
    super();
    this.props = props;
  }
}

class FutureString extends Trace {
  override t: EventualType = "string";

  concat(...x: (string | FutureString)[]) {
    return new StringConcat([this, ...x]);
  }
}

class FutureNumber extends Trace {
  override t: EventualType = "number";
}

class FutureArray extends Trace {
  override t: EventualType = "array";

  at(_index: number) {
    return new Future();
  }
}

class FutureObject extends Trace {
  override t: EventualType = "object";

  get(path: string): Future {
    const props = parsePath(path);
    return props.reduce((future, prop) => {
      if (future instanceof FutureAnyObject) {
        // @ts-ignore
        return typeof prop === "string" ? future.get(prop) : future.at(prop);
      } else {
        // @ts-ignore
        return typeof prop === "string" ? future[prop] : future.at(prop);
      }
    }, this) as Future;
  }
}

class FutureAnyObject extends Trace {
  override t: EventualType = "object";

  get(path: string) {
    return new FutureAnyObject(nextProps(this, ...parsePath(path)));
  }

  at(index: number) {
    return new FutureAnyObject(nextProps(this, index));
  }
}

class StringConcat extends FutureString {
  override kind: FutureKind = "string-concat";
  items: Concatable[];

  constructor(items: Concatable[] = []) {
    super();
    this.items = items;
  }
}

/** ------- Supporting Code For Future serialization/construction */

type TraceProp = string | FutureString | number | FutureNumber;
type Concatable = string | FutureString;

const parsePath = (path: string): TraceProp[] => {
  // Split the path by dots or brackets, and filter out empty strings
  const parts = path.split(/\.|\[|\]\[?/).filter(Boolean);
  // Convert numeric parts to numbers and keep others as strings
  return parts.map((part) => (isNaN(Number(part)) ? part : Number(part)));
};

const nextProps = (t: Trace, ...props: TraceProp[]) => {
  return t.props.concat(props);
};

/** ------- Example API Type */

/** API Schema generated type **/
type GenerateTextOut = {
  /** @description Text response. */
  text?: string;
  /** @description (MADE UP FOR DEMO) */
  arr: string[];
  /** @description (MADE UP FOR DEMO) */
  num: number;
  /** @description (MADE UP FOR DEMO) */
  dict: {
    a: number;
    b: string[];
    c: { x: string; y: number }[];
  };
  /** @description JSON response. */
  json_object?: Record<string, never>;
};

/** ------- Final Object? */

// TODO: I'm not sure that this actually works very well for intellisense, but it can
// at least help prevent bad access into an object, though tbh it's more characters to
// write it out and the return value's type is getting lost (nto sure how to fix yet).
type GenerateTextOutFuture_Paths =
  | `text`
  | `arr`
  | `arr[${number}]`
  | `num`
  | `dict`
  | `dict.a`
  | `dict.b`
  | `dict.b[${number}]`
  | `dict.c`
  | `dict.c[${number}]`
  | `dict.c[${number}].x`
  | `dict.c[${number}].y`
  | `json_object`
  | `json_object.${string}`;

class GenerateTextOutFuture extends FutureObject {
  override get(path: GenerateTextOutFuture_Paths) {
    return super.get(path);
  }

  get text() {
    return new GenerateTextOutFuture$text(nextProps(this, "text"));
  }

  get json_object() {
    return new GenerateTextOutFuture$json_object(
      nextProps(this, "json_object"),
    );
  }

  get arr() {
    return new GenerateTextOutFuture$arr(nextProps(this, "arr"));
  }

  get num() {
    return new GenerateTextOutFuture$num(nextProps(this, "num"));
  }

  get dict() {
    return new GenerateTextOutFuture$dict(nextProps(this, "dict"));
  }
}

// TODO: handle nullable?
class GenerateTextOutFuture$text extends FutureString {}

class GenerateTextOutFuture$json_object extends FutureAnyObject {
  override get(path: string) {
    return new FutureAnyObject(nextProps(this, ...parsePath(path)));
  }
}

class GenerateTextOutFuture$arr$INDEX extends FutureString {}

class GenerateTextOutFuture$arr extends FutureArray {
  override at(index: number) {
    return new GenerateTextOutFuture$arr$INDEX(nextProps(this, index));
  }
}

class GenerateTextOutFuture$num extends FutureNumber {}

class GenerateTextOutFuture$dict extends FutureObject {
  get a() {
    return new GenerateTextOutFuture$dict$a(nextProps(this, "a"));
  }

  get b() {
    return new GenerateTextOutFuture$dict$b(nextProps(this, "b"));
  }

  get c() {
    return new GenerateTextOutFuture$dict$c(nextProps(this, "c"));
  }
}

class GenerateTextOutFuture$dict$a extends FutureNumber {}

class GenerateTextOutFuture$dict$b extends FutureArray {
  override at(index: number) {
    return new GenerateTextOutFuture$dict$b$INDEX(nextProps(this, index));
  }
}

class GenerateTextOutFuture$dict$b$INDEX extends FutureString {}

class GenerateTextOutFuture$dict$c extends FutureArray {
  override at(index: number) {
    return new GenerateTextOutFuture$dict$c$INDEX(nextProps(this, index));
  }
}

class GenerateTextOutFuture$dict$c$INDEX extends FutureArray {
  get x() {
    return new GenerateTextOutFuture$dict$c$x(nextProps(this, "x"));
  }

  get y() {
    return new GenerateTextOutFuture$dict$c$y(nextProps(this, "y"));
  }
}

class GenerateTextOutFuture$dict$c$x extends FutureString {}

class GenerateTextOutFuture$dict$c$y extends FutureNumber {}

/** ------- Example Usage */

export class GenerateText {
  args: Object;
  constructor(args: Object) {
    this.args = args;
  }

  get future() {
    return new GenerateTextOutFuture();
  }
}
