import { Router } from 'express';
import { getPriceTableList } from './actions';

const priceTableRoutes = Router();

priceTableRoutes.get('/', getPriceTableList)

export default priceTableRoutes;