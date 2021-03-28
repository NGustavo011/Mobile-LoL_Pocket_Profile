import { Router } from 'express';
import axios from 'axios';

const profileRouter = Router();

profileRouter.get('/:summoner', async (request, response) => {
  const encodedURL = encodeURIComponent(request.params.summoner);

  axios.get(`https://br1.api.riotgames.com//lol/summoner/v4/summoners/by-name/${encodedURL}`, {
    headers:{
      "X-Riot-Token": process.env.API_KEY,
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8"
    }
  })
  .then(res => {
    console.log(res);
    return response.json(res.data);
}).catch(error => {
    console.log(error);
    response.status(400).send("Summoner não encontrado");
})
});



/*appointmentsRouter.post('/', async (request, response) => {
  const { providerId, date } = request.body;

  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService();

  const appointment = await createAppointment.execute({
    date: parsedDate,
    providerId,
  });
  return response.json(appointment);
});*/

export default profileRouter;
