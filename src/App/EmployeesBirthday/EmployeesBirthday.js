import React from "react";
import EmployeesBirthdayItem from "./EmployeesBirthdayItem";

const EmployeesBirthday = ({ employees }) => {
    const months = [
        { id: "01", month: "January" },
        { id: "02", month: "February" },
        { id: "03", month: "March" },
        { id: "04", month: "April" },
        { id: "05", month: "May" },
        { id: "06", month: "June" },
        { id: "07", month: "July" },
        { id: "08", month: "August" },
        { id: "09", month: "September" },
        { id: "10", month: "October" },
        { id: "11", month: "November" },
        { id: "12", month: "December" },
    ];

    return (
        <>
            <div className="employees-birthday-page">
                <h1 className="page-title">Employees birthday</h1>
                <div className="employees-birthday-list">
                    {months
                        .sort(function (month1, month2) {
                            let a = month1.id,
                                b = month2.id;
                            let currentMonth = new Date().getMonth() + 1;
                            if (a < currentMonth) {
                                a = a + 12;
                            }
                            if (b < currentMonth) {
                                b = b + 12;
                            }
                            return a - b;
                        })
                        .map((item, index) => (
                            <div
                                key={index}
                                className="employees-birthday-section"
                            >
                                <h2>{item.month}</h2>

                                {employees
                                    .filter(
                                        (employer) =>
                                            employer.dob.slice(5, 7) ===
                                            item.id,
                                    )
                                    .sort((a, b) =>
                                        a.lastName.localeCompare(b.lastName),
                                    )
                                    .map(({ id, lastName, firstName, dob }) => (
                                        <EmployeesBirthdayItem
                                            key={id}
                                            id={id}
                                            lastName={lastName}
                                            firstName={firstName}
                                            dob={dob}
                                        />
                                    ))}
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default EmployeesBirthday;
