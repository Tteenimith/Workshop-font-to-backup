import React from 'react'

const Unauthorization = () => {
  return (
    <div class="text-center">
    <h1 class="text-6xl font-bold text-red-500 mb-6">403</h1>
    <h2 class="text-3xl font-semibold text-white mb-4">Unauthorized Access</h2>
    <p class="text-gray-400 mb-8">You do not have permission to access this page.</p>
    <a href="/" className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">Go Back Home</a>
  </div>
  )
}

export default Unauthorization