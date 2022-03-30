import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { authContext } from "../components/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import SelectInput from "../components/SelectInput";

const LinkSchema = Yup.object().shape({
    function: Yup.string().required('Required'),
    projectId: Yup.string().required('Required'),
    username: Yup.string().required('Required')
});

const LinkAlumn = () => {
    //   const { login } = React.useContext(authContext);
    //   let navigate = useNavigate();
    //   let location = useLocation();

    //   let from = location.state?.from || "/";

    const handleSubmitting = (values, { setSubmitting, setStatus }) => {
        setStatus({ isValidating: true });
        axios.post('https://fast-badlands-00990.herokuapp.com/api/v1/projects/link', values)
            .then(resp => console.log(resp.data))
        // login().then(navigate(from, { replace: true }))
        // setTimeout(() => {
        //     console.info(JSON.stringify(values, null, 2));
        //     setSubmitting(false); // iremos fazer modificações aqui
        //     setStatus({ isValidating: false });
        // }, 400);
        // alert(JSON.stringify(values));
    };
    
    const optionsFunctions = [
        { value: "TRAINEE", label: 'TRAINEE' },
        { value: "JUNIOR", label: 'JUNIOR' },
        { value: "SENIOR", label: 'SENIOR' },
        { value: "MASTER", label: 'MASTER' },
        { value: "COORDINATOR", label: 'COORDINATOR' }
    ]

    const navigate = useNavigate();

    const handleRegister = () => {
        setTimeout(() => {
            navigate("/login");
        }, 400);
       
      };

    return (
        <Formik
            validationSchema={LinkSchema}
            initialValues={{ function: '', projectId: '', username: '' }}
            onSubmit={handleSubmitting}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>

                    <SelectInput name="function">
                        {optionsFunctions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </SelectInput>
                    <ErrorMessage name="function" className="error" component="span" />
                    <br /><br />
                    <label>
                        ProjectId*:
                        <Field type="number" name="projectId"
                            onBlur={handleBlur}
                            onChange={handleChange} />
                    </label>
                    <ErrorMessage name="projectId" className="error" component="span" />
                    <br /><br />
                    <label>
                        Username*:
                        <Field type="text" name="username"
                            onBlur={handleBlur}
                            onChange={handleChange} />
                    </label>
                    <ErrorMessage name="username" className="error" component="span" />
                    <br /><br />
                    <input type="submit" value="Register" disabled={isSubmitting} /> 
                </form>
            )}
        </Formik>
    )
};

export default LinkAlumn;