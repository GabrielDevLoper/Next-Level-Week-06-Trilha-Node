import {Request, Response} from "express";
import ListTagsService from "../service/ListTagsService";

class ListTagsController {
    async index(req: Request, res: Response){
        const tags = await ListTagsService.execute();

        return res.json(tags);
    }
}

export default new ListTagsController();