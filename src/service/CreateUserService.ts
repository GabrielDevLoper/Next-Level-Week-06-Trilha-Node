import {UserRepository} from "../repositories/UserRepository";
import {getCustomRepository} from "typeorm";
import {AppError} from "../errors/AppError";


interface IUserRequest {
    name: string;
    email: string;
    cpf: string;
    password: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({name, cpf, password, email, admin = false}: IUserRequest) {
        if (!email) {
            throw new AppError("Email incorreto", 400);
        }

        const userRepository = getCustomRepository(UserRepository);

        const userAlreadyExists = await userRepository.findOne({
            cpf
        });

        if (userAlreadyExists) {
            throw new AppError("Usuário já cadastrado no sistema", 400);
        }

        const user = await userRepository.createAndSave({
            name,
            cpf,
            password,
            email,
            admin
        });

        delete user.password;

        return user;
    }
}

export default new CreateUserService();