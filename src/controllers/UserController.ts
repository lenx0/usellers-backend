import { Request, Response } from "express";
import UserSchema from "../schemas/UserSchema";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const orders = await UserSchema.create(req.body);
      console.log("User has been Created!");
      return res.send(orders);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }

  async findUser(req: Request, res: Response) {
    try {
      const users = await UserSchema.find(req.body);
      console.log("Users finded:", users);
      return res.send(users);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }

  async findUserById(req: Request, res: Response) {
    try {
      const users = await UserSchema.find({ _id: req.params.id });
      return res.send(users);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const userId = req.params._id;
      const updatedUser = await UserSchema.findByIdAndUpdate(userId, req.body, { new: true });
  
      if (!updatedUser) {
        return res.status(404).send({ error: 'Usuário não encontrado.' });
      }
  
      return res.send(updatedUser);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const users = await UserSchema.findByIdAndDelete(req.params._id);
      return res.send();
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }
}

export default UserController;
