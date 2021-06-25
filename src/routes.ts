import { Router } from "express";
import CreateUserController from "./controllers/CreateUserController";
import CreateTagController from "./controllers/CreateTagController";
import {admin} from "./middlewares/admin";

const routes = Router();

routes.post("/users", CreateUserController.store);
routes.post("/tags", admin ,CreateTagController.store);

export { routes };