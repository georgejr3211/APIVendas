"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const keys_1 = __importDefault(require("../../config/keys"));
exports.default = {
    Mutation: {
        generateToken: (_, { user }, context) => {
            const payload = {
                name: user.nome,
                password: user.password
            };
            return jwt.sign(payload, keys_1.default.SECRET, { expiresIn: '1h' });
        }
    }
};
//# sourceMappingURL=auth.resolver.js.map