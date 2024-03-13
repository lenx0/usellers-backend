import { Router } from 'express';
import UsersRouter from './UsersRouters';

const routers = Router();

routers.use('/v1/users', UsersRouter);

export default routers;