import React, { useState } from 'react';

/**
 * DateTime Componente
 * 
 * Props:
 * - initialDate (string): los formatos admitidos son para solo fecha: 'YYYY-MM-DD' y para fecha y hora 'YYYY-MM-DDTHH:MM'.
 * - showTime (bool): si es true mostrara el selector para horas
 */
const InputDateTime = ({ initialDate = '', color, onChange,showTime = false, ...props }) => {
  const [date, setDate] = useState(initialDate.split('T')[0]);
  const [time, setTime] = useState(initialDate.split('T')[1]?.slice(0, 5) || '');

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    handleChange(newDate, time);
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setTime(newTime);
    handleChange(date, newTime);
  };

  const handleChange = (newDate, newTime) => {
    const dateTime = newDate && newTime ? `${newDate}T${newTime}` : newDate || newTime;
    if (onChange) onChange(dateTime);
  };

  const inputBaseStyles = `px-4 py-2 text-black rounded font-semibold border-2 border-${color}`;

  return (
    <div className="flex space-x-4">
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        className={`${inputBaseStyles}`}
        {...props}
      />
      {/* Mostrar el campo de tiempo solo si showTime es verdadero */}
      {showTime && (
        <input
          type="time"
          value={time}
          onChange={handleTimeChange}
          className={`${inputBaseStyles}`}
          {...props}
        />
      )}
    </div>
  );
};

export default InputDateTime;
