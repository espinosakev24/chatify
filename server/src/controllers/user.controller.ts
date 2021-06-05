import { Request, Response } from 'express';
import { TUserDb } from '../dtos/user.types';
import UserService from '../services/user.service';

export default class UserController {
  userService: UserService;

  constructor (userService: UserService) {
    this.userService = userService;
    this.getUsers = this.getUsers.bind(this);
  }

  getUsers (req: Request, res: Response) {
    const users: TUserDb[] = this.userService.getUsers();
    res.send(users);
  }
}
