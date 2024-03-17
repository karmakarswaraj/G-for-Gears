import React, { useState } from "react";
// Import the DatePicker component from your chosen library
// import DatePicker from 'your-date-picker-library';

function Rental() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (date, dateType) => {
    if (dateType === "start") {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const calculateTotalCost = () => {
    if (!startDate || !endDate) {
      return 0; // Handle case where no dates are selected
    }
    const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    return days * bikeData.costPerDay; // Calculate total cost based on days and cost per day from props
  };

  return (
    <div className="flex flex-col w-full max-w-md px-4 py-8 mx-auto bg-white rounded-lg shadow-md">
      <img
        src={bikeData.img}
        alt="Bike image"
        className="object-cover w-full h-48 rounded-t-lg"
      />
      <div className="flex flex-col p-4 space-y-4">
        <div className="text-xl font-semibold">{bikeData.name}</div>
        <div className="text-gray-600">{bikeData.description}</div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Category:</span>
          <span className="text-blue-500">{bikeData.category}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Cost per Day:</span>
          <span className="font-semibold">${bikeData.costPerDay}</span>
        </div>
        <div className="flex space-x-4">
          <DatePicker
            selected={startDate}
            onChange={(date) => handleDateChange(date, "start")}
            placeholderText="Start Date"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => handleDateChange(date, "end")}
            placeholderText="End Date"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Total Cost:</span>
          <span className="font-semibold">${calculateTotalCost()}</span>
        </div>
        <button className="btn btn-primary">Add to Rent</button>
      </div>
    </div>
  );
}

export default Rental;
