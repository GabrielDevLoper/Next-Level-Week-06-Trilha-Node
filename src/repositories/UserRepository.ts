import {Repository, EntityRepository} from "typeorm"
import {User} from "../models/User";

interface IUser {
    name: string;
    email: string;
    cpf: string;
    password: string;
    admin?: boolean;
}

@EntityRepository(User)
class UserRepository extends Repository<User> {

    createAndSave({ name, cpf , password, admin, email }: IUser) {
        const user = new User();
        user.name = name;
        user.email = email;
        user.admin = admin;
        user.cpf = cpf;
        user.password = password;
        return this.manager.save(user);
    }
}


export {UserRepository}