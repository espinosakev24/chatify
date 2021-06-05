import { TUserDb, TUserRegister } from '../dtos/user.types';

class UserModelInMemory {
  users: TUserDb[] = [];
  id: number = 1;

  increaseId () {
    this.id = this.id + 1;
  }

  getUsers () {
    return this.users;
  }

  getUserById (id: string): TUserDb | {} {
    return this.users.find((usr) => usr.id === parseInt(id)) || {};
  }

  getUserByEmail (email: string) {
    return this.users.find((usr) => usr.email === email);
  }

  getUserByUsername (username: string) {
    return this.users.find((usr) => usr.username === username);
  }

  addUser (user: TUserRegister) {
    const newUser = {
      ...user,
      id: this.id
    };
    this.users.push(newUser);
    this.increaseId();
    return newUser;
  }
}

export default UserModelInMemory;
