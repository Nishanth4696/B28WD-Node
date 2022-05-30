import { client } from "../index.js";
import { ObjectId } from "mongodb";


export async function DeleteTransByID(id) {
        return await client.db("b28wd").collection("pettycash").deleteOne({ _id: ObjectId(id) });
    }
  
export async function UpdateTransByID(id, data) {
    return await client.db("b28wd").collection("pettycash").updateOne({ _id: ObjectId(id) }, { $set: data });
  }
  
export  async function GetTransByID(id) {
  console.log(id)
    return await client.db("b28wd").collection("pettycash").findOne({ _id: ObjectId(id) });
  }
  
export async function DeleteAllTrans() {
    return await client.db("b28wd").collection("pettycash").deleteMany({});
  }
  
export async function CreateNewTrans(data) {
    return await client.db("b28wd").collection("pettycash").insertOne(data);
  }
  
export async function GetAllTrans(filter) {
    return await client.db("b28wd").collection("pettycash").find(filter).toArray();
  }

