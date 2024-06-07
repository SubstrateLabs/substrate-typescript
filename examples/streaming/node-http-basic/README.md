# Basic NodeJS server

Example using a NodeJS server that accepts a `prompt` query param and responds with a Server-Sent Event stream.

## Running the example

```
# run the server
npm start

# query the server
curl --get http://localhost:3000 --data-urlencode "prompt=tell me about AI"
```
