import express  from "express";
import {
   
  GetAllpromocode
} from "../Helpers/promocodeHelper.js"
const router = express.Router();





  router.get('/', async (request, response) => {
    console.log(request.query)
    const filter = request.query;
    
  if(filter.rating){
  filter.rating = parseInt(filter.rating);
  }
  const filteredMovie = await GetAllpromocode(filter);
  
     
      response.send(filteredMovie)
   
  })
  


 

  export const promocodeRouter = router;