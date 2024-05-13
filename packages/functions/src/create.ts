import * as uuid from "uuid";
import { Table } from "sst/node/table";
import handler from "@donemproje1/core/handler";
import dynamoDb from "@donemproje1/core/dynamodb";

export const main = handler(async (event) => {
 let data = {
  content: "",
  attachment: "",
   };

   if (event.body !=null) {
    data = JSON.parse(event.body);
   }

   const params = {
    TableName: Table.Donemproje1.tableName,
    Item: {
      userId: "123", //kisi id
      noteId: uuid.v1(), //benzersiz uuid
      content: data.content, // istek ayristirma
      attachment: data.attachment, // istek ayristirma
      createdAt: Date.now(), // guncel zaman
    },
  };

  await dynamoDb.put(params);

  return JSON.stringify(params.Item);
});