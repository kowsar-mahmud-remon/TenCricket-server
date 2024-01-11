import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
const router = express.Router();

router.get('/:id', UserController.getSingleUser);

router.get('/', UserController.getAllUsers);

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);

router.delete('/:id', UserController.deleteUser);

router.patch('/:id', UserController.updateUser);

export const UserRoutes = router;
