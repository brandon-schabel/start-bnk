import type { Routes } from "@bnk/core/modules/server";
import { jsonRes, serverFactory } from "@bnk/core/modules/server";
import { middleware, middlewareConfig } from "./middlewares";

const routes = {
  "/": {
    GET: (_, { time }) => {
      return new Response(`Hello World! ${time?.timestamp.toISOString()}`);
    },
  },
  "/json": {
    GET: (_, { time }) =>
      jsonRes({
        message: "Hello JSON Response!",
        ...time,
      }),
  },
} satisfies Routes<{ middleware: typeof middlewareConfig }>;

// Create Server Factory with middleware
const { start } = serverFactory({
  routes,
  middleware,
});

start();
