import React from 'react'

const AddEmployee = () => {
  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin 2xl'>
                <h1>Add Employees</h1>
            </div>
            <div className='items-center justify-center h-14 w-full'>
            <label>First Name</label>
            <input type='text' className='h-10  w-93' />
            </div>
        </div>
      
    </div>
  )
}

export default AddEmployee
