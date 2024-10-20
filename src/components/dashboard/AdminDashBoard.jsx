import React from 'react'
import Header from '../others/Header';
//sssssss

const AdminDashBoard = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just log the form data
        const formData = new FormData(e.target);
        const task = Object.fromEntries(formData);
        console.log(task);
    };
  return (
    <div className='h-screen w-full p-10'>
      <Header/>
      <div className="max-w-lg mx-auto p-6 bg-gray-900 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Create New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Task Title</label>
          <input
            type="text"
            name="title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter Task Title"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter Task Description"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Date</label>
          <input
            type="date"
            name="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Assign To</label>
          <input
            type="text"
            name="assignTo"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Assign to (e.g., John Doe)"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <input
            type="text"
            name="category"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Task Category (e.g., Design)"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Create Task
        </button>
      </form>
    </div>

    </div>
  )
}

export default AdminDashBoard
