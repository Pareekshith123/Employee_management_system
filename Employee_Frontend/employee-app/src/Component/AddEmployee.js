import React, { useState } from 'react';
import EmployeeService from './Service/EmployeeService';
import { useNavigate } from 'react-router-dom';
const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
 const navigate=useNavigate();
  const saveEmployee = (e) => {
     
    EmployeeService.saveEmployee(employee)
      .then((res) => {
        // Handle successful save if needed
        console.log("Employee saved successfully:", res.data);
      })
      .catch((error) => {
        console.log("Error while saving employee:", error);
      });
      navigate('/employeeList')
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const clearEmployee = (e) => {
    window.location.reload();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    });

  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin xl tracking-wider">
          <h1>Add new Employees</h1>
        </div>
        <div className="flex items-center justify-center h-10 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">First Name</label>
          <input
            type="text"
            name="firstName" 
            value={employee.firstName}
            onChange={handleChange}
            className="h-10 mt-2 px-2 py-2 border"
          />
        </div>
        <div className="flex items-center justify-center h-10 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">Last Name</label>
          <input
            type="text"
            name="lastName" 
            value={employee.lastName}
            onChange={handleChange}
            className="h-10 mt-2 px-2 py-2 border"
          />
        </div>
        <div className="flex items-center justify-center h-10 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">Email</label>
          <input
            type="text"
            name="email"
            value={employee.email}
            onChange={handleChange}
            className="h-10 mt-2 px-2 py-2 border"
          />
        </div>
        <div className="flex items-center justify-center h-10 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">Phone</label>
          <input
            type="text"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
            className="h-10 mt-2 px-2 py-2 border"
          />
        </div>
        <div className="flex items-center justify-center my-4">
          <button onClick={saveEmployee} className="rounded text-white font-semibold bg-green-400 hover:bg-green-800 py-2 px-6">Save</button>
          <button onClick={clearEmployee} className="rounded text-white font-semibold bg-red-400 hover:bg-red-800 py-2 px-6 ml-4">Clear</button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
