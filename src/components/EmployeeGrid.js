import React from "react";
import Employee from "./Employee";
import "./EmployeeGrid.css";

function EmployeeGrid({ employees, handleEditEmployee }) {
    return (
    <div className="employee-grid-container">
        {
            employees && employees.length 
            ?
            employees.map((employee) => {
                return <Employee employee={employee} 
                key={employee._id} 
                handleEditEmployee={handleEditEmployee} />;
            }) 
            : null}
    </div>
    );
}

export default EmployeeGrid;