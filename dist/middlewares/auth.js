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
const keys_1 = __importDefault(require("../config/keys"));
function authMiddleware() {
    return (req, res, next) => {
        const token = req.get('x-access-token') || undefined;
        if (!token)
            return next();
        const tokenVerify = jwt.verify(token, keys_1.default.SECRET, (err, decoded) => {
            if (err) {
                console.log('erro na autenticação');
                return next();
            }
            // verificar no banco se o usuario existe
            return decoded;
        });
        req['context'] = {};
        req['context']['token'] = tokenVerify;
        return next();
    };
}
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.js.map