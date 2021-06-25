import {Request, Response} from "express";
import AuthenticateUserService from "../service/AuthenticateUserService";

class AuthenticateUserController {
    async store(req: Request, res: Response) {
        const {cpf, password} = req.body;

        const token = await AuthenticateUserService.execute({
            cpf,
            password
        });

        return res.json({token});
    }
}

export default new AuthenticateUserController();