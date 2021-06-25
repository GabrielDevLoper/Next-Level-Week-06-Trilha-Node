import {Request, Response, NextFunction} from "express";
import {AppError} from "../errors/AppError";
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../repositories/UserRepository";

export async function admin(req: Request, res: Response, next: NextFunction) {
    const {id_user} = req;

    const userRepository = getCustomRepository(UserRepository);

    const {admin} = await userRepository.findOne(id_user)

    if (admin) {
        return next();
    }

    throw new AppError("Você não tem permissão para realizar esta operação", 401)

}