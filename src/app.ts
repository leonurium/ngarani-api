import express from 'express';
import cors from 'cors';
import routerApi from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', routerApi);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});