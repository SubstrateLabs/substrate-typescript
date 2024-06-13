# Simple NextJS example

This example uses a NextJS app that makes a request to Substrate in a route handler and sends the Server-Sent Events directly back to the client.

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
