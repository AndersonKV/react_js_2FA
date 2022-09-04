import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';

import { Button } from '../../compomnents/button';
import { Form } from '../../compomnents/form';
import { Input } from '../../compomnents/input';
import { Container } from './styles';

export function SignIn() {
  let navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    localStorage.setItem('@auth', JSON.stringify('[]'));

    console.log('teste');
  }

  function handle() {}

  return (
    <Container>
      <Form handle={event => handleSubmit(event)}>
        {/* <Input
          name="email"
          handle={handle}
          type={'email'}
          placeholder={'digite seu email'}
          labelError={formik.errors.email}
        />
        <Input
          name="password"
          handle={handle}
          type={'password'}
          placeholder={'digite sua senha'}
          labelError={formik.errors.}
        /> */}

        <Button color="#2948ff" name="Enviar" type="submit" />

        <div>
          <span>Não tem conta?</span>
          <Link to="/sign_up">Cadastra-se</Link>
        </div>
      </Form>
    </Container>
  );
}
