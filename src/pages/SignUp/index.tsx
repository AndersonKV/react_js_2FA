import { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../compomnents/button';
import { Form } from '../../compomnents/form';
import { Input } from '../../compomnents/input';
import { Navigate, useNavigate } from 'react-router-dom';
import { Container } from './styles';

export function SignUp() {
  let navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    //navigate('/created_success', { state: { success: true } });
  }

  function handle() {}

  return (
    <Container>
      <Form handle={event => handleSubmit(event)}>
        <Input handle={handle} type={'text'} placeholder={'digite seu nome'} />
        <Input
          handle={handle}
          type={'email'}
          placeholder={'Digite seu email'}
        />
        <Input
          handle={handle}
          type={'password'}
          placeholder={'Digite sua senha'}
        />
        <Input
          handle={handle}
          type={'password'}
          placeholder={'Senha de confirmação'}
        />

        <Button color="#2948ff" name="Registrar" type="submit" />
        <div>
          <span>Tem uma conta?</span>
          <Link to="/sign_in">Conecte-se</Link>
        </div>
      </Form>
    </Container>
  );
}
