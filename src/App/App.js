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
          employees: data,
        })),
      )
  }
  
  
  render() {

    return (
      <div className="page-columns">
        <EmployeesList employees={this.state.employees}/>
        <EmployeesBirthday employees={this.state.employees} /> 
      </div>
    )
  }
}

export default App

