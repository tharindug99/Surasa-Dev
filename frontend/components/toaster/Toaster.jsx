import React from 'react';

function Toaster({ message }) {
  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-green-500 text-white p-4 rounded-md shadow-md">
      {message}
    </div>
  );
}

export default Toaster;
