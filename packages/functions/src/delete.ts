import { Table } from "sst/node/table";
import handler from "@donemproje1/core/handler";
import dynamoDb from "@donemproje1/core/dynamodb";

export const main = handler(async (event) => {
  const params = {
    TableName: Table.Donemproje1.tableName,
    Key: {
      userId: "123", // kull kimligi
      noteId: event?.pathParameters?.id, // path kimlik
    },
  };

  await dynamoDb.delete(params);

  return JSON.stringify({ status: true });
});