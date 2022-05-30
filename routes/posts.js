import express  from "express";

import {  
    GetPostsByID,   
    GetAllPosts
    
} from "../Helpers/postHelper.js"

const router = express.Router();


router.get('/', async (request, response) => {
    console.log(request.query)
    const filter = request.query;
    
  if(filter.rating){
  filter.rating = parseInt(filter.rating);
  }
  const filteredBike = await GetAllPosts(filter);
  
     
      response.send(filteredBike)
   
  })
  
  
  
  router.get('/:id', async (request, response) => {
    
    const { id } = request.params;
    
    
    const post = await GetPostsByID(id);
  
    
    post ? response.send(post) : response.status(404).send({message: "no matching movies found"})
    
  })
  
 
  
 

  export const postRouter = router;



