import { Request, Response, NextFunction } from "express";
import {AppError} from "../errors/AppError";

export function admin(req: Request, res: Response, next: NextFunction){
    // Verificar se o usuario é admin
    const admin = true;

    if(admin){
        return next();
    }

    throw new AppError("Você não tem permissão para realizar esta operação", 401)

}