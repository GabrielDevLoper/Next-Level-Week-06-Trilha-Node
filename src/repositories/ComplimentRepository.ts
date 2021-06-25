import {Repository, EntityRepository} from "typeorm"
import {Compliment} from "../models/Compliment";

interface ICompliment {
    id_tag: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

@EntityRepository(Compliment)
class ComplimentRepository extends Repository<Compliment> {

    createAndSave({id_tag,user_sender, user_receiver, message}: ICompliment) {
        const compliment = new Compliment();
        compliment.id_tag = id_tag;
        compliment.user_sender = user_sender;
        compliment.user_receiver = user_receiver;
        compliment.message = message;
        return this.manager.save(compliment);
    }
}


export {ComplimentRepository}