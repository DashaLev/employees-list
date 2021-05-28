import React from "react";

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

    const employeesActiveState = employees.map((el) => el.active);

    return (
        <>
            <div className="employees-birthday-page">
                <h1 className="page-title">Employees birthday</h1>
                <div className="employees-birthday-list">
                    {employeesActiveState.every(
                        (element) => element === false,
                    ) ? (
                        <div className="employees-birthday-list-empty">
                            Employees list is empty
                        </div>
                    ) : (
                        months
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
                                                    item.id &&
                                                employer.active === true,
                                        )
                                        .sort((a, b) =>
                                            a.lastName.localeCompare(
                                                b.lastName,
                                            ),
                                        )
                                        .map(
                                            ({
                                                id,
                                                lastName,
                                                firstName,
                                                dob,
                                            }) => (
                                                <ul
                                                    key={id}
                                                    className="employees-birthday-item"
                                                >
                                                    <li className="employer-lastName">
                                                        {lastName}
                                                    </li>
                                                    <li className="employer-firstName">
                                                        {firstName}
                                                    </li>
                                                    <li className="employer-birthday">
                                                        {new Intl.DateTimeFormat(
                                                            "en-GB",
                                                            {
                                                                day: "numeric",
                                                                month: "long",
                                                            },
                                                        ).format(new Date(dob))}
                                                        ,{" "}
                                                        {new Intl.DateTimeFormat(
                                                            "en-GB",
                                                            {
                                                                year: "numeric",
                                                            },
                                                        ).format(
                                                            new Date(dob),
                                                        )}{" "}
                                                        year
                                                    </li>
                                                </ul>
                                            ),
                                        )}
                                </div>
                            ))
                    )}
                </div>
            </div>
        </>
    );
};

export default EmployeesBirthday;
