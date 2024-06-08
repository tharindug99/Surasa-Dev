import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function Booking() {
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [faculty, setFaculty] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [eventInfo, setEventInfo] = useState(null);

  const sampleEvents = [
    {
      title: 'Biriyani',
      start: new Date(2024, 5, 7, 10, 0), // June 7, 2024, 10:00 AM
      end: new Date(2024, 5, 7, 12, 0), // June 7, 2024, 12:00 PM
    },
    {
      title: 'Ice Coffee - by FAS',
      start: new Date(2024, 5, 8, 14, 0), // June 8, 2024, 2:00 PM
      end: new Date(2024, 5, 8, 16, 0), // June 8, 2024, 4:00 PM
    },
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    // Perform booking logic here, using the collected data
    console.log("Booking Request Sent:", {
      fullName,
      contactNumber,
      email,
      faculty,
      selectedSlot
    });
    setConfirmationMessage('Booking Request Sent....');
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    let style = {
      backgroundColor: '#F0C903',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'black',
      border: '0px',
      display: 'block',
    };
    return {
      style: style
    };
  };

  const handleEventClick = (event) => {
    setEventInfo(event);
  };

  

  return (
    <div id="booking" className="booking-container flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 md:pr-4">
      <Calendar
          className='p-10 bg-white shadow-lg'
          localizer={localizer}
          events={sampleEvents}
          selectable
          min={new Date().setHours(8, 0, 0)} // Set minimum time 
          max={new Date().setHours(18, 0, 0)} // Set maximum time 
          defaultView="week" // Set default view to week
          onSelectSlot={(slotInfo) => {
            setSelectedSlot(slotInfo);
            setConfirmationMessage('Confirm booking for ' + moment(slotInfo.start).format('LT') + ' - ' + moment(slotInfo.end).format('LT') + '?');
          }}
          views={['week', 'day']} // Only show week and day views
          eventPropGetter={eventStyleGetter} // Apply custom styles to events
          onSelectEvent={handleEventClick} // Handle event clicks
          components={{
            week: {
              header: ({ date, label }) => {
                return (
                  <div style={{ height: '50px'}}>
                    {label}
                  </div>
                );
              },
              row: () => {
                return null; 
              }
            },
            day: ({ date, children }) => {
              return (
                <div style={{ backgroundColor: 'blue', height: '100%' }}>
                  {children}
                </div>
              );
            }
          }}
        />


      </div>
      <div className="w-full md:w-1/2 md:pl-4">
        <h2>Booking</h2>
        <form onSubmit={handleBooking} className="booking-form">
          <label className="block mb-2">
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 border border-SurasaBrown rounded focus:outline-none focus:ring-2 focus:ring-SurasaYellow"
            />
          </label>
          <label className="block mb-2">
            Contact Number:
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 border border-SurasaBrown rounded focus:outline-none focus:ring-2 focus:ring-SurasaYellow"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 border border-SurasaBrown rounded focus:outline-none focus:ring-2 focus:ring-SurasaYellow"
            />
          </label>
          <label className="block mb-2">
            Faculty Details:
            <select
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 border border-SurasaBrown rounded focus:outline-none focus:ring-2 focus:ring-SurasaYellow"
            >
              <option value="" disabled>Select Faculty</option>
              <option value="Faculty of Social Sciences and Languages">Faculty of Social Sciences and Languages</option>
              <option value="Faculty of Management Studies">Faculty of Management Studies</option>
              <option value="Faculty of Agricultural Sciences">Faculty of Agricultural Sciences</option>
              <option value="Faculty of Applied Sciences">Faculty of Applied Sciences</option>
              <option value="Faculty of Technology">Faculty of Technology</option>
              <option value="Faculty of Computing">Faculty of Computing</option>
              <option value="Faculty of Geomatics">Faculty of Geomatics</option>
            </select>
          </label>
          <button type="submit" className="px-4 py-2 mt-4 font-bold text-white bg-SurasaBrown rounded hover:bg-SurasaYellow">Confirm Booking</button>
        </form>
        {confirmationMessage && <p className="mt-4 text-SurasaBrown">{confirmationMessage}</p>}
      </div>
    </div>
  );
}

export default Booking;

