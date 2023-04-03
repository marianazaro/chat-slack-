import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormik } from 'formik';
// eslint-disable-next-line import/no-extraneous-dependencies
import img from './img';

const LoginForm = () => {
  // eslint-disable-next-line no-unused-vars
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
  });
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="gy-5 col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={img} className="rounded-circle" alt="Войти" />
              </div>
              <form className="col-12 col-md-6 mt-3 mt-mb-0">
                <h1 className="text-center mb-4">Войти</h1>
                <div className="form-floating mb-3">
                  <input name="username" autoComplete="username" required="" placeholder="Ваш ник" id="username" className="form-control" value={formik.values.login} />
                  <label htmlFor="username">Ваш ник</label>
                </div>
                <div className="form-floating mb-4">
                  <input name="password" autoComplete="current-password" required="" placeholder="Пароль" type="password" className="form-control" id="password" value={formik.values.password} /> 
                  <label className="form-label" htmlFor="password">Пароль</label>
                </div>
                <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
              </form>
              <div className="card-footer p-6">
                <div className="text-center">
                  <span>Нет аккаунта?</span>
                  <a href="/signup">Регистрация</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

/* <Form>
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
*/
