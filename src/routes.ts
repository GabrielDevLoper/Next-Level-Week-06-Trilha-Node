import { Router } from "express";
import CreateUserController from "./controllers/CreateUserController";

const routes = Router();

routes.post("/users", CreateUserController.store);

export { routes };