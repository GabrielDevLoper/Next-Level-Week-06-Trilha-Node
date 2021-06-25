import {getCustomRepository} from "typeorm";
import {ComplimentRepository} from "../repositories/ComplimentRepository";
import {UserRepository} from "../repositories/UserRepository";
import {AppError} from "../errors/AppError";

interface IComplimentRequest {
    id_tag: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}


class CreateComplimentService {
    async execute({id_tag, message, user_receiver, user_sender}:IComplimentRequest){
        const complimentRepository = getCustomRepository(ComplimentRepository);
        const userRepository = getCustomRepository(UserRepository);

        if(user_receiver === user_sender){
            throw new AppError("Os usuarios não podem ser iguais", 404);
        }

        const userReceiverExists = await userRepository.findOne(user_receiver);

        if(!userReceiverExists){
            throw new AppError("Usuario recebedor não existe", 404);
        }

        const userSenderExists = await userRepository.findOne(user_sender);

        if(!userSenderExists){
            throw new AppError("Usuario enviador não existe", 404);
        }

        const compliment = await complimentRepository.createAndSave({id_tag, user_sender, user_receiver, message});

        return compliment;
    }
}

export default new CreateComplimentService();