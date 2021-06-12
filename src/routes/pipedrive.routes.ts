import { Router } from 'express';

import PipedriveController from '../controllers/pipedrive-controller';

const tradesRouter = Router();
const pipedriveController = new PipedriveController();

tradesRouter.get('/', pipedriveController.index);

export default tradesRouter;
