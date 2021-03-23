import React from "react";
import "./Employee.css";

function Employee({employee, handleEditEmployee}) {
    return <div className="employee-container">
        <img 
            src={`./thumbnails/${employee.imageUrl}`} 
            alt={employee.name} 
            onError={(e) => (e.target.src = "./no-image.jpg")}/>
        <div>{employee.name}</div>
        <div>{employee.position}</div>
        <button onClick={() => handleEditEmployee(employee)}>Edit</button>
    </div>

}


export default Employee;