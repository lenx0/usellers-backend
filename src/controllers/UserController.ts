import { Request, Response } from "express";
import UserSchema from "../schemas/UserSchema";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const user = await UserSchema.create(req.body);
      console.log("User has been Created!");
      return res.status(201).send(user);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({ error: err.message });
      }
      return res.status(400).send({ error: 'Unknown error' });
    }
  }

  async findUser(req: Request, res: Response) {
    try {
      const users = await UserSchema.find({});
      console.log("Users found:", users);
      return res.send(users);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({ error: err.message });
      }
      return res.status(400).send({ error: 'Unknown error' });
    }
  }

  async findUserById(req: Request, res: Response) {
    try {
      const user = await UserSchema.findById(req.params.id);
      if (!user) {
        return res.status(404).send({ error: 'User not found.' });
      }
      return res.send(user);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({ error: err.message });
      }
      return res.status(400).send({ error: 'Unknown error' });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const userId = req.params._id;
      const updatedUser = await UserSchema.findByIdAndUpdate(userId, req.body, { new: true });
  
      if (!updatedUser) {
        return res.status(404).send({ error: 'User not found.' });
      }
  
      return res.send(updatedUser);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({ error: err.message });
      }
      return res.status(400).send({ error: 'Unknown error' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const user = await UserSchema.findByIdAndDelete(req.params._id);
      if (!user) {
        return res.status(404).send({ error: 'User not found.' });
      }
      return res.status(204).send();
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({ error: err.message });
      }
      return res.status(400).send({ error: 'Unknown error' });
    }
  }
}

export default UserController;
