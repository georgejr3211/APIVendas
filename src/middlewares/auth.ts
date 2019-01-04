import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';
import keys from "../config/keys";

export function authMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {

    const token: string = req.get('x-access-token') || undefined;

    req['context'] = {}
    req['context']['token'] = null;

    if (token === undefined || !token) return next();

    const tokenVerify = jwt.verify(token, keys.SECRET, (err, decoded) => {
      if (err) {
        return next();
      }

      return decoded;

    });

    req['context']['token'] = tokenVerify;

    return next();
  }
}
