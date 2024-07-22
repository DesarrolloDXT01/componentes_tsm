import React from 'react';
/**
 * Button Componente
 * 
 * Props:
 * - Text (string):El texto que tendra el boton.
 * - color (string): el color de fondo.
 * - outline (bool): si es true se mostrara con transparente y bordes del color seleccionado.
 */
const Button = ({ text, color, onClick, outline = false }) => {
  const baseStyles = {
    primary: 'px-4 py-2 rounded font-semibold hover:bg-primaryHover',
    secondary:'px-4 py-2 rounded font-semibold hover:bg-secondaryHover',
    danger:'px-4 py-2 rounded font-semibold hover:bg-dangerHover',
    warning:'px-4 py-2 rounded font-semibold hover:bg-warningHover'
  };
  const outlineStyles = {
    primary: 'bg-transparent border-2 border-primary',
    secondary:'bg-transparent border-2 border-secondary',
    danger:'bg-transparent border-2 border-danger',
    warning:'bg-transparent border-2 border-warning'
  };
  const filledStyles = {
    primary: 'text-white bg-primary',
    secondary: 'text-white bg-secondary',
    danger: 'text-white bg-danger',
    warning: 'text-white bg-warning'
  }

  return (
    <button
      className={`${baseStyles[color]} ${outline ? outlineStyles[color] : filledStyles[color]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

