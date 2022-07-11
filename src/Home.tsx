import React from "react";
import fetch from "node-fetch";

import { createTRPCClient } from "@trpc/client";
import type { TRpcRouter } from "./api";

global.fetch = fetch;

export const Home = () => {
  const client = createTRPCClient<TRpcRouter>({ url: "trpc" });
  const [data, dataSet] = React.useState(null);
  const loadData = async () => {
    const json = await fetch("/api/hello");
    const dat = await json.json();
    dataSet(dat.message);
  };
  const loadDataTRpc = async () => {
    const dat = await client.query("hello");
    dataSet(dat.message);
  };
  return (
    <div>
      <button onClick={loadData}>Load data</button>
      <button onClick={loadDataTRpc}>Load data trpc</button>
      <div>
        <h1>Data</h1>
        {!!data && data}
      </div>
    </div>
  );
};
