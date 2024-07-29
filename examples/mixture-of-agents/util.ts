import { fileURLToPath } from "url";
import { dirname } from "path";

export const sampleQuestion =
  "The following is a hypothetical short story written by Asimov after seeing the world in 2024. Go beyond the obvious, and come up with a creative story that is incisive, allegorical, and relevant. Respond starting with the title on the first line, followed by two newlines, and then the story.";
export const aggregate = `You have been provided with a set of responses to the a user query. Your task is to synthesize these responses into a single, high-quality response. It is crucial to critically evaluate the information provided in these responses, recognizing that some of it may be biased or incorrect. Your response should not simply replicate the given answers but should offer a refined, accurate, and comprehensive reply to the original user query. Ensure your response is well-structured, well-considered, and adheres to the highest standards of accuracy and reliability. Do not respond conversationally or acknowledge the asking of the query, just output an objective response.`;
export const jqList = `to_entries | map(((.key + 1) | tostring) + ". " + .value) | join("\n")`;

// @ts-ignore
export const currentDir = dirname(fileURLToPath(import.meta.url));
