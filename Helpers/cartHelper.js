import { client } from "../index.js";
import { ObjectId } from "mongodb";

// user
export async function UserGetAllCart() {
    return await client.db("b28wd").collection("usercart").find({}).toArray();
  }

  export async function UserGetCartByID(mobile) {
    return await client.db("b28wd").collection("usercart").findOne({ _id: mobile._id });
  }
  

export async function UserUpdateCartQtyByID(mobile, type) {
    await client.db("b28wd").collection("usercart").updateOne({ _id: mobile._id }, { $inc: { qty: type==='increment' ? +1 : -1} });
  }

// admin
  export async function AdminGetAllCart() {
    return await client.db("b28wd").collection("admincart").find({}).toArray();
  }

  export async function AdminGetCartByID(mobile) {
    return await client.db("b28wd").collection("admincart").findOne({ _id: mobile._id });
  }
  

export async function AdminUpdateCartQtyByID(mobile, type) {
    await client.db("b28wd").collection("admincart").updateOne({ _id: mobile._id }, { $inc: { qty: type==='increment' ? +1 : -1} });
  }
