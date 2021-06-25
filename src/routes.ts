import { Router } from "express";

// Imports dos Middlewares
import {auth} from "./middlewares/auth";
import {admin} from "./middlewares/admin";

// Imports dos Controllers
import CreateUserController from "./controllers/CreateUserController";
import CreateTagController from "./controllers/CreateTagController";
import AuthenticateUserController from "./controllers/AuthenticateUserController";
import CreateComplimentController from "./controllers/CreateComplimentController";

const routes = Router();

routes.post("/login", AuthenticateUserController.store);
routes.post("/users", CreateUserController.store);
routes.post("/tags", auth, admin, CreateTagController.store);
routes.post("/compliments", admin, CreateComplimentController.store);



export { routes };