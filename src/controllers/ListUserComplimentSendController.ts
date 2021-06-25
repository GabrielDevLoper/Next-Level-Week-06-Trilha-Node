import {Request, Response} from "express";
import ListUserComplimentSendService from "../service/ListUserComplimentSendService";

class ListUserComplimentSendController {
    async index(req:Request, res: Response){
        const { id_user } = req;

        const compliments = await ListUserComplimentSendService.execute(id_user);

        return res.json(compliments);
    }
}

export default new ListUserComplimentSendController();