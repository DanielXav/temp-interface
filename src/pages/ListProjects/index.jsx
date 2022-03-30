import React from 'react'
import axios from 'axios'

export default class ListProjects extends React.Component {
  state = {
    tarefas: []
  }

  componentDidMount() {
    axios.get('https://fast-badlands-00990.herokuapp.com/api/v1/projects')
      .then(res => {
        const tarefas = res.data
        console.log(res.data)
        this.setState({ tarefas })
      })
  }

  render() {
    return (
        <>
        <h1>Lista dos Projetos</h1>
        <table border="1">
            <tr>
                <td>Users</td>
                <td>Name</td>
                <td>Description</td>
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