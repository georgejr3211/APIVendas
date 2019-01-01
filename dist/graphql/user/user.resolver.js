"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../../models/user.model");
exports.default = {
    Query: {
        getUsers: async (_, args, context) => {
            const users = await user_model_1.User.find({ relations: ['vendas'] });
            return users;
        }
    }
};
//# sourceMappingURL=user.resolver.js.map