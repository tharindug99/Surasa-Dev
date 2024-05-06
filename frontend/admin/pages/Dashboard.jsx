import React from 'react';

function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Left Navigation Bar */}
      <div className="bg-gray-800 text-white w-40 py-6">
        <ul className="space-y-2">
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Analytics</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Your main content goes here */}
        <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
        <p>This is the main content area where you can display various dashboard components.</p>
      </div>
    </div>
  );
}

export default Dashboard;
