import express  from "express";
import {
    DeletepetshopByID,
    UpdatepetshopByID,
    GetpetshopByID,
    DeleteAllpetshop,
    CreateNewpetshop,
    GetAllpetshop
} from "../Helpers/petshopHelper.js"
const router = express.Router();





  router.get('/', async (request, response) => {
    console.log(request.query)
    const filter = request.query;
    
  if(filter.rating){
  filter.rating = parseInt(filter.rating);
  }
  const filteredMovie = await GetAllpetshop(filter);
  
     
      response.send(filteredMovie)
   
  })
  
  
  router.post('/', async (request, response) =>{
    const data = request.body;
    
    const result = await CreateNewpetshop(data)
  
    response.send(result);
  
  });
  
  router.delete('/', async (request, response) =>{
    
    const result = await DeleteAllpetshop()
  
    response.send(result);
  
  });
  
  router.get('/:id', async (request, response) => {
    console.log(request.params)
    const { id } = request.params;
    
    
    const movie = await GetpetshopByID(id);
  
    
    movie ? response.send(movie) : response.status(404).send({message: "no matching movies found"})
    
  })
  
  router.put('/:id', async (request, response) => {
    console.log(request.params)
    const { id } = request.params;
    const data = request.body;
    console.log(data);
    
    const result = await UpdatepetshopByID(id, data);
    const movie = await GetpetshopByID(id);
    response.send( movie) 
   
    
  })
  
  
  router.delete('/:id', async (request, response) => {
    console.log(request.params)
    const { id } = request.params;
    
    
    const result = await DeletepetshopByID(id);
  
    
    result.deletedCount > 0 ? response.send(result) : response.status(404).send({message: "no matching movies found"})
    
  })
  

 

  export const petshopRouter = router;