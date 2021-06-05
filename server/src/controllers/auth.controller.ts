import { Request, Response } from 'express';
import { TUserDb, TUserRegister } from '../dtos/user.types';
import AuthService from '../services/auth.service';
import UserService from '../services/user.service';
import jwt, { SignCallback } from 'jsonwebtoken';
import config from './../config';

export default class AuthController {
  authService: AuthService;
  userService: UserService;

  constructor (authService: AuthService, userService: UserService) {
    this.authService = authService;
    this.userService = userService;
    this.registerUser = this.registerUser.bind(this);
    this.login = this.login.bind(this);
  }

  async registerUser (req: Request, res: Response) {
    const {
      username,
      fullname,
      password
    } = req.body;
    const userExists = this.userService.getUserByUsername(username);
    if (userExists) {
      res.status(400).json({
        message: 'User already exists'
      });
      throw new Error('User already exists');
    }
    const hashedPassword = await this.authService.generateHashedPassword(password);
    const user: TUserRegister = {
      username: username,
      fullname: fullname,
      password: hashedPassword
    };
    const newUser:TUserDb = this.authService.registerUser(user);

    res.send(newUser);
  }

  async login (req: Request, res: Response) {
    const { username, password } = req.body;
    const user = this.userService.getUserByUsername(username);
    if (!user || !Object.keys(user || {}).length) {
      res.status(400).json({
        message: 'Username or password is wrong'
      });
      throw new Error('Username or password is wrong');
    }
    const passwordsMatch = await this.authService.verifyPassword(password, user.password);
    if (!passwordsMatch) {
      res.status(400).json({
        message: 'Username or password is wrong'
      });
      throw new Error('Username or password is wrong');
    }
    const signCallBack: SignCallback = (error, token) => {
      if (error) res.send('something went wrong');
      res.status(201).send({
        user: user,
        token: token
      });
    };
    jwt.sign(
      { id: user.id },
      config.SECRET_KEY,
      signCallBack
    );
  }
}
