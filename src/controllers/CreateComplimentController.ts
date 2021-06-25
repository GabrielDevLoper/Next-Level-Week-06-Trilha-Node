import {Request, Response} from "express";
import CreateComplimentService from "../service/CreateComplimentService";

class CreateComplimentController {
    async store(req: Request, res: Response){
        const { id_tag, user_sender, user_receiver, message } = req.body;

        const compliment = await CreateComplimentService.execute({
            id_tag,
            message,
            user_receiver,
            user_sender
        });

        return res.json(compliment);
    }
}

export default new CreateComplimentController();