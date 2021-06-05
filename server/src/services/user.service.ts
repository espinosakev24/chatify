import { TUserDb } from '../dtos/user.types';
import { userModel } from '../storage/index.db.dummy';

export default class UserService {
  getUsers (): TUserDb[] {
    return userModel.getUsers();
  }

  getUserById (id: string) {
    return userModel.getUserById(id);
  }

  getUserByEmail (email: string) {
    return userModel.getUserByEmail(email);
  }

  getUserByUsername (username: string) {
    return userModel.getUserByUsername(username);
  }
}
