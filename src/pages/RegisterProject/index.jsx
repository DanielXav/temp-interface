import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterSchema = Yup.object().shape({
    description: Yup.string().required('Required'),
    name: Yup.string().required('Required')
});

const RegisterProject = () => {

    const handleSubmitting = (values, { setSubmitting, setStatus }) => {
        setStatus({ isValidating: true });
        axios.post('https://fast-badlands-00990.herokuapp.com/api/v1/projects', values)
            .then(resp => console.log(resp.data))
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