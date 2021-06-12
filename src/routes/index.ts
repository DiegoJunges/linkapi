import { Router } from 'express';
import pipedriveRouter from './pipedrive.routes';

const routes = Router();

routes.use('/trades', pipedriveRouter);

export default routes;
