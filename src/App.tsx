import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from './compomnents/input';

function App() {
  function handleSubmit() {}

  function handle() {}

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}

export default App;
