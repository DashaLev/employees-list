import React from 'react'
import months from './months'

const EmployeesBirthday = ({employees}) => {
    const employeesActiveState = employees.map(el => el.active)

    return (
        <>
            <div className='employees-birthday-page'>
                <h1 className='page-title'>Employees birthday</h1>
                <div className='employees-birthday-list'>
                    {employeesActiveState.every(element => element === false) ? (
                        <div className='employees-birthday-list-empty'>Employees list is empty</div>
                    ) : (
                        months
                            .sort(function (month1, month2) {
                                let a = month1.id,
                                    b = month2.id
                                let currentMonth = new Date().getMonth() + 1
                                if (a < currentMonth) {
                                    a = a + 12
                                }
                                if (b < currentMonth) {
                                    b = b + 12
                                }
                                return a - b
                            })
                            .map((item, index) => (
                                <div key={index} className='employees-birthday-section'>
                                    <h2>{item.month}</h2>

                                    {employees
                                        .filter(employer => employer.dob.slice(5, 7) === item.id && employer.active === true)
                                        .sort((a, b) => a.lastName.localeCompare(b.lastName))
                                        .map(({id, lastName, firstName, dob}) => (
                                            <ul key={id} className='employees-birthday-item'>
                                                <li className='employer-lastName'>{lastName}</li>
                                                <li className='employer-firstName'>{firstName}</li>
                                                <li className='employer-birthday'>
                                                    {new Intl.DateTimeFormat('en-GB', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                    }).format(new Date(dob))}
                                                    ,{' '}
                                                    {new Intl.DateTimeFormat('en-GB', {
                                                        year: 'numeric',
                                                    }).format(new Date(dob))}{' '}
                                                    year
                                                </li>
                                            </ul>
                                        ))}
                                </div>
                            ))
                    )}
                </div>
            </div>
        </>
    )
}

export default EmployeesBirthday
