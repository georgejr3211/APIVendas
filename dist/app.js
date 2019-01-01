"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const schema_1 = __importDefault(require("./graphql/schema"));
const auth_1 = require("./middlewares/auth");
class App {
    constructor() {
        this.app = express_1.default();
        this.middleware();
    }
    middleware() {
        this.app.use('/graphql', auth_1.authMiddleware(), express_graphql_1.default((req) => ({
            schema: schema_1.default,
            context: {
                req,
                token: req['context']['token']
            },
            graphiql: process.env.NODE_ENV === 'development'
        })));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map