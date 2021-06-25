import {AppError} from "../errors/AppError";
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../repositories/UserRepository";
import {compare} from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IAuthenticateRequest {
    cpf: string;
    password: string;
}

class AuthenticateUserService {
    async execute({cpf, password}: IAuthenticateRequest) {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({
            cpf
        });

        if (!user) {
            throw new AppError("Credenciais inválidas", 400);
        }

        const isPasswordCorrect = await compare(password, user.password);

        if(!isPasswordCorrect){
            throw new AppError("Credenciais inválidas", 400);
        }

        // Gerar token
        const token = sign({
            name: user.name,
            admin: user.admin
        }, "2abbdd7d1ef21c04bfb52eed94b08661", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export default new AuthenticateUserService();