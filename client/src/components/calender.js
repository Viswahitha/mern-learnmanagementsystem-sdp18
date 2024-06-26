import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <h2>Calendar</h2>
      <div>
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
}

export default MyCalendar;
