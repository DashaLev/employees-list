import React, { Component } from 'react'
import axios from 'axios'
import EmployeesList from './Employees/EmployeesList'
import EmployeesBirthday from './EmployeesBirthday/EmployeesBirthday'
import '../style/base.css'

class App extends Component {
  state = {
    employees: [],
  }


  componentDidMount() {
    axios
      .get(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
      .then((res) => res.data)
      .then((data) =>
        this.setState(() => ({
            employees: data.map(user => ({
              ...user, active: false
            })
          )}
        ))
      )
  }


  addChecked = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      employees:this.state.employees.map(user => (user.id === id ? { ...user, active: true} : {...user}))
      
    }))

  }



  removeChecked = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      employees:this.state.employees.map(user => (user.id === id ? { ...user, active: false} : {...user}))
      
    }))
  }

  render() {
    return (
      <div className="page-columns">
        <EmployeesList 
          employees={this.state.employees}
          addChecked={this.addChecked}
          removeChecked={this.removeChecked}/>
        <EmployeesBirthday employees={this.state.employees} /> 
      </div>
    )
  }
}

export default App

