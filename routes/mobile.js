import express  from "express";

import {
    DeleteMobileByID,
    UpdateMobileByID,
    GetMobilesByID,
    DeleteAllMobiles,
    CreateNewMobiles,
    GetAllMobiles,
    
} from "../Helpers/mobileHelper.js"

const router = express.Router();





  router.get('/', async (request, response) => {
    console.log(request.query)
    const filter = request.query;
    
  if(filter.rating){
  filter.rating = parseInt(filter.rating);
  }
  const filteredBike = await GetAllMobiles(filter);
  
     
      response.send(filteredBike)
   
  })
  
  
  router.post('/', async (request, response) =>{
    const data = request.body;
    
    const result = await CreateNewMobiles(data)
  
    response.send(result);
  
  });
  
  router.delete('/', async (request, response) =>{
    
    const result = await DeleteAllMobiles()
  
    response.send(result);
  
  });
  
  router.get('/:id', async (request, response) => {
    console.log(request.params)
    const { id } = request.params;
    
    
    const Mobile = await GetMobilesByID(id);
  
    
    Mobile ? response.send(Mobile) : response.status(404).send({message: "no matching Mobiles found"})
    
  })
  
  router.put('/:id', async (request, response) => {
    console.log(request.params)
    const { id } = request.params;
    const data = request.body;
    console.log(data);
    
    const result = await UpdateMobileByID(id, data);
    const Mobile = await GetMobilesByID(id);
    response.send( Mobile) 
   
    
  })



  
  
  router.delete('/:id', async (request, response) => {
    console.log(request.params)
    const { id } = request.params;
    
    
    const result = await DeleteMobileByID(id);
  
    
    result.deletedCount > 0 ? response.send(result) : response.status(404).send({message: "no matching Mobiles found"})
    
  })

  //cart

  
 

  export const mobileRouter = router;



