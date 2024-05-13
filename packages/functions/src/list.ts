import { Table } from "sst/node/table";
import handler from "@donemproje1/core/handler";
import dynamoDb from "@donemproje1/core/dynamodb";

export const main = handler(async (event) => {
  const params = {
    TableName: Table.Donemproje1.tableName,
    // 'KeyConditionExpression' sorgu kosulu 
    // - 'userId = :userId': userid ile eslesenleri bastır tanımnla
    //   partition key
    KeyConditionExpression: "userId = :userId",
    // 'ExpressionAttributeValues' kosuldaki degeri tanimla
    // - ':userId': defines 'userId' yazar kimligi olarak tanımla
    ExpressionAttributeValues: {
      ":userId": "123",
    },
  };

  const result = await dynamoDb.query(params);

  // eslesen ogeleri dondur
  return JSON.stringify(result.Items);
});