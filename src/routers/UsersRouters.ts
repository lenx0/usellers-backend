import { Router } from 'express';

import UserController from '../controllers/UserController';

const userController = new UserController();
const mainRouter = Router();

mainRouter.post("/create", userController.createUser);
mainRouter.get("/list", userController.findUser);
mainRouter.post("/list/:_id", userController.findUserById);
mainRouter.put("/update/:_id", userController.updateUser);
mainRouter.delete("/delete/:_id", userController.deleteUser);

export default mainRouter;