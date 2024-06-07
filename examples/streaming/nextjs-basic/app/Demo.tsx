"use client";

import { useState } from "react";
import { sb } from "substrate";

export default function Prompt() {
  const [output, setOutput] = useState<string>("");

  async function submitPrompt(event: any) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const request = new Request("/api/generate-text", {
      method: "POST",
      body: formData,
    });
    const response = await fetch(request);

    if (response.ok) {
      setOutput("");
      const stream = await sb.streaming.fromSSEResponse(response);

      for await (let message of stream) {
        if (message.object === "node.delta") {
          setOutput((state) => state + message.data.choices.item.text);
        }
      }
    }
  }

  return (
    <div className="w-full flex flex-col space-y-10">
      <form className="w-full flex flex-row space-x-2" onSubmit={submitPrompt}>
        <input
          name="prompt"
          autoFocus={true}
          placeholder="Enter your prompt..."
          type="text"
          className="p-2 grow"
        />
        <button type="submit" className="rounded p-2">
          Submit
        </button>
      </form>

      <pre className="whitespace-pre-wrap">{output}</pre>
    </div>
  );
}
