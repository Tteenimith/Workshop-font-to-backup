import React from 'react'
import { useNavigate } from 'react-router-dom';


const HomeUser = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  }
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto border-4 border-gray-700"
        />
        <h2 className="text-3xl font-bold text-white mt-6">User</h2>
        <p className="text-gray-400 mt-2">User@example.com</p>

        <div className="mt-6">
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            eros at lectus luctus gravida non vitae eros.
          </p>
          <button
            onClick={handleBackHome}
            className="px-6 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-700 transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Back Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeUser