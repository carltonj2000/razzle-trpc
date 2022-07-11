import { Router } from "express";

export const api = Router();

api.get("/hello", (_req, res) => {
  res.send({ message: "hi cj" });
});

// equivalent tRpc of above

import * as tRpc from "@trpc/server";

export const tRpcRouter = tRpc.router().query("hello", {
  resolve: async (req) => {
    return { message: "hi cj trpc" };
  },
});

export type TRpcRouter = typeof tRpcRouter;

import * as tRpcExpress from "@trpc/server/adapters/express";

export const tRpcMw = tRpcExpress.createExpressMiddleware({
  router: tRpcRouter,
});
