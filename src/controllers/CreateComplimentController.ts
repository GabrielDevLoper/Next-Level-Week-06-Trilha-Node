import {Request, Response} from "express";
import CreateComplimentService from "../service/CreateComplimentService";

class CreateComplimentController {
    async store(req: Request, res: Response){
        const { id_tag, user_receiver, message } = req.body;

        const { id_user } = req;

        const compliment = await CreateComplimentService.execute({
            id_tag,
            message,
            user_receiver,
            user_sender: id_user
        });

        return res.json(compliment);
    }
}

export default new CreateComplimentController();