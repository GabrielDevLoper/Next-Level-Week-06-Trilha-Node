import { Request, Response, NextFunction } from "express";
import {AppError} from "../errors/AppError";
import { verify } from "jsonwebtoken";

interface IPayload {
    admin: boolean;
    sub: string;
}

export function auth(req: Request, res: Response, next: NextFunction){
    // receber o token
    const authToken = req.headers.authorization;

    //validar token se está preenchido
    if(!authToken){
        throw new AppError("Token não informado", 401)
    }

    const [, token] = authToken.split(" ");

    try {
        // validar se token é valido
        const {sub} = verify(token, "2abbdd7d1ef21c04bfb52eed94b08661") as IPayload;

        // recuperar informações do usuário
        req.id_user = String(sub);

        return next();
    }catch (err){
        throw new AppError("token inválido", 400);
    }


}