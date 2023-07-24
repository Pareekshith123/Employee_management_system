import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams to get the id from route parameters
import EmployeeService from './Service/EmployeeService';

const EmployeeEdit = () => {
  const { id } = useParams(); // Get the id from route parameters
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const navigate=useNavigate();
  const updateEmployee=(e)=>{
    e.preventDefault();
    EmployeeService.updateEmployee(id,employee)
    .then((res) => {
      // Handle successful save if needed
      console.log("Employee saved successfully:", res.data);
    })
    .catch((error) => {
      console.log("Error while saving employee:", error);
    });
    navigate('/employeeList')
  }
  const clearEmployee = (e) => {
    e.preventDefault();
     setEmployee({
       id: "",
       firstName: "",
       lastName: "",
       email: "",
       phone: ""
     });
 
   };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmployee(response.data); // Use parentheses () to update the state
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]); // Include id in the dependency array to refetch data when id changes

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin xl tracking-wider">
          <h1>Edit the Employees</h1>
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
          <button onClick={updateEmployee} className="rounded text-white font-semibold bg-green-400 hover:bg-green-800 py-2 px-6">Update</button>
          <button onClick={clearEmployee} className="rounded text-white font-semibold bg-red-400 hover:bg-red-800 py-2 px-6 ml-4">Clear</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeEdit;
