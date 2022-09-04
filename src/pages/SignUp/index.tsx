import { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../compomnents/button';
import { Form } from '../../compomnents/form';
import { Input } from '../../compomnents/input';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { useFormik } from '../../hooks/useFormik';

export function SignUp() {
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

    if (Object.values(formik.registerValidate(formik.values)).length) {
      return;
    }

    //navigate('/created_success', { state: { success: true } });
  }

  return (
    <Container>
      <Form handle={event => handleSubmit(event)}>
        <Input
          name="name"
          handle={formik.handleChange}
          type={'text'}
          placeholder={'digite seu nome'}
          labelError={formik.errors.name}
        />
        <Input
          name="email"
          handle={formik.handleChange}
          type={'email'}
          placeholder={'Digite seu email'}
          labelError={formik.errors.email}
        />
        <Input
          name="password"
          handle={formik.handleChange}
          type={'password'}
          placeholder={'Digite sua senha'}
          labelError={formik.errors.password}
        />

        <Input
          name="phone"
          handle={formik.handleChange}
          type={'number'}
          placeholder={'Seu celular'}
          labelError={formik.errors.phone}
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
