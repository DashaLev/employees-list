import React from 'react'
import alphabet from './alphabet'
import EmployeesListItem from './EmployeesListItem'

const EmployeesList = ({ employees}) => {
  return (
    <>
      <div className="employees-page">
        <h1 className="page-title">Employees</h1>
        <div className="employees-list">
          {alphabet.map((item, index) => (
            <div key={index} className="employees-section">
              <h2>{item.name}</h2>
              <div className="employees-block">
                {employees
                  .filter((employer) => employer.lastName[0] === item.name)
                  .sort((a, b) => a.lastName.localeCompare(b.lastName))
                  .map(({ id, lastName, firstName }) => (
                    <EmployeesListItem
                      key={id}
                      id={id}
                      lastName={lastName}
                      firstName={firstName}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default EmployeesList
