import express from 'express';
import bodyParser from 'body-parser';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000;

app.use(express.static(join(__dirname, '/public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '/public/index.html'))
});

app.listen(port, () => {
  console.log("Server started at  https://localhost:" + port)
});