import { FormEvent, useEffect, useState } from 'react';

interface PropsForm {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  phone: string;
}

interface IProps {
  initialValues: PropsForm;
  labelErrors: PropsForm;
}

export function useFormik({ initialValues, labelErrors }: IProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(labelErrors);

  function handleChange(event: FormEvent) {
    const target = event.target as HTMLElement;
    const fieldName = target.getAttribute('name') as string;

    const value = (event.target as HTMLInputElement).value;

    const output = fieldName === 'phone' ? value : value.toLowerCase();

    setValues({
      ...values,
      [fieldName]: output,
    });
  }

  function loginValidate(values: PropsForm) {
    const err = {} as any;
    let regex = new RegExp(
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    );

    if (values.email.length === 0 || regex.test(values.email) === false) {
      err.email = 'Email formatado';
    }

    if (values.password.length < 8) {
      err.password = 'A senha deve ter 8 digitos';
    }

    setErrors(err);
    return err;
  }

  function registerValidate(values: PropsForm) {
    const err = {} as any;
    let regex = new RegExp(
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    );
    if (values.name.length < 6 || values.name.length > 30) {
      err.name = 'O nome deve ter entre 6 e 30 caracteres';
    }

    if (values.email.length === 0 || regex.test(values.email) === false) {
      err.email = 'Email formatado';
    }

    if (values.password.length < 8) {
      err.password = 'A senha deve ter 8 digitos';
    }

    if (values.phone.length !== 11) {
      err.phone = 'Celular mal formatado';
    }

    setErrors(err);
    return err;
  }

  function databaseError(err: PropsForm) {
    setErrors(err);
    return err;
  }

  return {
    values,
    errors,
    setErrors,
    handleChange,
    loginValidate,
    registerValidate,
    databaseError,
  };
}
