import { Table } from "sst/node/table";
import handler from "@donemproje1/core/handler";
import dynamoDb from "@donemproje1/core/dynamodb";

export const main = handler(async (event) => {
  const params = {
    TableName: Table.Donemproje1.tableName,
    // key bölüm keyi ve sıralama keyi tanımlar
    Key: {
      userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId, // yazar id
      noteId: event?.pathParameters?.id, // note path
    },
  };

  const result = await dynamoDb.get(params);
  if (!result.Item) {
    throw new Error("Item not found.");
  }

  // Return item
  return JSON.stringify(result.Item);
});