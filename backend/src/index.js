// import external libraries
import express from 'express';
import cors from 'cors';
import logger from 'morgan';

// import internal libraries
import db from './configs/database.js';
import routers from './routes/routes.js';
import { APP_PORT } from './configs/common.js';
import chalk from 'chalk';

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(logger('dev'));

try {
  await db.authenticate();
  console.log(chalk.green('Connect to database successfully'));
} catch (error) {
  console.log(chalk.red('Unable to connect to the database:', error));
}

app.use('/api/v1', routers);

app.get('/', function (req, res) {
  return res.status(200).send({
    name: 'Ecommerce-Clothes APIs',
    msg: 'API is running...',
    status: 'OK',
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send({
    name: 'Ecommerce-Clothes APIs',
    msg: 'API route not found',
    status: 'ERROR',
  });
});

app.listen(APP_PORT, () => console.log(chalk.green(`Server running at http://localhost:${APP_PORT}`)));
