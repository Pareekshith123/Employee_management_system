import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from './Service/EmployeeService';

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  const deleteEmployee = async (e, id) => {
    window.location.reload();
    
    try {
      await EmployeeService.deleteEmployee(id);
      // Update the employees state after deletion
   
    } catch (error) {
      console.log("Error while deleting employee:", error);
    }
  };

  return (
    <div className='container mx-auto my-8'>
      <div className='h-12'>
        <button
          onClick={() => navigate("/addEmployee")}
          className='rounded bg-slate-500 text-white px-6 py-6'
        >
          Add Employee
        </button>
      </div>
      <div className='flex shadow border-b'>
        <table className='min-w-full'>
          <thead className='bg-gray-300'>
            <tr>
              <th className='text-left font-medium text-grey-500 uppercase tracking-wider py-3 px-6'>firstName</th>
              <th className='text-left font-medium text-grey-500 uppercase tracking-wider py-3 px-6'>lastName</th>
              <th className='text-left font-medium text-grey-500 uppercase tracking-wider py-3 px-6'>Email</th>
              <th className='text-right font-medium text-grey-500 uppercase tracking-wider py-3 px-6'>phone</th>
              <th className='text-right font-medium text-grey-500 uppercase tracking-wider py-3 px-6'>Edit/delete</th>
            </tr>
          </thead>
          {!loading && (
            <tbody className='bg-white'>
              {employees && employees.map((employee) => (
                <tr key={employee.id}>
                  <td className='text-left px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{employee.firstName}</div>
                  </td>
                  <td className='text-left px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{employee.lastName}</div>
                  </td>
                  <td className='text-left px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{employee.email}</div>
                  </td>
                  <td className='text-right px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{employee.phone}</div>
                  </td>
                  <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                    <a href='#'  className='text-indigo-600 hover:text-indigo-800 px-4'>Edit</a>
                    <a href='#' onClick={(e,id)=>deleteEmployee(e,employee.id)} className='text-red-600 hover:text-indigo-800 px-4'>Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
