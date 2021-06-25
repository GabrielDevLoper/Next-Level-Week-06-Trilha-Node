import {getCustomRepository} from "typeorm";
import {ComplimentRepository} from "../repositories/ComplimentRepository";


class ListUserComplimentSendService {
    async execute(id_user: string){
        const complimentRepository = getCustomRepository(ComplimentRepository);

        const compliment = await complimentRepository.find({
            where: {
                user_sender: id_user
            }
        });

        return compliment;
    }
}
export default new ListUserComplimentSendService();