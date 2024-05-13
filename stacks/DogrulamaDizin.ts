import { ApiDizin } from "./ApiDizin";
import * as iam from "aws-cdk-lib/aws-iam";
import { DepolamaDizini } from "./DepolamaDizini";
import { Cognito, StackContext, use } from "sst/constructs";

export function DogrulamaDizin({ stack, app }: StackContext) {
  const { api } = use(ApiDizin);
  const { bucket } = use(DepolamaDizini);

  // cognito kullanıcı pool ve auth pool olusturma
  const auth = new Cognito(stack, "Auth", {
    login: ["email"],
  });

  auth.attachPermissionsForAuthUsers(stack, [
    // Apiye erisim izni
    api,
    // Klasöre erisim izni
    new iam.PolicyStatement({
      actions: ["s3:*"],
      effect: iam.Effect.ALLOW,
      resources: [
        bucket.bucketArn + "/private/${cognito-identity.amazonaws.com:sub}/*",
      ],
    }),
  ]);

  // outputta auth kaynaklarını göster
  stack.addOutputs({
    Region: app.region,
    UserPoolId: auth.userPoolId,
    UserPoolClientId: auth.userPoolClientId,
    IdentityPoolId: auth.cognitoIdentityPoolId,
  });

  // auth kaynagına don
  return {
    auth,
  };
}