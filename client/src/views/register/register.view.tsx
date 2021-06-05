import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/default_input/input.component';
import Button from '../../components/main_button/button.component';
import { authService } from './../../services/authentication/index.service';
import { useHistory } from 'react-router-dom';

const LoginView: React.FunctionComponent = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    fullname: '',
    username: '',
    password: ''
  });

  const onChangeHanlder = (event: any) => {
    const { name, value } = event.target;
    setUser({...user, [name]: value});
  }

  const submitHandler = async () => {
    try {
      const response = await authService.registerUser(user);
    } catch(error) {
      console.log(error.response.data);
    }
    // history.push('/login')
  }

  return (
    <div className='card p-5'>
       <p className="title is-4 has-text-centered	">Register</p>
        <Input
          label={'Fullname'}
          type='email'
          className='input is-medium'
          action={onChangeHanlder}
          name='fullname'
        />
        <Input
          label={'Username'}
          type='email'
          className='input is-medium'
          action={onChangeHanlder}
          name='username'
        />
        <Input
          label={'Password'}
          type='password'
          className='input is-medium'
          action={onChangeHanlder}
          name='password'
        />
        <Button
          className='button is-medium is-fullwidth is-primary'
          label={'Register'}
          action={submitHandler}
        />
        <br />
        <p>Already have an account? <Link to='/login'>login</Link></p>
    </div>
  );

}

export default LoginView;
