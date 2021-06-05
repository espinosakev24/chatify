import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/default_input/input.component';
import Button from '../../components/main_button/button.component';
import { authService } from './../../services/authentication/index.service';

import './login.view.scss';

const LoginView: React.FunctionComponent = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const submitHandler = async () => {
    const response = await authService.loginUser(user);
    console.log(response);
  }

  const onChangeHandler = (event: any) => {
    const {name, value} = event.target;

    setUser({...user, [name]: value});
  }
  return (
    <div className='card p-5'>
       <p className="title is-4 has-text-centered	">Login</p>
        <Input
          label={'Username'}
          type='email'
          className='input is-medium'
          name='username'
          action={onChangeHandler}
        />
        <Input
          label={'Password'}
          type='password'
          className='input is-medium'
          name='password'
          action={onChangeHandler}
        />
        <Button
          className='button is-medium is-fullwidth is-primary'
          label={'Login'}
          action={submitHandler}
        />
        <br />
        <p>Not registered yet? click <Link to='/register'>here</Link></p>
    </div>
  );

}

export default LoginView;
