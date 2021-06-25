import {Request, Response} from "express";
import ListUserComplimentReceiveService from "../service/ListUserComplimentReceiveService";

class ListUserComplimentSendController {
    async index(req:Request, res: Response){
        const { id_user } = req;

        const compliments = await ListUserComplimentReceiveService.execute(id_user);

        return res.json(compliments);
    }
}

export default new ListUserComplimentSendController();