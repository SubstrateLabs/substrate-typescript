# Simple NextJS example

This example uses a NextJS app that makes a request to Substrate in a route handler and sends the Server-Sent Events directly back to the client.

On the client we can use a helper to decode these messsages into JavaScript objects that can be used to render out the content as it arrives.

## Running the example

```
# install the dependencies
npm install

# run the dev server
npm run dev

# open your browser to use it (on localhost:3000 by default)
open http://localhost:3000
```
