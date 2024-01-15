// just makes random ids for the demo.
import crypto from "node:crypto";
export function randId(t = 6) {
  return crypto
    .getRandomValues(new Uint8Array(t))
    .reduce(
      (t, e) =>
        (t +=
          (e &= 63) < 36
            ? e.toString(36)
            : e < 62
              ? (e - 26).toString(36).toUpperCase()
              : e > 62
                ? "-"
                : "_"),
      "",
    );
}

export function pathGet(obj: Object, query: string) {
  // @ts-expect-error
  query = Array.isArray(query)
    ? query
    : query
        .replace(/(\[(\d)\])/g, ".$2")
        .replace(/^\./, "")
        .split(".");
  // @ts-expect-error
  if (!(query[0] in obj)) {
    return undefined; // or default val
  }
  // @ts-expect-error
  obj = obj[query[0]];
  if (obj && query.length > 1) {
    return pathGet(obj, query.slice(1)); // could also pass default.
  }
  return obj;
}

// Generate Mermaid code to visualize here:
// https://mermaid.live/edit
export function toMermaid(graph: any): string {
  const code: string[] = [];
  code.push("flowchart LR"); // set to left-to-right

  const data = graph.toJSON();

  // Lookup table for our node labels
  // @ts-expect-error
  const nodes = data.nodes.reduce((map, node, _1, _2) => {
    map.set(node.id, label(node));
    return map;
  }, new Map());

  // @ts-expect-error
  data.edges.forEach(([fromId, toId, _data]) => {
    const fromNode = nodes.get(fromId);
    const toNode = nodes.get(toId);
    code.push(`${fromNode} --> ${toNode}`);
  });

  return code.join("\n");
}

function label(n: any): string {
  return `${n.id}["${n.class}(${n.id})"]`;
}
