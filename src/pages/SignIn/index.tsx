import { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../compomnents/button';
import { Form } from '../../compomnents/form';
import { Input } from '../../compomnents/input';

export function SignIn() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log('teste');
  }

  function handle() {}

  return (
    <Form handle={event => handleSubmit(event)}>
      <Input handle={handle} type={'email'} placeholder={'digite seu email'} />
      <Input
        handle={handle}
        type={'password'}
        placeholder={'digite sua senha'}
      />

      <Button name="Enviar" type="submit" />

      <div>
        <span>Não tem conta?</span>
        <Link to="/sign_up">Cadastra-se</Link>
      </div>
    </Form>
  );
}
