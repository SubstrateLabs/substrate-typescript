import { fileURLToPath } from "url";
import { dirname } from "path";

export const edgeColors = [
  "Charcoal Gray",
  "Deep Olive",
  "Navy Blue",
  "Burgundy",
  "Forest Green",
  "Dark Taupe",
  "Slate Blue",
  "Deep Plum",
  "Moss Green",
  "Dark Sienna",
];
export const colors = [
  "Soft Sage",
  "Dusty Blue",
  "Pale Peach",
  "Muted Lavender",
  "Light Teal",
  "Warm Sand",
  "Faded Denim",
  "Dusty Rose",
  "Soft Mint",
  "Muted Coral",
];
export const jsonSchema = {
  type: "object",
  properties: {
    nodes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "integer" },
          label: { type: "string" },
          color: { type: "string", enum: colors },
        },
      },
    },
    edges: {
      type: "array",
      items: {
        type: "object",
        properties: {
          source: { type: "integer" },
          target: { type: "integer" },
          label: { type: "string" },
          color: { type: "string", enum: edgeColors },
        },
      },
    },
  },
  required: ["nodes", "edges"],
  description: "A knowledge graph with nodes and edges.",
};

// @ts-ignore
export const currentDir = dirname(fileURLToPath(import.meta.url));
