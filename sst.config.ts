import { DogrulamaDizin } from "./stacks/DogrulamaDizin";
import { SSTConfig } from "sst";
import { DepolamaDizini } from "./stacks/DepolamaDizini";
import { ApiDizin } from "./stacks/ApiDizin";
import { FrontendStack } from "./stacks/FrontendStack";


export default {
  config(_input) {
    return {
      name: "donemproje1",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(DepolamaDizini).stack(ApiDizin).stack(DogrulamaDizin).stack(FrontendStack);
  },
} satisfies SSTConfig;
