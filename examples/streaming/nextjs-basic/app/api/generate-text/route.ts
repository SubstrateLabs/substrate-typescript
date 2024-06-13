"use server";

import { Substrate, Llama3Instruct70B } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

export async function POST(request: Request) {
  const formData = await request.formData();
  const prompt =
    formData.get("prompt")?.toString() ||
    "write a short error message that informs a user they should fill in the prompt field";

  const node = new Llama3Instruct70B({ prompt });

  const streamResponse = await substrate.stream(node);
  const body = streamResponse.apiResponse.body;
  return new Response(body, {
    headers: { "Content-Type": "text/event-stream" },
  });
}
