import { client } from "../index.js";
import { ObjectId } from "mongodb";


export async function DeleteMovieByID(id) {
        return await client.db("b28wd").collection("movieslist").deleteOne({ _id: ObjectId(id) });
    }
  
export async function UpdateMovieByID(id, data) {
    return await client.db("b28wd").collection("movieslist").updateOne({ _id: ObjectId(id) }, { $set: data });
  }
  
export  async function GetMoviesByID(id) {
  console.log(id)
    return await client.db("b28wd").collection("movieslist").findOne({ _id: ObjectId(id) });
  }
  
export async function DeleteAllMovies() {
    return await client.db("b28wd").collection("movieslist").deleteMany({});
  }
  
export async function CreateNewMovies(data) {
    return await client.db("b28wd").collection("movieslist").insertOne(data);
  }
  
export async function GetAllMovies(filter) {
    return await client.db("b28wd").collection("movieslist").find(filter).toArray();
  }

