import React, { FormEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from './compomnents/input';
import { Button } from './compomnents/button';
import Router from './routes';

function App() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log('teste');
  }

  function handle() {}

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
