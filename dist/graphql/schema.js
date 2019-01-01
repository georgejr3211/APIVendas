"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_directive_1 = require("./directives/auth.directive");
const graphql_tools_1 = require("graphql-tools");
const merge_graphql_schemas_1 = require("merge-graphql-schemas");
const typeDefsArray = merge_graphql_schemas_1.fileLoader(__dirname + '/**/*.graphql.*', { recursive: true });
const resolversArray = merge_graphql_schemas_1.fileLoader(__dirname + '/**/*.resolver.*', { recursive: true });
const typeDefs = merge_graphql_schemas_1.mergeTypes(typeDefsArray, { all: true });
const resolvers = merge_graphql_schemas_1.mergeResolvers(resolversArray);
exports.default = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives: {
        auth: auth_directive_1.AuthDirective
    }
});
//# sourceMappingURL=schema.js.map