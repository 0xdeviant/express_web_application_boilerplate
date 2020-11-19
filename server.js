import Express from 'express';
import http from 'http'
import cors from 'cors'
import config from './server/config.js';
import morgan from 'morgan';

const app = Express();
const PORT = config.PORT
const HOST = 'localhost'

// Node modules
app.use(Express.json());
app.use(cors())
app.use(morgan('dev'))

app.use(Express.static('public'));

const server = http.createServer(app);

server.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`)
})