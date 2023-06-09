import express, {Request, Response} from 'express';
import mustache from 'mustache-express';
import mainRouter from './router/home';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const app= express();
const port = process.env.PORT || 3000

app.engine("mustache", mustache());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));

app.use(mainRouter);

app.listen(port);