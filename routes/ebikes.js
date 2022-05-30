import express  from "express";
import {
    DeleteBikeByID,
    UpdateBikeByID,
    GetBikesByID,
    DeleteAllBikes,
    CreateNewBikes,
    GetAllBikes
} from "../Helpers/EbikeHelper.js"
const router = express.Router();





  router.get('/', async (request, response) => {
    console.log(request.query)
    const filter = request.query;
    
  if(filter.rating){
  filter.rating = parseInt(filter.rating);
  }
  const filteredBike = await GetAllBikes(filter);
  
     
      response.send(filteredBike)
   
  })
  
  
  router.post('/', async (request, response) =>{
    const data = request.body;
    
    const result = await CreateNewBikes(data)
  
    response.send(result);
  
  });
  
  router.delete('/', async (request, response) =>{
    
    const result = await DeleteAllBikes()
  
    response.send(result);
  
  });
  
  router.get('/:id', async (request, response) => {
    console.log(request.params)
    const { id } = request.params;
    
    
    const Bike = await GetBikesByID(id);
  
    
    Bike ? response.send(Bike) : response.status(404).send({message: "no matching Bikes found"})
    
  })
  
  router.put('/:id', async (request, response) => {
    console.log(request.params)
    const { id } = request.params;
    const data = request.body;
    console.log(data);
    
    const result = await UpdateBikeByID(id, data);
    const Bike = await GetBikesByID(id);
    response.send( Bike) 
   
    
  })
  
  
  router.delete('/:id', async (request, response) => {
    console.log(request.params)
    const { id } = request.params;
    
    
    const result = await DeleteBikeByID(id);
  
    
    result.deletedCount > 0 ? response.send(result) : response.status(404).send({message: "no matching Bikes found"})
    
  })
  

 

  export const ebikeRouter = router;