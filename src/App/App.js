import React, {useState, useEffect} from 'react'
import axios from 'axios'
import EmployeesList from './Employees/EmployeesList'
import EmployeesBirthday from './EmployeesBirthday/EmployeesBirthday'
import '../style/base.css'

const App = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const localStorageList = localStorage.getItem('myEmployeesList')
        const localStorageListEmployees = JSON.parse(localStorageList)

        const url = `https://yalantis-react-school-api.yalantis.com/api/task0/users`
        axios.get(url).then(res => {
            const users = res.data.map(user => ({
                ...user,
                active: false,
            }))

            const employeesIds = new Set(localStorageListEmployees.map(item => item.id))
            const employeesList = [...localStorageListEmployees, ...users.filter(element => !employeesIds.has(element.id))]

            setEmployees(employeesList)
        })
    }, [setEmployees])

    useEffect(() => {
        localStorage.setItem('myEmployeesList', JSON.stringify(employees))
    })

    function addChecked(id) {
        setEmployees(employees.map(user => (user.id === id ? {...user, active: true} : {...user})))
    }

    function removeChecked(id) {
        setEmployees(employees.map(user => (user.id === id ? {...user, active: false} : {...user})))
    }

    return (
        <div className='page-columns'>
            <EmployeesList employees={employees} addChecked={addChecked} removeChecked={removeChecked} />
            <EmployeesBirthday employees={employees} />
        </div>
    )
}

export default App
