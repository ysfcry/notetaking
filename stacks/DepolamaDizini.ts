import { Bucket, StackContext, Table } from "sst/constructs";

export function DepolamaDizini({ stack }: StackContext) {
const bucket = new Bucket(stack, "Uploads", {
  cors: [
    {
      maxAge: "1 day",
      allowedOrigins: ["*"],
      allowedHeaders: ["*"],
      allowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
    }
  ]
});

  const table = new Table(stack, "Donemproje1", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  return {
    bucket,
    table,
  };
}