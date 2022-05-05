import { client } from "../index.js";
import { ObjectId } from "mongodb";


export async function DeletepetshopByID(id) {
        return await client.db("b28wd").collection("petshop").deleteOne({ _id: ObjectId(id) });
    }
  
export async function UpdatepetshopByID(id, data) {
    return await client.db("b28wd").collection("petshop").updateOne({ _id: ObjectId(id) }, { $set: data });
  }
  
export  async function GetpetshopByID(id) {
  console.log(id)
    return await client.db("b28wd").collection("petshop").findOne({ _id: ObjectId(id) });
  }
  
export async function DeleteAllpetshop() {
    return await client.db("b28wd").collection("petshop").deleteMany({});
  }
  
export async function CreateNewpetshop(data) {
    return await client.db("b28wd").collection("petshop").insertMany(data);
  }
  
export async function GetAllpetshop(filter) {
    return await client.db("b28wd").collection("petshop").find(filter).toArray();
  }

