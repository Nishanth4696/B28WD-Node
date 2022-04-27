import { client } from "../index.js";
import { ObjectId } from "mongodb";


export async function DeleteMobileByID(id) {
        return await client.db("b28wd").collection("emobilelist").deleteOne({ _id: ObjectId(id) });
    }
  
export async function UpdateMobileByID(id, data) {
    return await client.db("b28wd").collection("emobilelist").updateOne({ _id: ObjectId(id) }, { $set: data });
  }
  
export  async function GetMobilesByID(id) {
  console.log(id)
    return await client.db("b28wd").collection("emobilelist").findOne({ _id: ObjectId(id) });
  }
  
export async function DeleteAllMobiles() {
    return await client.db("b28wd").collection("emobilelist").deleteMany({});
  }
  
export async function CreateNewMobiles(data) {
    return await client.db("b28wd").collection("emobilelist").insertMany(data);
  }
  
export async function GetAllMobiles(filter) {
    return await client.db("b28wd").collection("emobilelist").find(filter).toArray();
  }

