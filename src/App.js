import './App.css';
import React from "react";
import EmployeeGrid from "./components/EmployeeGrid";
import { getEmployees, createEmployee, updateEmployee, deleteEmployee} from "./EmployeesService";
import Modal from "./components/modal";
import AddEditEmployeeForm from "./components/AddEditEmployeeForm";

function App() {
  const [originalEmployees, setOriginalEmployees] = React.useState([]);
  const [employees, setEmployees] = React.useState(() => {
    fetchEmployees();

    return [];
  });
  const [searchQuery, setSearchQuery] = React.useState("");
  React.useEffect(() => {
    if (!searchQuery) {
      setEmployees(originalEmployees);
      return;
    }

    const filteredEmployees = originalEmployees.filter((employee) => {
      const searchQueryLowerCase = searchQuery.toLowerCase();
      const employeeNameLowerCase = employee.name.toLowerCase();

      if (employeeNameLowerCase.includes(searchQueryLowerCase)) {
        return true;
      }
    });

    setEmployees(filteredEmployees);
  }, [searchQuery, originalEmployees]);

  const [isShowingAddEditEmployeeModal, setIsShowingAddEditEmployeeModal] = React.useState(false);
  const [currentEmployee, setCurrentEmployee] = React.useState(null);

  function fetchEmployees() {
    getEmployees()
      .then((response) => {
        setOriginalEmployees(response.data);
        setEmployees(response.data);
      })
      .catch((error) => {
        debugger;
      })
  }

  function handleAddEmployeeClick() {
    setCurrentEmployee(null);
    setIsShowingAddEditEmployeeModal(true);
  }

  function handleCloseModal() {
    setIsShowingAddEditEmployeeModal(false);
  }

  function handleCreateEmployee(employee) {
    createEmployee(employee)
      .then((response) => {
        setIsShowingAddEditEmployeeModal(false);
        alert("Successfully Created New Employee");
        fetchEmployees();
      })
      .catch((error) => {
        alert(error);
      });
  }

  function handleEditEmployee(employee) {
    setCurrentEmployee(employee);
    setIsShowingAddEditEmployeeModal(true);

  }

  function handleUpdateEmployee(employee) {
    updateEmployee(employee._id, employee)
      .then((response) => {
        setIsShowingAddEditEmployeeModal(false);
        alert("Successfully Updated Employee");
        fetchEmployees();
      })
      .catch((error) => {
        alert(error);
      });
  }

  function handleDeleteEmployee(employee) {
    deleteEmployee(employee._id)
      .then((response) => {
        setIsShowingAddEditEmployeeModal(false);
        alert("Successfully Deleted Employee");
        fetchEmployees();
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="App">
      <button onClick={handleAddEmployeeClick}>Add New Employee</button>
      {
        isShowingAddEditEmployeeModal ? (
          <Modal>
            <AddEditEmployeeForm
            existingEmployee = {currentEmployee} 
            handleCloseModal={handleCloseModal} 
            handleCreateEmployee={handleCreateEmployee} 
            handleUpdateEmployee={handleUpdateEmployee}
            handleDeleteEmployee={handleDeleteEmployee}
            />
          </Modal>
        ) : null
      }
      
      <h1>Conservice Employee Manager</h1>
      <input 
      type="text" 
      className="search-input" 
      value={searchQuery} 
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }} />
      <EmployeeGrid employees={employees} handleEditEmployee={handleEditEmployee} />
    </div>
  );
}

export default App;
