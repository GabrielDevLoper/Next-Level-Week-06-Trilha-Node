import {UserRepository} from "../repositories/UserRepository";
import {getCustomRepository} from "typeorm";
import {AppError} from "../errors/AppError";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({name, email, admin}: IUserRequest) {
        if (!email) {
            throw new AppError("Email incorreto", 400);
        }

        const userRepository = getCustomRepository(UserRepository);

        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new AppError("Usuário já cadastrado no sistema", 400);
        }

        const user = await userRepository.createAndSave({
            name,
            email,
            admin
        });

        return user;
    }
}

export default new CreateUserService();