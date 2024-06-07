import http from "node:http";
import { Readable } from "node:stream";
import querystring from "node:querystring";
import { Substrate, Llama3Instruct70B } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];
const PORT = 3000;

// Create the server
const server = http.createServer(async (req, res) => {
  try {
    const params = querystring.parse(req.url.split("?")[1] || "");

    const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

    const node = new Llama3Instruct70B({ prompt: params.prompt });

    const stream = await substrate.stream(node);

    res.writeHead(200, { "Content-Type": "text/event-stream" });
    Readable.from(stream.apiResponse.body).pipe(res);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(err.message);
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
