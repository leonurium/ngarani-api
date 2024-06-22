import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

router.get('/get-name', (req, res) => {
  const namesPath = path.join(__dirname, '../names.json');
  const names = JSON.parse(fs.readFileSync(namesPath, 'utf-8'));
  const randomName = names[Math.floor(Math.random() * names.length)];
  console.log(randomName);
  res.json({ name: randomName });
});

export default router;