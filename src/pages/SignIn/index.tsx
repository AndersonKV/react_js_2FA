import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';

import { Button } from '../../compomnents/button';
import { Form } from '../../compomnents/form';
import { Input } from '../../compomnents/input';
import { useFormik } from '../../hooks/useFormik';
import { Container } from './styles';

export function SignIn() {
  const [success, setSuccess] = useState(false);

  let navigate = useNavigate();

  const intials = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    phone: '',
  };

  const formik = useFormik({
    initialValues: {
      ...intials,
    },
    labelErrors: {
      ...intials,
    },
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    localStorage.setItem('@auth', JSON.stringify('[]'));

    if (Object.values(formik.loginValidate(formik.values)).length) {
      return;
    }

    setSuccess(!success);

    console.log('teste');
  }

  if (success) {
    return (
      <Container>
        <div>
          <span></span>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Form handle={event => handleSubmit(event)}>
        <Input
          name="email"
          handle={formik.handleChange}
          type={'email'}
          placeholder={'digite seu email'}
          labelError={formik.errors.email}
        />
        <Input
          name="password"
          handle={formik.handleChange}
          type={'password'}
          placeholder={'digite sua senha'}
          labelError={formik.errors.password}
        />

        <Button color="#2948ff" name="Enviar" type="submit" />

        <div>
          <span>Não tem conta?</span>
          <Link to="/sign_up">Cadastra-se</Link>
        </div>
      </Form>
    </Container>
  );
}
