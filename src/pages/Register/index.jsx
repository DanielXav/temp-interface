import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SelectInput from "../../components/SelectInput";

const RegisterSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required').min(4, 'Too short!').max(10, 'Too long!'),
    registration: Yup.string().required("Informe sua registration!"),
    role: Yup.string().required("Informe seu role!"),
    function: Yup.string().required("Informe sua function!")
});

const RegisterPage = () => {

    const handleSubmitting = (values, { setSubmitting, setStatus }) => {
        setStatus({ isValidating: true });
        axios.post('https://fast-badlands-00990.herokuapp.com/api/v1/signup', values)
            .then(resp => console.log(resp))
    };

    const navigate = useNavigate();

    const handleRegister = () => {
        setTimeout(() => {
            navigate("/login");
        }, 400);
       
      };

    const optionsRoles = [
        { value: "ALUMN", label: 'ALUMN' },
        { value: "TEACHER", label: 'TEACHER' }
    ]

    const optionsFunctions = [
        { value: "TRAINEE", label: 'TRAINEE' },
        { value: "JUNIOR", label: 'JUNIOR' },
        { value: "SENIOR", label: 'SENIOR' },
        { value: "MASTER", label: 'MASTER' },
        { value: "COORDINATOR", label: 'COORDINATOR' }
    ]

    return (
        <Formik
            validationSchema={RegisterSchema}
            initialValues={{ username: '', password: '', registration: '', role: '', function: '' }}
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
                            onChange={handleChange} />
                    </label>
                    <ErrorMessage name="username" className="error" component="span" />
                    <br /><br />
                    <label>
                        Password*:
                        <Field type="password" name="password"
                            onBlur={handleBlur}
                            onChange={handleChange} />
                    </label>
                    <ErrorMessage name="password" className="error" component="span" />
                    <br /><br />
                    <label>
                        Registration*:
                        <Field type="number" name="registration"
                            onBlur={handleBlur}
                            onChange={handleChange} />
                    </label>
                    <ErrorMessage name="registration" className="error" component="span" />
                    <br /><br />
                    <SelectInput name="role">
                        {optionsRoles.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </SelectInput>
                    <ErrorMessage name="role" className="error" component="span" />
                    <br /><br />
                    <SelectInput name="function">
                        {optionsFunctions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </SelectInput>
                    <ErrorMessage name="function" className="error" component="span" />

                    <input type="submit" value="Register" disabled={isSubmitting} onClick={handleRegister} />
                    
                    
                </form>
            )}
        </Formik>
    )
};

export default RegisterPage;