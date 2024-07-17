import React from 'react';

const Button = ({ text, color, onClick, outline = false }) => {
  const baseStyles = `px-4 py-2 rounded font-semibold hover:bg-${color}Hover`;
  const filledStyles = `text-white bg-${color}`;
  const outlineStyles = `bg-transparent border-2 border-${color}`;

  return (
    <button
      className={`${baseStyles} ${outline ? outlineStyles : filledStyles}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

