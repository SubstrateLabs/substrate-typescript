"use client";

import { useState } from "react";
import { sb } from "substrate";

type Vote = {
  vote: string;
  confidence: string;
  commentary: string;
};

export default function Prompt() {
  const [tally, setTally] = useState<{ [x: string]: number }>({});
  const [output, setOutput] = useState<Vote[]>([]);

  async function submitPrompt(event: any) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const request = new Request("/api/this-or-that", {
      method: "POST",
      body: formData,
    });
    const response = await fetch(request);

    if (response.ok) {
      setOutput([]);
      setTally({});

      const stream = await sb.streaming.fromSSEResponse(response);

      for await (let message of stream) {
        // node.results are recieved when a node has completed it's run
        // it contains the entire node output in the `data` field of the
        // message
        if (message.object === "node.result") {
          if ("firstThing" in message.data.json_object) {
            setTally({
              [message.data.json_object.firstThing as string]: 0,
              [message.data.json_object.secondThing as string]: 0,
            });
            continue;
          }

          if ("vote" in message.data.json_object) {
            setOutput((state) => [...state, message.data.json_object]);

            setTally((state) => ({
              ...state,
              [message.data.json_object.vote as string]:
                state[message.data.json_object.vote] + 1,
            }));
            continue;
          }
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
          placeholder="Enter 2 things to compare and have our panel vote on their preference..."
          type="text"
          className="p-2 grow"
        />
        <button type="submit" className="rounded p-2">
          Submit
        </button>
      </form>

      <div className="w-full flex space-x-2 justify-center">
        {Object.keys(tally).map((thing) => (
          <div key={thing} className="text-center bg-white rounded p-5 w-32">
            <div className="font-bold">"{thing}"</div>
            <div className="font-bold text-3xl">{tally[thing]}</div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col space-y-2">
        {output.map((item, i) => (
          <div key={i} className="whitespace-pre-wrap bg-white rounded p-3">
            +1 for <span className="font-bold">"{item.vote}"</span>
            <details className="pt-1">
              <summary>Commentary 💬</summary>
              {item.commentary}
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
