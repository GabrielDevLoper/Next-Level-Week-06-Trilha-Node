import {Request, Response} from "express";
import CreateUserService from "../service/CreateUserService";

class CreateUserController {
    async store(req: Request, res: Response) {
        const {name, email, admin} = req.body;

        const user = await CreateUserService.execute({name, email, admin});

        return res.json(user);
    }

}

export default new CreateUserController();