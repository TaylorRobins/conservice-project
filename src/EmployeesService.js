import axios from "axios";

// URL for our node express running locally
//const BASE_URL = "http://localhost:3005";

const BASE_URL = "https://conservice-api.herokuapp.com";

const getEmployees = () => {
    return axios.get(`${BASE_URL}/api/employees`);
};

const createEmployee = (employee) => {
    return axios.post(`${BASE_URL}/api/employees`, employee);
};

const updateEmployee = (employeeId, employee) => {
    return axios.put(`${BASE_URL}/api/employees/${employeeId}`, employee)
};

const deleteEmployee = (employeeId) => {
    return axios.delete(`${BASE_URL}/api/employees/${employeeId}`);
}

export { getEmployees, createEmployee, updateEmployee, deleteEmployee };
