import { FormEvent } from 'react';
import { Button } from '../../compomnents/button';
import { Input } from '../../compomnents/input';

export function SignUp() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log('teste');
  }

  function handle() {}

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <Input handle={handle} type={'email'} placeholder={'digite seu email'} />
      <Input
        handle={handle}
        type={'password'}
        placeholder={'digite sua senha'}
      />

      <Button name="Enviar" type="submit" />
    </form>
  );
}
