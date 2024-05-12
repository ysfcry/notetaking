import { SSTConfig } from "sst";
import { DepolamaDizini } from "./stacks/DepolamaDizini";

export default {
  config(_input) {
    return {
      name: "donemproje1",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(DepolamaDizini);
  },
} satisfies SSTConfig;
