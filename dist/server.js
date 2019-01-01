"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const typeorm_1 = require("typeorm");
typeorm_1.createConnection()
    .then(() => {
    console.log('Connected on mySQL');
});
const port = 3000;
app_1.default.listen(port, () => {
    console.log('Server ON', port);
});
//# sourceMappingURL=server.js.map