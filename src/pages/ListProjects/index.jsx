import React from 'react'
import axios from 'axios'

import  './styles.css';

export default class ListProjects extends React.Component {
  state = {
    tarefas: []
  }

  componentDidMount() {
    axios.get('https://immense-sands-97611.herokuapp.com/api/v1/projects')
      .then(res => {
        const tarefas = res.data
        console.log(res.data)
        this.setState({ tarefas })
      })
  }

  render() {
    return (
        <>
        <h1 align="center" className="margin">Lista dos Projetos</h1>
        <table className="table">
            <tr className="thead-dark">
                <td scope="col">Users</td>
                <td scope="col">Name</td>
                <td scope="col">Description</td>
            </tr>
            { this.state.tarefas.map(tarefa => 
            <tr>    
                <td  key={tarefa._id}>{tarefa.users.name}</td>
                <td  key={tarefa._id}>{tarefa.name}</td>
                <td  key={tarefa._id}>{tarefa.description}</td>
            </tr>)}
        </table>

      </>
    )
  }
}