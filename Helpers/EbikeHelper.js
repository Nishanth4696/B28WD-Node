import { client } from "../index.js";
import { ObjectId } from "mongodb";


export async function DeleteBikeByID(id) {
        return await client.db("b28wd").collection("ebike").deleteOne({ _id: ObjectId(id) });
    }
  
export async function UpdateBikeByID(id, data) {
    return await client.db("b28wd").collection("ebike").updateOne({ _id: ObjectId(id) }, { $set: data });
  }
  
export  async function GetBikesByID(id) {
  console.log(id)
    return await client.db("b28wd").collection("ebike").findOne({ _id: ObjectId(id) });
  }
  
export async function DeleteAllBikes() {
    return await client.db("b28wd").collection("ebike").deleteMany({});
  }
  
export async function CreateNewBikes(data) {
    return await client.db("b28wd").collection("ebike").insertMany(data);
  }
  
export async function GetAllBikes(filter) {
    return await client.db("b28wd").collection("ebike").find(filter).toArray();
  }

