import { AuthDirective } from './directives/auth.directive';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeResolvers, mergeTypes, fileLoader } from 'merge-graphql-schemas';

const typeDefsArray = fileLoader(__dirname + '/**/*.graphql.*', { recursive: true });
const resolversArray = fileLoader(__dirname + '/**/*.resolver.*', { recursive: true });

const typeDefs = mergeTypes(typeDefsArray, { all: true });
const resolvers = mergeResolvers(resolversArray);

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    auth: AuthDirective
  }
});