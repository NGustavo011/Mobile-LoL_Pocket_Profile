import { Router } from 'express';
import profileRouter from './profile';
import masteryRouter from './mastery';
import "dotenv/config";

const routes = Router();

routes.use('/profile', profileRouter);
routes.use('/mastery', masteryRouter);

export default routes;
