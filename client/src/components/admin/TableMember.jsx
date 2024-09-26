import React from 'react'

const TableMember = () => {
    return (
    <div>
        <table className="min-w-full divide-y divide-gray-700 bg-gray-800">
    <thead className="bg-gray-900">
    <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">#</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">First</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Last</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Handle</th>
    </tr>
    </thead>
    <tbody className="bg-gray-800 divide-y divide-gray-700">
    <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">1</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Mark</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Otto</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">@mdo</td>
    </tr>
    <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">2</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Jacob</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Thornton</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">@fat</td>
    </tr>
    <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">3</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Larry</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">the Bird</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">@twitter</td>
    </tr>
    </tbody>
</table>

    </div>
    )
}

export default TableMember