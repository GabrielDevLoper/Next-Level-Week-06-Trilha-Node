import {Repository, EntityRepository} from "typeorm"
import {User} from "../models/User";

interface IUser {
    name: string;
    email: string;
    admin?: boolean;
}

@EntityRepository(User)
class UserRepository extends Repository<User> {

    createAndSave({ name, admin, email }: IUser) {
        const user = new User();
        user.name = name;
        user.email = email;
        user.admin = admin;
        return this.manager.save(user);
    }
}


export {UserRepository}