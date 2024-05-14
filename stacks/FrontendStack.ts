import { StackContext, StaticSite, use } from "sst/constructs";
import { ApiDizin } from "./ApiDizin";
import { DogrulamaDizin } from "./DogrulamaDizin";
import { DepolamaDizini } from "./DepolamaDizini";

export function FrontendStack({ stack, app }: StackContext) {
  const { api } = use(ApiDizin);
  const { auth } = use(DogrulamaDizin);
  const { bucket } = use(DepolamaDizini);

  // react app tanımlama
  const site = new StaticSite(stack, "ReactSite", {
    path: "packages/frontend",
    buildCommand: "pnpm run build",
    buildOutput: "dist",
    // environment degiskenlerini aktar
    environment: {
      VITE_API_URL: api.url,
      VITE_REGION: app.region,
      VITE_BUCKET: bucket.bucketName,
      VITE_USER_POOL_ID: auth.userPoolId,
      VITE_USER_POOL_CLIENT_ID: auth.userPoolClientId,
      VITE_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId || "",
    },
  });

  // output url goster
  stack.addOutputs({
    SiteUrl: site.url,
  });
}