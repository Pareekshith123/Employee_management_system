import React from 'react'

const AddEmployee = () => {
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
  <div className="px-8 py-8">
    <div className="font-thin xl tracking-wider">
      <h1>Add new Employees</h1>
    </div>
    <div className="flex items-center justify-center h-10 w-full my-4">
      <label className="block text-gray-600 text-sm font-normal">First Name</label>
      <input type="text" className="h-10 mt-2 px-2 py-2 border" />
    </div>
    <div className="flex items-center justify-center h-10 w-full my-4">
      <label className="block text-gray-600 text-sm font-normal">Last Name</label>
      <input type="text" className="h-10 mt-2 px-2 py-2 border" />
    </div>
    <div className="flex items-center justify-center h-10 w-full my-4">
      <label className="block text-gray-600 text-sm font-normal">Email</label>
      <input type="text" className="h-10 mt-2 px-2 py-2 border" />
    </div>
    <div className="flex items-center justify-center h-10 w-full my-4">
      <label className="block text-gray-600 text-sm font-normal">Phone</label>
      <input type="text" className="h-10 mt-2 px-2 py-2 border" />
    </div>
    <div className="flex items-center justify-center my-4">
      <button className="rounded text-white font-semibold bg-green-400 hover:bg-green-800 py-2 px-6">Save</button>
      <button className="rounded text-white font-semibold bg-red-400 hover:bg-red-800 py-2 px-6 ml-4">Clear</button>
    </div>
  </div>
</div>

  )
}

export default AddEmployee
