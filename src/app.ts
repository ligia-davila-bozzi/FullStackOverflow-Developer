import express from 'express';
import cors from 'cors';
import healthRouter from './routes/healthRouter';

const app = express();

app.use(cors());
app.use(express.json());
app.use(healthRouter);

export default app;
