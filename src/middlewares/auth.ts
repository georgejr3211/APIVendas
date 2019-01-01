import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';
import keys from "../config/keys";

export function authMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {

    const token: string = req.get('x-access-token') || undefined;

    if (!token) return next();

    const tokenVerify = jwt.verify(token, keys.SECRET, (err, decoded) => {
      if (err) {
        console.log('erro na autenticação');
        return next();
      }

      // verificar no banco se o usuario existe

      return decoded;

    });

    req['context'] = {}
    req['context']['token'] = tokenVerify;

    return next();
  }
}