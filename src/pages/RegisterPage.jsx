import axios from "axios";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
    username: Yup.string().required("Informe seu username!"),
    password: Yup.string().required("Informe sua senha!"),
    matricula: Yup.string().required("Informe sua matricula!"),
    papel: Yup.string().required("Informe seu papel!"),
    funcao: Yup.string().required("Informe sua funcao!"),
});

const RegisterPage = () => {

    const navigate = useNavigate();

    const handleSubmitting = (values, { setSubmitting, setStatus }) => {
        setStatus({ isValidating: true });
        // login().then(navigate(from, { replace: true }))
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

      const home = () => {
        navigate("/");
      };

      return (
        <Formik
        validationSchema={RegisterSchema}
        initialValues={{
            username: "",
            password: "",
            matricula: "",
            papel: "",
            funcao: ""
        }}
        onSubmit={handleSubmitting}
    >
        {({ handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <div className="container">
                <div className="div-class-conteiner">
                    <div className="text-center mt-5">
                        <form onSubmit={handleSubmit} />
                        <img className="mt-4" src="./img/logo.svg" alt="" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Cadastro</h1>

                        <div>
                            <input type="text" placeholder="Usuário" name="username" className="form-control mt-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onBlur={handleBlur} onChange={handleChange} />
                        </div>
                        <ErrorMessage name="username" className="error" component="span" />

                        <div>
                            <input type="password" placeholder="Senha" name="password" className="form-control mt-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onBlur={handleBlur} onChange={handleChange} />
                        </div>
                        <ErrorMessage name="password" className="error" component="span" />

                        <div>
                            <input type="text" placeholder="Matrícula" name="matricula" className="form-control mt-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onBlur={handleBlur} onChange={handleChange} />
                        </div>
                        <ErrorMessage name="matricula" className="error" component="span" />

                        {/* <SelectInput name="papel" label={undefined}>
                            {optionsRoles.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </SelectInput>
                        <ErrorMessage name="papel" className="error" component="span" />
                                
                        <SelectInput name="funcao" label={undefined}>
                            {optionsFunctions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </SelectInput>
                        <ErrorMessage name="funcao" className="error" component="span" />
 */}

                        <div className="d-grid gap-2 mt-3">
                            <input type="submit" value="Enviar" className="btn btn-primary" disabled={isSubmitting} />
                        </div>
                        <form />
                    </div>
                </div>
            </div>
        )}
    </Formik>
      )
};

export default RegisterPage;