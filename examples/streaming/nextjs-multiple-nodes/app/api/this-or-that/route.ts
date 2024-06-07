"use server";

import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";
import { Substrate, GenerateJSON, sb } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"]!;

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

function extractThisAndThat(inputText: string) {
  const schema = z
    .object({
      firstThing: z.string().describe("The first thing being compared"),
      secondThing: z.string().describe("The second thing being compared"),
    })
    .describe("Two items that are being compared");

  return new GenerateJSON({
    prompt: `
      === Instructions
      Examine the following input text and extract the two things that are being compared.

      === Input Text
      ${inputText}`,
    json_schema: zodToJsonSchema(schema),
    temperature: 0.4,
  });
}

function voter(about: string, items: any) {
  const schema = z
    .object({
      vote: z.enum(items).describe("The item you vote for"),
      confidence: z
        .number()
        .min(0)
        .max(100)
        .describe("How confident you are in the vote"),
      commentary: z
        .string()
        .describe("Rationale for why you voted the way you did."),
    })
    .describe(
      "Your vote on which item you prefer and how strongly you feel about it",
    );

  return new GenerateJSON(
    {
      prompt: sb.interpolate`
      === About you
      ${about}

      === Your instructions
      Consider the following 2 items and based on your experience please vote for
      which one you prefer generally. Also include a confidence rating for how 
      stronly you believe in your position and any additionally commentary you would
      like to share.

      You must vote for something, even if you have very no confidence.

      === Items to vote for
      * ${items[0]}
      * ${items[1]}
    `,
      json_schema: zodToJsonSchema(schema),
    },
    { id: about },
  );
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const prompt = formData.get("prompt")!.toString();

  const thisAndThat = extractThisAndThat(prompt);

  const items = [
    thisAndThat.future.json_object.get("firstThing"),
    thisAndThat.future.json_object.get("secondThing"),
  ];

  const voters = [
    voter("You are a farmer from the midwest", items),
    voter("You are a semi-pro tennis player from Chicago", items),
    voter("You are computer programmer based in Los Angeles", items),
    voter("You are cab driver based in New York City", items),
    voter("You are college professor based out of Montreal", items),
    voter("You are a chef at a fine dining restuarant in Mexico City", items),
    voter("You are an amatuer cellist that travels often to Vancouver", items),
    voter(
      "You are retired journalist that has settled down along the coast of Oaxaca",
      items,
    ),
    voter("You are soldier stationed outside Washington, DC", items),
  ];

  const streamResponse = await substrate.stream(thisAndThat, ...voters);
  const body = streamResponse.apiResponse.body;

  return new Response(body, {
    headers: { "Content-Type": "text/event-stream" },
  });
}
