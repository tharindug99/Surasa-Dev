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

  return (
    <div  id="booking"
          className="booking-container flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 md:pr-4">
        <Calendar
          localizer={localizer}
          events={[]}
          selectable
          min={new Date().setHours(8, 0, 0)} // Set minimum time to 8am
          max={new Date().setHours(18, 0, 0)} // Set maximum time to 6pm
          onSelectSlot={(slotInfo) => {
            setSelectedSlot(slotInfo);
            setConfirmationMessage('Confirm booking for ' + moment(slotInfo.start).format('LT') + ' - ' + moment(slotInfo.end).format('LT') + '?');
          }}
          views={[ 'week','month' ,'day']} // Specify which views to show
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-4">
        <h2>Booking</h2>
        <form onSubmit={handleBooking} className="booking-form">
          <label>
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>
          <label>
            Contact Number:
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Faculty Details:
            <input
              type="text"
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
              required
            />
          </label>
          <button type="submit">Confirm Booking</button>
        </form>
        {confirmationMessage && <p>{confirmationMessage}</p>}
      </div>
    </div>
  );
}

export default Booking;
