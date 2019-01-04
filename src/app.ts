import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql/schema';
import { authMiddleware } from './middlewares/auth';

class App {

  app: express.Application;

  constructor() {
    this.app = express();
    this.middleware();
  }

  middleware(): void {
    this.app.use('/graphql',
      authMiddleware(),
      graphqlHTTP((req) => ({
        schema: schema,
        context: {
          req,
          token: req['context']['token']
        },
        graphiql: process.env.NODE_ENV === 'development'
      }))
    );
  }

}

export default new App().app;
