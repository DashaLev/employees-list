import React from 'react'
import alphabet from './alphabet'


const EmployeesList = ({ employees,addChecked,removeChecked}) => {
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
                  .map(({ id, lastName, firstName, active}) => (
                    <div key={id} className="employees-item">
                          <div className={active ? 'active' : 'notActive'}>
                            <div className="employer-lastName">{lastName}</div>
                            <div className="employer-firstName">{firstName}</div>
                          </div>
                          <div className="radio-button">
                            <label>
                              <input
                                type="radio"
                                value="not-active"
                                onChange={() => removeChecked(id)}
                                checked={active ? false : true}
                              /> not active </label>
                            <label>
                              <input
                                type="radio"
                                value="active"
                                onChange={() => addChecked(id)}
                                checked={active ? true : false}
                              /> active </label>
                          </div>
                      </div>
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
