import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { authContext } from "../components/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import SelectInput from "../components/SelectInput";
import { DropdownButton, FormControl, FormGroup, InputGroup, MenuItem, Table } from 'react-bootstrap';

const RegisterSchema = Yup.object().shape({
    description: Yup.string().required('Required'),
    name: Yup.string().required('Required')
});

const ListProjects = () => {
    //   const { login } = React.useContext(authContext);
    //   let navigate = useNavigate();
    //   let location = useLocation();

    //   let from = location.state?.from || "/";

    // const handleSubmitting = (values, { setSubmitting, setStatus }) => {
    //     setStatus({ isValidating: true });
    //     axios.get('https://fast-badlands-00990.herokuapp.com/api/v1/projects', values)
    //         .then(response => {
    //             const terminals = response.data.data.data;
    //             const tablebody = document.getElementById("table_body");

    //             if (tablebody != null) { // #2 verificação da variável para evitar erros de conteúdo nulo da IDE
    //                 const tbody = tablebody;
            
    //                 for (const terminal of terminals) {
    //                     let htmlrow = "<tr>"; // criando a variável para armazenar as informações de cada linha da tabela
    //                         htmlrow += "<td>" + terminal.description + "</td>";
    //                         htmlrow += "<td>" + terminal.name + "</td>";
    //                         htmlrow += "<td>editar</td>";
    //                     htmlrow += "</tr>";
    //                     tbody.innerHTML += htmlrow; // acrescenta a linha htmlrow no corpo da tabela
    //                 }
    //             }
    //         }).catch((err) => {
    //             tbody.innerHTML += "Erro: " + JSON.stringify(err);
    //         });
    //     // login().then(navigate(from, { replace: true }))
    //     // setTimeout(() => {
    //     //     console.info(JSON.stringify(values, null, 2));
    //     //     setSubmitting(false); // iremos fazer modificações aqui
    //     //     setStatus({ isValidating: false });
    //     // }, 400);
    //     //alert(JSON.stringify(values));
    // };

    const navigate = useNavigate();

    const handleRegister = () => {
        setTimeout(() => {
            navigate("/login");
        }, 400);
       
      };

    //   const Tbody = () => (
    //     <tbody>
    //         <tr />
    //         <tr />
    //         <tr />
    //     </tbody>
    // );

    // ReactDOM.render(
    //     <Tbody />,
    //     document.getElementById('I_want_this_in_React')
    // );

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
        <table id="table_body">
    {/* <tbody>{handleSubmitting}</tbody> */}
    <table id="I_want_this_in_React"></table>
</table>
        
    )
};

export default ListProjects;