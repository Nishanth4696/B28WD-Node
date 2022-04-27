import express  from "express";
import { UserGetAllCart, UserGetCartByID, UserUpdateCartQtyByID, AdminGetAllCart, AdminGetCartByID, AdminUpdateCartQtyByID } from "../Helpers/cartHelper.js";
import { client } from "../index.js";
const router = express.Router();



//user
router.get('/user', async (request, response) => {
    console.log(request.query)
    
  
  const filteredCart = await UserGetAllCart();
  
     
      response.send(filteredCart)
   
  })

  router.put('/user', async function (request, response)  {
   
    const mobile = request.body;
    const {type} = request.query;
    console.log(mobile);    
    const cartItem = await UserGetCartByID(mobile)
    console.log(cartItem)
     

    if(cartItem){
      if(type==='decrement' && cartItem.qty <= 1){
        await client.db("b28wd").collection('usercart').deleteOne({_id: mobile._id})
      }
      else{
        await UserUpdateCartQtyByID(mobile, type);
      }
      
    
      }
    else{
      await client.db("b28wd").collection("usercart").insertOne({...mobile, qty:1})
    }
   const allCart = await UserGetAllCart();
    response.send(allCart)
  })


  // admin

  router.get('/admin', async (request, response) => {
    console.log(request.query)
    
  
  const filteredCart = await AdminGetAllCart();
  
     
      response.send(filteredCart)
   
  })

  router.put('/admin', async function (request, response)  {
   
    const mobile = request.body;
    const {type} = request.query;
    console.log(mobile);    
    const cartItem = await AdminGetCartByID(mobile)
    console.log(cartItem)
     

    if(cartItem){
      if(type==='decrement' && cartItem.qty <= 1){
        await client.db("b28wd").collection('admincart').deleteOne({_id: mobile._id})
      }
      else{
        await AdminUpdateCartQtyByID(mobile, type);
      }
      
    
      }
    else{
      await client.db("b28wd").collection("admincart").insertOne({...mobile, qty:1})
    }
   const allCart = await AdminGetAllCart();
    response.send(allCart)
  })

  
  export const cartRouter = router;