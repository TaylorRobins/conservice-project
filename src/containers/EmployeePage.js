import React from "react";
import { getEmployee } from "../EmployeesService";

function EmployeePage(props) {
  const employeeId = props.match.params.employeeId;

  const [employee, setEmployee] = React.useState(null);
  React.useEffect(() => {
    getEmployee(employeeId)
      .then((response) => {
        const employee = response.data;
        setEmployee(employee);
      })
      .catch((error) => {
        alert(`No Employee with ID of '${employeeId}' exists!`);
        props.history.push("/");
      });
  }, [employeeId]);

  return (
    <div className="employee-page">
      {employee ? (
        <>
        <img
            src={`/thumbnails/${employee.imageUrl}`}
            alt={employee.name}
            onError={(e) => (e.target.src = "/no-image.jpg")}
          />
          <h1>Name:{employee.name}</h1>
          <h3>Address:{employee.address}</h3>
          <h3>Email Address:{employee.email}</h3>
          <h3>Preferred Contact Phone Number:{employee.phone}</h3>
          <h3>Position:{employee.position}</h3>
          <h3>Department:{employee.department}</h3>
          <h3>Start Date:{employee.start}</h3>
          <h3>End Date:{employee.end}</h3>
          <h3>Employment Status:{employee.status}</h3>
          <h3>Shift:{employee.shift}</h3>
          <h3>Manager:{employee.manager}</h3>
          <h3>Favorite Color:{employee.color}</h3>
          
        </>
      ) : null}
    </div>
  );
}

export default EmployeePage;
