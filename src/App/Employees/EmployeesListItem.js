import React from 'react'
import { connect } from 'react-redux'

const EmployeesListItem = ({
  id,
  lastName,
  firstName,
  isChecked,
  removeCheck,
  addCheck
}) => {

  return (
    <>
      <div key={id} className="employees-item">
        <div className={isChecked ? 'active' : 'notActive'}>
          <div className="employer-lastName">{lastName}</div>
          <div className="employer-firstName">{firstName}</div>
        </div>
        <div className="radio-button">
          <label>
            <input
              type="radio"
              value="not-active"
              onChange={() => removeCheck(id)}
              checked={isChecked ? false : true}
            />
            not active
          </label>
          <label>
            <input
              type="radio"
              value="active"
              onChange={() => addCheck(id)}
              checked={isChecked ? true : false}
            />
            active
          </label>
        </div>
      </div>
    </>
  )
}
const mapState = (state, { id }) => ({
  isChecked: state[id],
})
const mapDispatch = (dispach) => ({
  addCheck: (id) =>
    dispach({
      type: 'CHEKED',
      id,
    }),
  removeCheck: (id) =>
    dispach({
      type: 'UNCHEKED',
      id,
    }),
})

export default connect(mapState, mapDispatch)(EmployeesListItem)
