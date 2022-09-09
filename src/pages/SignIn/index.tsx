import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../store/userSlicer';

import { Button } from '../../compomnents/button';
import { Form } from '../../compomnents/form';
import { Input } from '../../compomnents/input';
import { useFormik } from '../../hooks/useFormik';
import { Container } from './styles';
import { selectSMS, sms } from '../../store/smsSlicer';

export function SignIn() {
  const dispatch = useDispatch();

  const { user, token } = useSelector(selectAuth);
  const { digit, messageFromSMS } = useSelector(selectSMS);

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState('');

  let navigate = useNavigate();

  const intials = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    phone: '',
    sms: '',
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

    if (Object.values(formik.loginValidate(formik.values)).length) {
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formik.values),
    };

    fetch('http://localhost:3333/users/sign_in', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setErrors(data.error);
          return;
        }

        setErrors('');

        dispatch(
          sms({ digit: data.sms.digit, messageFromSMS: data.sms.message })
        );
        setSuccess(!success);
      });
  }

  function handleCheckSMS() {
    if (String(formik.values.sms) === String(digit)) {
      navigate('/', { state: { auth: true } });
    } else {
      setErrors('senha incorreta');
    }
  }

  if (success) {
    return (
      <Container>
        <div className="container-message">
          <span>{messageFromSMS}</span>
          <Input
            name="sms"
            handle={formik.handleChange}
            type={'number'}
            placeholder={'******'}
            labelError={formik.errors.phone}
          />

          <button onClick={handleCheckSMS}>Enviar</button>
          {errors ? (
            <div className="display-error">
              <p>
                *<label>{errors}</label>
              </p>
            </div>
          ) : null}
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

        {errors ? (
          <div className="display-error">
            <p>
              *<label>{errors}</label>
            </p>
          </div>
        ) : null}

        <Button color="#2948ff" name="Enviar" type="submit" />

        <div>
          <span>Não tem conta?</span>
          <Link to="/sign_up">Cadastra-se</Link>
        </div>
      </Form>
    </Container>
  );
}
