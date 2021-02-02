import express from 'express';
import { router } from './routes';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env' });

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', router);

export { app }