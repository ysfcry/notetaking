import { Api, StackContext, use } from "sst/constructs";
import { DepolamaDizini } from "./DepolamaDizini";

export function ApiDizin({ stack }: StackContext) {
  const { table } = use(DepolamaDizini);


  //api olusturma
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        bind: [table],
      },
    },
    routes: {
      "GET /donemproje1": "packages/functions/src/list.main",
      "POST /donemproje1": "packages/functions/src/create.main",
      "GET /donemproje1/{id}": "packages/functions/src/get.main",
      "PUT /donemproje1/{id}": "packages/functions/src/update.main",
      "DELETE /donemproje1/{id}": "packages/functions/src/delete.main",
    },
  });

    // outputta Api endpoint gösterimi
    stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return {
    api,
  };
}