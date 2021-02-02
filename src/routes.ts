import { Router } from 'express';
import planRoutes from './controllers/plan';
import priceTableRoutes from './controllers/priceTable';
import simulationRoutes from './controllers/simulation';

const router = Router();

router.use('/plan', planRoutes);
router.use('/priceTable', priceTableRoutes);
router.use('/simulation', simulationRoutes);

export { router };