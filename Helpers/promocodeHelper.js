import { client } from "../index.js";


export async function GetAllpromocode(filter) {
    return await client.db("b28wd").collection("promocode").find(filter).toArray();
  }
