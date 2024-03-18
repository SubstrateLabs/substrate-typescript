import { describe, test } from "vitest";
import { GenerateText } from "substrate/GeneratedFutures";

// REFERENCE
// /** API Schema generated type **/
// type GenerateTextOut = {
//   /** @description Text response. */
//   text?: string;
//   /** @description JSON response. */
//   json_object?: Record<string, never>;
//   /** @description (MADE UP FOR DEMO) */
//   arr: string[];
//   /** @description (MADE UP FOR DEMO) */
//   num: number;
//   /** @description (MADE UP FOR DEMO) */
//   dict: {
//     a: number;
//     b: string[];
//     c: { x: string; y: number }[];
//   };
// };

describe("GeneratedFutures", () => {
  test("demo 1 (property access/tracing)", () => {
    const node = new GenerateText({});

    console.log("node =", node);
    console.log("node.future =", node.future);

    console.log("node.future.text =", node.future.text);
    console.log("node.future['text'] =", node.future["text"]);
    console.log("node.future.get('text') =", node.future.get("text"));

    console.log("node.future.arr =", node.future.arr);
    console.log("node.future.arr.at(0) =", node.future.arr.at(0));
    console.log("node.future.get('arr[0]') =", node.future.get("arr[0]"));

    console.log("node.future.num =", node.future.num);
    console.log("node.future.get('num') =", node.future.get("num"));

    console.log("node.future.dict =", node.future.dict);
    console.log("node.future.get('dict') =", node.future.get("dict"));
    console.log("node.future.dict.a =", node.future.dict.a);
    console.log("node.future.get('dict.a') =", node.future.get("dict.a"));
    console.log("node.future.dict.b =", node.future.dict.b);
    console.log("node.future.get('dict.b') =", node.future.get("dict.b"));
    console.log("node.future.dict.b.at(0) =", node.future.dict.b.at(0));
    console.log("node.future.get('dict.b[0]') =", node.future.get("dict.b[0]"));
    console.log("node.future.dict.c =", node.future.dict.c);
    console.log("node.future.dict.c.at(0) =", node.future.dict.c.at(0));
    console.log("node.future.dict.c.at(0).x =", node.future.dict.c.at(0).x);
    console.log("node.future.dict.c.at(123).y =", node.future.dict.c.at(123).y);
    console.log("node.future.get('dict.c[123].y') =", node.future.get("dict.c[123].y"));
    console.log("node.future.dict.get('c[123].y') =", node.future.dict.get("c[123].y"));

    console.log("node.future.json_object =", node.future.json_object);
    console.log("node.future.json_object.get(...) =", node.future.json_object.get("one.two[3][4].five"));
    console.log("node.future.get('json_object...') =", node.future.get("json_object.one.two[3][4].five"));
  });
  test.skip("demo 2 (string concat)", () => {
    const node = new GenerateText({});
    const future = node.future.text.concat("1", "2", "3").concat("a", "b");
    // console.log(JSON.stringify(future, null, 2));
    console.log(future);
  });
});
