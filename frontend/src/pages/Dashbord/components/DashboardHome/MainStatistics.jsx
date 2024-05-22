import React from 'react'

function MainStatistics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <div className="bg-teal-600 p-4 rounded-md text-white flex flex-col justify-between">
          <div>Total Users Registered</div>
          <div className="text-4xl lg:text-right md:text-right text-center pt-10">100</div>
        </div>
        <div className="bg-violet-600 p-4 rounded-md text-white flex flex-col justify-between">
          <div>Booking Requests</div>
          <div className="text-4xl lg:text-right md:text-right text-center pt-10">100</div>
        </div>
        <div className="bg-red-600 p-4 rounded-md text-white flex flex-col justify-between">
          <div>Orders</div>
          <div className="text-4xl lg:text-right md:text-right text-center pt-10">100</div>
        </div>
        <div className="bg-blue-600 p-4 rounded-md text-white flex flex-col justify-between">
          <div>Total Users Registered</div>
          <div className="text-4xl lg:text-right md:text-right text-center pt-10">100</div>
        </div>
      </div>
  )
}

export default MainStatistics