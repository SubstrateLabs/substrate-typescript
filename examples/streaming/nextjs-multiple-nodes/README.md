# Streaming outputs from multiple nodes

This example uses a NextJS app that makes a request to Substrate in a route handler, processes the events, and streams back new SSE events back to the user.

This example demonstrates recieving the results from different nodes in the a graph run as they complete.

On the client we can use a helper to decode these messsages into JavaScript objects that can be used to render out the content as it arrives.

## Setup

I'm using my local package for running this example using `npm link`.

```
# in the project root
nvm use
npm link

# in this example directory
npm link substrate
```

## Running the example

```
# install the dependencies
npm install

# run the dev server
npm run dev

# open your browser to use it (on localhost:3000 by default)
open http://localhost:3000
```
