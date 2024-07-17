export const listChapters = `Please provide a list of chapters for the following transcript.
Such a transcript might be used to generate a table of contents for a podcast or video.
First lets come up with a list of chapter titles based on the content of the transcript.
Titles should be short, rarely more than 5 words. 
If it's a short transcript, you might only have 1 or 2 chapters and if it's a long transcript, limit it to 10.
`;

export const proposedSchema = {
  type: "object",
  properties: {
    chapters: {
      type: "array",
      items: { type: "string" },
      minItems: 1,
      maxItems: 10,
    },
  },
};

const chapterPrompt = `Please provide a list of chapters for the following transcript.
Such a transcript might be used to generate a table of contents for a podcast or video.
First, think about the most important topics in the transcript and list them out in the order they appear.
Then, think about how you would divide the transcript into chapters based on these topics.
Finally, think about how you would title each chapter and what timecode it starts at.

Make sure to meet these constraints:
- The chapters should cover only the key points and main ideas presented in the original transcript
- Please ensure the time of the chapter is marked as when the topic is first introduced based on the times you have been given as numbers
- The chapters should focus on macro-level topics, not micro-level details. This is very important. I cannot stress this enough.
- The chapters should be fairly evenly spaced throughout time. Don't put two chapters at the same timecode
- Do not forget to add the start time of the chapter as a float in seconds to each chapter
- Chapter titles should fit the tone of the content itself
- Be concise, and keep the chapter titles short and descriptive.

Inputs will be in the format
[start time second]: [text]
e.g.
[59.73] Hello I'm going to talk about some topic

Where the start time is 59.73 seconds.

Respond with JSON, with the fields:
- title: title of the chapter
- start: start time of the chapter as a float in seconds. do not forget this field`;

const schema = {
  type: "object",
  properties: {
    chapters: {
      type: "array",
      items: {
        type: "object",
        properties: {
          title: { type: "string" },
          start: { type: "number" },
        },
        required: ["title", "start"],
      },
    },
  },
};
