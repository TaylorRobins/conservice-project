import React from "react";
import "./AddEditEmployeeForm.css";

function AddEditEmployeeForm({handleCloseModal, handleCreateEmployee, existingEmployee, handleUpdateEmployee, handleDeleteEmployee}) {

    const [name, setName] = React.useState(existingEmployee ? existingEmployee.name : "");
    const [address, setAddress] = React.useState(existingEmployee ? existingEmployee.address : "");
    const [email, setEmail] = React.useState(existingEmployee ? existingEmployee.email : "");
    const [phone, setPhone] = React.useState(existingEmployee ? existingEmployee.phone : "");
    const [position, setPosition] = React.useState(existingEmployee ? existingEmployee.position : "");
    const [department, setDepartment] = React.useState(existingEmployee ? existingEmployee.department : "");
    const [start, setStart] = React.useState(existingEmployee ? existingEmployee.start: "");
    const [end, setEnd] = React.useState(existingEmployee ? existingEmployee.end : "");
    const [status, setStatus] = React.useState(existingEmployee ? existingEmployee.status : "");
    const [shift, setShift] = React.useState(existingEmployee ? existingEmployee.shift : "");
    const [manager, setManager] = React.useState(existingEmployee ? existingEmployee.manager: "");
    const [color, setColor] = React.useState(existingEmployee ? existingEmployee.color: "");

    const [errors, setErrors] = React.useState({
        name: null,
        address: null,
        email: null,
        phone: null,
        position: null,
        department: null,
        start: null,
        end: null,
        status: null,
        shift: null,
        manager: null,
        color: null,

    });

    function handleSubmit(event) {
        event.preventDefault();

        const errors = {
            name: null,
            address: null,
            email: null,
            phone: null,
            position: null,
            department: null,
            start: null,
            end: null,
            status: null,
            shift: null,
            manager: null,
            color: null,
        };

        if(name.length===0) {
            errors.name="Employee Name Cannot be Empty";
        }
        if(address.length===0) {
            errors.address="Employee Address Cannot be Empty";
        }
        if(email.length===0) {
            errors.email="Employee Email Cannot be Empty";
        }
        if(phone.length===0) {
            errors.phone="Employee Phone Number Cannot be Empty";
        }
        if(position.length===0) {
            errors.position="Employee Position Cannot be Empty";
        }
        if(department.length===0) {
            errors.department="Employee Department Date Cannot be Empty";
        }
        if(start.length===0) {
            errors.start="Employee Start Date Cannot be Empty";
        }
        if(status.length===0) {
            errors.status="Employee Status Cannot be Empty";
        }
        if(shift.length===0) {
            errors.shift="Employee Shift Cannot be Empty";
        }
        if(manager.length===0) {
            errors.manager="Employee Manager Cannot be Empty";
        }
        if(errors.name || errors.address || errors.email || errors.phone || errors.position || errors.start || errors.status || errors.shift || errors.manager) {
            setErrors(errors);
            return;
        }
        
        const employee = {
            name: name,
            address: address,
            email: email,
            phone: phone,
            position: position,
            department: department,
            start: start,
            end: end,
            status: status,
            shift: shift,
            manager: manager,
            color: color,
        };

        if (existingEmployee) {
            employee._id = existingEmployee._id
            handleUpdateEmployee(employee);
        } else {
            handleCreateEmployee(employee);
        }

        handleCreateEmployee(employee);
    }
    return <div className="add-edit-employee-form-container">
            <h1>{existingEmployee ? "Edit Employee" : "Add Employee"}</h1>
        <form onSubmit= {handleSubmit} id="usrform" className="employee-form">
            <label>
                Name<span className="required">*</span>:
                <input type="text" value={name} onChange={(e) => setName(e.target.value) } className={errors.name ? "invalid" : ""}/>
                {errors.name ? <span className="required">{errors.name}</span> : null}
            </label>
            <label>
                Address<span className="required">*</span>:
                <textarea rows="2" cols="25" name="address" form="usrform" value={address} onChange={(e) => setAddress(e.target.value) } className={errors.address ? "invalid" : ""}></textarea>
                {errors.address ? <span className="required">{errors.address}</span> : null}
            </label>
            <label>
                Email Address<span className="required">*</span>:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value) } className={errors.email ? "invalid" : ""}/>
                {errors.email ? <span className="required">{errors.email}</span> : null}
            </label>
            <label>
                Preferred Contact Phone Number<span className="required">*</span>:
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value) } className={errors.phone ? "invalid" : ""}/>
                {errors.phone ? <span className="required">{errors.phone}</span> : null}
            </label>
            <label>
                Position<span className="required">*</span>:
                <input type="text" value={position} onChange={(e) => setPosition(e.target.value) } className={errors.position ? "invalid" : ""}/>
                {errors.position ? <span className="required">{errors.position}</span> : null}
            </label>
            <label>
                Department<span className="required">*</span>:
                <input type="text" value={department} onChange={(e) => setDepartment(e.target.value) } className={errors.department ? "invalid" : ""}/>
                {errors.department ? <span className="required">{errors.department}</span> : null}
            </label>
            <label>
                Start Date<span className="required">*</span>:
                <input type="date" value={start} onChange={(e) => setStart(e.target.value) } className={errors.start ? "invalid" : ""}/>
                {errors.start ? <span className="required">{errors.start}</span> : null}
            </label>
            <label>
                End Date:
                <input type="date" value={end} onChange={(e) => setEnd(e.target.value) }/>
            </label>
            <label>
                Employment Status<span className="required">*</span>:
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value) } className={errors.status ? "invalid" : ""}/>
                {errors.status ? <span className="required">{errors.status}</span> : null}
            </label>
            <label>
                Shift<span className="required">*</span>:
                <input type="text" value={shift} onChange={(e) => setShift(e.target.value) } className={errors.shift ? "invalid" : ""}/>
                {errors.shift ? <span className="required">{errors.shift}</span> : null}
            </label>
            <label>
                Manager<span className="required">*</span>:
                <input type="text" value={manager} onChange={(e) => setManager(e.target.value) } className={errors.manager ? "invalid" : ""}/>
                {errors.manager ? <span className="required">{errors.manager}</span> : null}
            </label>
            <label>
                Favorite Color:
                <input type="text" value={color} onChange={(e) => setColor(e.target.value) }/>
            </label>
            <button>{existingEmployee ? "Save & Close" : "Create & Close"}</button>
        </form>
            <button onClick={handleCloseModal}>Close</button>
            {existingEmployee ? <button onClick={() => handleDeleteEmployee(existingEmployee)}>Delete</button> : null}
    </div>
}

export default AddEditEmployeeForm;

//could use select input for employment status with knowledge of different options