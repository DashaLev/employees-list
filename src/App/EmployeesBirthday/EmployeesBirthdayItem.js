import React from "react";
import { connect } from "react-redux";

const EmployeesBirthdayItem = ({ id, lastName, firstName, dob, isChecked }) => {
    return (
        <>
            {isChecked ? (
                <ul key={id} className="employees-birthday-item">
                    <li className="employer-lastName">{lastName}</li>
                    <li className="employer-firstName">{firstName}</li>
                    <li className="employer-birthday">
                        {new Intl.DateTimeFormat("en-GB", {
                            day: "numeric",
                            month: "long",
                        }).format(new Date(dob))}
                        ,{" "}
                        {new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                        }).format(new Date(dob))}{" "}
                        year
                    </li>
                </ul>
            ) : null}
        </>
    );
};
const mapState = (state, { id }) => ({
    isChecked: state[id],
});


export default connect(mapState)(EmployeesBirthdayItem);
