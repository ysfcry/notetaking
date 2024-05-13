import { Table } from "sst/node/table";
import handler from "@donemproje1/core/handler";
import dynamoDb from "@donemproje1/core/dynamodb";

export const main = handler(async (event) => {
  const data = JSON.parse(event.body || "{}");

  const params = {
    TableName: Table.Donemproje1.tableName,
    Key: {
      // yeni oge ozellikleri
      userId: "123", // user kimlik
      noteId: event?.pathParameters?.id, // not path
    },
    // 'UpdateExpression' guncellenecekleri tanimla
    // 'ExpressionAttributeValues' guncelleme degeri tanimla
    UpdateExpression: "SET content = :content, attachment = :attachment",
    ExpressionAttributeValues: {
      ":attachment": data.attachment || null,
      ":content": data.content || null,
    },
    // 'ReturnValues' dondurulup dondurulmeyecegini tanımla
    // guncelleme sonrası nitelikleri dondur
    ReturnValues: "ALL_NEW",
  };

  await dynamoDb.update(params);

  return JSON.stringify({ status: true });
});