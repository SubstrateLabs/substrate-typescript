# Basic NodeJS server

Example using a NodeJS server that accepts a `prompt` query param and responds with a Server-Sent Event stream.

## Setup

I'm using my local package for running this example using `npm link`.

```
# in the project root
nvm use v16.18.1
npm link

# in this example directory
npm link substrate
```

## Running the example

```
# run the server
npm start

# query the server
curl --get http://localhost:3000 --data-urlencode "prompt=tell me about AI"
```
