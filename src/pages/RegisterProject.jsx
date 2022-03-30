import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { authContext } from "../components/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import SelectInput from "../components/SelectInput";

const RegisterSchema = Yup.object().shape({
    description: Yup.string().required('Required'),
    name: Yup.string().required('Required')
});

const RegisterProject = () => {
    //   const { login } = React.useContext(authContext);
    //   let navigate = useNavigate();
    //   let location = useLocation();

    //   let from = location.state?.from || "/";

    const handleSubmitting = (values, { setSubmitting, setStatus }) => {
        setStatus({ isValidating: true });
        axios.post('https://fast-badlands-00990.herokuapp.com/api/v1/projects', values)
            .then(resp => console.log(resp.data))
        // login().then(navigate(from, { replace: true }))
        // setTimeout(() => {
        //     console.info(JSON.stringify(values, null, 2));
        //     setSubmitting(false); // iremos fazer modificações aqui
        //     setStatus({ isValidating: false });
        // }, 400);
        //alert(JSON.stringify(values));
    };

    const navigate = useNavigate();

    const handleRegister = () => {
        setTimeout(() => {
            navigate("/login");
        }, 400);
       
      };

    return (
        <Formik
            validationSchema={RegisterSchema}
            initialValues={{ description: '', name: '' }}
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
                        Description*:
                        <Field type="text" name="description"
                            onBlur={handleBlur}
                            onChange={handleChange} />
                    </label>
                    <ErrorMessage name="description" className="error" component="span" />
                    <br /><br />
                    <label>
                        Name*:
                        <Field type="text" name="name"
                            onBlur={handleBlur}
                            onChange={handleChange} />
                    </label>
                    <ErrorMessage name="name" className="error" component="span" />
                    <br /><br />
                    <input type="submit" value="Register" disabled={isSubmitting} /> 
                </form>
            )}
        </Formik>
    )
};

export default RegisterProject;