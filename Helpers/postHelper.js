import { client } from "../index.js";
import { ObjectId } from "mongodb";




  
export  async function GetPostsByID(id) {
  console.log(id)
    return await client.db("b28wd").collection("posts").findOne({ _id: id });
  }


  
export async function GetAllPosts(filter) {
    return await client.db("b28wd").collection("posts").find(filter).toArray();
  }

