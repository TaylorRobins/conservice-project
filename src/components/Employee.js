import React from "react";
import { Link } from "react-router-dom";
import "./Employee.css";

function Employee({employee, handleEditEmployee}) {
    return <div className="employee-container">
        <Link to={`/employees/${employee._id}`}>
        <img 
            src={`./thumbnails/${employee.imageUrl}`} 
            alt={employee.name} 
            onError={(e) => (e.target.src = "./no-image.jpg")}/>
        <div>{employee.name}</div>
        <div>{employee.position}</div>
        </Link>
        <button onClick={() => handleEditEmployee(employee)}>Edit</button>
    </div>

}


export default Employee;