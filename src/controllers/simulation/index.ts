import { Router } from 'express';
import { simulationCallValue } from './actions';

const simulationRoutes = Router();

simulationRoutes.post('/', simulationCallValue)

export default simulationRoutes;