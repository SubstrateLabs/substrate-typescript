import { fileURLToPath } from "url";
import { dirname } from "path";

export const listChapters = `Please provide a list of sections for the following transcript.
Such a list might be used to define a table of contents for a podcast or video.
Section titles should be short, rarely more than 5 words. 
If it's a short transcript, you might only have 1 or 2 sections and if it's a long transcript, limit it to 16.
These sections should be the main topics or themes of the transcript. 
They should be chronologically ordered. 
They should be roughly evenly spaced throughout the transcript.
Do not neglect the latter end of the transcript
Do not include minutiae.
`;

export const proposedSchema = {
  type: "object",
  properties: {
    chapters: {
      type: "array",
      items: { type: "string" },
      minItems: 1,
      maxItems: 16,
    },
  },
};

export const timestampPrompt = `You will be provided with a list of sections as well as a transcript.
The sections will be used as a table of contents for that transcript.
Based on the content of the transcript, please provide the approximate timestamp in seconds where each section begins.

Lines are prefixed with the timestamp in seconds surrounded by square brackets. e.g.
[59.73] Hello I'm going to talk about some topic. 

Your job is to analyze the semantics of the text and provide the timestamp (in seconds) where each section begins. 
The first timestamp should be 0.
`;

export const timestampedSchema = {
  type: "object",
  properties: {
    chapters: {
      type: "array",
      items: {
        type: "object",
        properties: {
          section: { type: "string" },
          start: { type: "number" },
        },
        required: ["section", "start"],
      },
    },
  },
};

// @ts-ignore
export const currentDir = dirname(fileURLToPath(import.meta.url));
