import express from 'express';
import AuthService from '../services/auth.service';
import UserService from '../services/user.service';
import AuthController from './../controllers/auth.controller';

const router = express.Router();
const userService: UserService = new UserService();
const authService = new AuthService();
const authController = new AuthController(authService, userService);

router.post('/register', authController.registerUser);
router.post('/login', authController.login);

export default router;
