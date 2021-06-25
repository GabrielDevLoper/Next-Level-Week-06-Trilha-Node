import {getCustomRepository} from "typeorm";
import {ComplimentRepository} from "../repositories/ComplimentRepository";


class ListUserComplimentReceiveService {
    async execute(id_user: string){
        const complimentRepository = getCustomRepository(ComplimentRepository);

        const compliment = await complimentRepository.find({
            where: {
                user_receiver: id_user
            }
        });

        return compliment;
    }
}
export default new ListUserComplimentReceiveService();