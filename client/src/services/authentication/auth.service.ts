import { TUserRegister, TUserLogin } from './../../types/user.types';

import config from './../../config';
import axios from 'axios';


const registerUrl: string = config.BASE_ENDPOINT + '/auth/register';
const loginUrl: string = config.BASE_ENDPOINT + '/auth/register';

class AuthenticationService {
  async registerUser(user: TUserRegister) {
    const response = await axios.post(registerUrl, user);
    return response;
  }

  async loginUser(user: TUserLogin) {
    const response = await axios.post(loginUrl, user);
    return response;
  }
}


export default AuthenticationService;