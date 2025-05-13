import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response): void => {
  res.status(200).json('OK');
  // If you don't use 'req' here, it should be flagged
});

app.listen(PORT, (): void => {
  console.log(`Server listening on port ${PORT}`);
});