import { Router } from "express";

// Imports dos Middlewares
import {auth} from "./middlewares/auth";
import {admin} from "./middlewares/admin";

// Imports dos Controllers
import CreateUserController from "./controllers/CreateUserController";
import CreateTagController from "./controllers/CreateTagController";
import AuthenticateUserController from "./controllers/AuthenticateUserController";
import CreateComplimentController from "./controllers/CreateComplimentController";
import ListUserComplimentSendController from "./controllers/ListUserComplimentSendController";
import ListUserComplimentReceiveController from "./controllers/ListUserComplimentReceiveController";
import ListTagsController from "./controllers/ListTagsController";

const routes = Router();

routes.post("/login", AuthenticateUserController.store);
routes.post("/users", CreateUserController.store);
routes.get("/tags", ListTagsController.index);

routes.use(auth);
routes.post("/tags", admin, CreateTagController.store);
routes.post("/compliments", CreateComplimentController.store);
routes.get("/compliments/send", ListUserComplimentSendController.index);
routes.get("/compliments/receive", ListUserComplimentReceiveController.index);





export { routes };