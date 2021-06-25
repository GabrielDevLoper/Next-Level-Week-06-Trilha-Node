import {Request, Response} from "express";
import CreateTagService from "../service/CreateTagService";

class CreateUserController {
    async store(req: Request, res: Response) {
        const {name} = req.body;

        const tag = await CreateTagService.execute({name});

        return res.json(tag);
    }

}

export default new CreateUserController();