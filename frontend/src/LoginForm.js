import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormik } from 'formik';
// eslint-disable-next-line import/no-extraneous-dependencies
import Button from 'react-bootstrap/Button';
// eslint-disable-next-line import/no-extraneous-dependencies
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
  });
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Ваш ник"
          value={formik.values.login}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Пароль"
          value={formik.values.password}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
  );
};

export default LoginForm;
/*
validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
*/
