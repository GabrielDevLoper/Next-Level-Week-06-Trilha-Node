import { Router } from "express";
import CreateUserController from "./controllers/CreateUserController";
import CreateTagController from "./controllers/CreateTagController";
import {admin} from "./middlewares/admin";
import AuthenticateUserController from "./controllers/AuthenticateUserController";

const routes = Router();

routes.post("/login", AuthenticateUserController.store);
routes.post("/users", CreateUserController.store);
routes.post("/tags", admin ,CreateTagController.store);


export { routes };