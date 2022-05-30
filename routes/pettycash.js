import express  from "express";
import {
    DeleteTransByID,
    UpdateTransByID,
    GetTransByID,
    DeleteAllTrans,
    CreateNewTrans,
    GetAllTrans
} from "../Helpers/pettycashHelper.js"
const router = express.Router();





  router.get('/', async (request, response) => {
    console.log(request.query)
    const filter = request.query;
    
  if(filter.rating){
  filter.rating = parseInt(filter.rating);
  }
  const filteredMovie = await GetAllTrans(filter);
  
     
      response.send(filteredMovie)
   
  })
  
  
  router.post('/', async (request, response) =>{
    const data = request.body;
    
    const result = await CreateNewTrans(data)
  
    response.send(result);
  
  });
  
  router.delete('/', async (request, response) =>{
    
    const result = await DeleteAllTrans()
  
    response.send(result);
  
  });
  
  router.get('/:id', async (request, response) => {
    console.log(request.params)
    const { id } = request.params;
    
    
    const movie = await GetTransByID(id);
  
    
    movie ? response.send(movie) : response.status(404).send({message: "no matching Trans found"})
    
  })
  
  router.put('/:id', async (request, response) => {
    console.log(request.params)
    const { id } = request.params;
    const data = request.body;
    console.log(data);
    
    const result = await UpdateTransByID(id, data);
    const movie = await GetTransByID(id);
    response.send( movie) 
   
    
  })
  
  
  router.delete('/:id', async (request, response) => {
    console.log(request.params)
    const { id } = request.params;
    
    
    const result = await DeleteTransByID(id);
  
    
    result.deletedCount > 0 ? response.send(result) : response.status(404).send({message: "no matching Trans found"})
    
  })
  

 

  export const pettycashRouter = router;