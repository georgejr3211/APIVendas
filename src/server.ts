import { User } from './models/user.model';
import 'reflect-metadata';
import app from "./app";
import { createConnection } from 'typeorm';


createConnection()
  .then(() => {
    console.log('Connected on mySQL');
  });

const port = 3000;
app.listen(port, () => {
  console.log('Server ON', port);
});
