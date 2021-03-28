import { Router } from 'express';
import axios from 'axios';

const masteryRouter = Router();

masteryRouter.get('/:id', async (request, response) => {
  axios.get(`https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${request.params.id}`, {
    headers:{
      "X-Riot-Token": process.env.API_KEY
    }
  })
  .then(res => {
    console.log(res);
    return response.json(res.data);
}).catch(error => {
    console.log(error);
    response.status(400).send("Não foi possível carregar maestrias");
})
});

export default masteryRouter;
