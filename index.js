import express  from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv"
import {emobileListRouter} from './routes/emobileList.js'
import {moviesRouter} from './routes/movies.js';
import {petshopRouter} from './routes/petshop.js';
import {promocodeRouter} from './routes/promocode.js';
import {pettycashRouter} from './routes/pettycash.js';
import { ebikeRouter } from "./routes/ebikes.js";
import { mobileRouter } from "./routes/mobile.js";
import { cartRouter } from "./routes/cart.js";
import { postRouter } from "./routes/posts.js";
import cors from 'cors';
import { AdminGetAllCart, UserGetAllCart } from "./Helpers/cartHelper.js";


import { loginRouter } from "./routes/Login.js";



dotenv.config();

const app = express()
app.use(cors())
const PORT = process.env.PORT;

app.use(express.json());
   


 const MONGO_URL = process.env.MONGO_URL

 async function createConnection(){
   const client = new MongoClient(MONGO_URL);
   await client.connect();
   console.log("mongoDB connected...");
   return client;
 }

export const client = await createConnection();





app.get('/', (request, response) => {
  response.send('Hello World!***🎈')
})

app.use('/movies', moviesRouter)
app.use('/login',loginRouter)
app.use('/pettycash', pettycashRouter)
app.use('/petshop', petshopRouter)
app.use('/promocode', promocodeRouter)
app.use('/ebike', ebikeRouter)
app.use('/mobilelist', mobileRouter)
app.use('/cart', cartRouter)
app.use('/emobilelist', emobileListRouter)
app.use('/posts', postRouter)


//user
app.post('/user/checkout', async (request, response) =>{
  
  
  const result = await client.db("b28wd").collection('usercart').deleteMany({});
  const allCart= await UserGetAllCart()

  response.send(allCart);

});

//admin
app.post('/admin/checkout', async (request, response) =>{
  
  
  const result = await client.db("b28wd").collection('admincart').deleteMany({});
  const allCart= await AdminGetAllCart()

  response.send(allCart);

});


app.listen(PORT,() => console.log("App is started in", PORT))

