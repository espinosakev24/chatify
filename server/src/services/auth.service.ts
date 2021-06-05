import { TUserDb, TUserRegister } from '../dtos/user.types';
import { userModel } from './../storage/index.db.dummy';
import bcrypt from 'bcrypt';

export default class AuthService {
  registerUser (user: TUserRegister): TUserDb {
    return userModel.addUser(user);
  }

  async generateHashedPassword (password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await new Promise<string>((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
      });
    });
    return hashedPassword;
  }

  async verifyPassword (password: string, savedPassword: string): Promise<boolean> {
    const passwordsMatch: boolean = await new Promise((resolve, reject) => {
      bcrypt.compare(password, savedPassword, function (err: Error | undefined, result: boolean) {
        if (err) reject(err);
        resolve(result);
      });
    });
    return passwordsMatch;
  }
}
