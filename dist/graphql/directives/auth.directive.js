"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const graphql_1 = require("graphql");
class AuthDirective extends graphql_tools_1.SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const { resolve = graphql_1.defaultFieldResolver } = field;
        field.resolve = async (...args) => {
            const [, , auth] = args;
            const token = auth.token;
            if (!token || !(Object.keys(token).length)) {
                throw new Error('Sem autorização!');
            }
            const result = await resolve.apply(this, args);
            return result;
        };
    }
}
exports.AuthDirective = AuthDirective;
//# sourceMappingURL=auth.directive.js.map