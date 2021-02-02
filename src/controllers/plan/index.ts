import { Router } from 'express';
import { createPlan, getAllPlans } from './actions';

const planRoutes = Router();

planRoutes.get('/', getAllPlans);
planRoutes.post('/', createPlan);

export default planRoutes;