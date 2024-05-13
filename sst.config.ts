import { DogrulamaDizin } from "./stacks/DogrulamaDizin";
import { SSTConfig } from "sst";
import { DepolamaDizini } from "./stacks/DepolamaDizini";
import { ApiDizin } from "./stacks/ApiDizin";


export default {
  config(_input) {
    return {
      name: "donemproje1",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(DepolamaDizini).stack(ApiDizin).stack(DogrulamaDizin);
  },
} satisfies SSTConfig;
