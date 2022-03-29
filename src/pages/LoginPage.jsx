import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { authContext } from '../components/AuthProvider';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required')
});

const LoginPage = () => {
  const { login } = React.useContext(authContext);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from || "/";

  const handleSubmitting = (values, { setSubmitting, setStatus }) => {
    setStatus({ isValidating: true });
    login().then(navigate(from, { replace: true }))
      axios.post('https://fast-badlands-00990.herokuapp.com/api/v1/login', values)
        .then(resp => console.log(resp))
    // setTimeout(() => {
    //   // let email = values.email
    //   // let senha = values.senha

    //   console.info(JSON.stringify(values, null, 2));
    //   setSubmitting(false); // iremos fazer modificações aqui
    //   setStatus({ isValidating: false });
    // }, 400);
  };

  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={{ username: '', password: ''}}
      onSubmit={handleSubmitting}
    >
      {({
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
        <form onSubmit={handleSubmit}>
          <label>
            Username*:
            <Field type="text" name="username"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="username" className="error" component="span"/>
          <br/><br/>
          <label>
            Password*:
            <Field type="password" name="password"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="password" className="error" component="span" />
          <br/><br/>
          <input type="submit" value="Login" disabled={isSubmitting}/>
          <Link to="/register">Register</Link>
        </form>
      )}
    </Formik>
  )
};

export default LoginPage;