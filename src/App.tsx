import React, { FormEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from './compomnents/input';
import { Button } from './compomnents/button';

function App() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log('teste');
  }

  function handle() {}

  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
        <Input
          handle={handle}
          type={'email'}
          placeholder={'digite seu email'}
        />
        <Input
          handle={handle}
          type={'password'}
          placeholder={'digite sua senha'}
        />

        <Button name="Enviar" type="submit" />
      </form>
    </div>
  );
}

export default App;
