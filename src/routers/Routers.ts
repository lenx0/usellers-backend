import { Router } from 'express';

import UserController from '../controllers/UserController';

const userController = new UserController();
const mainRouter = Router();

mainRouter.post("/order/create/", userController.createUser);
mainRouter.get("/order/list/", userController.findUser);
mainRouter.post("/order/list/:_id", userController.findUserById);
mainRouter.put("/order/update/:_id", userController.updateUser);
mainRouter.delete("/order/delete/:_id", userController.deleteUser);

export default mainRouter;