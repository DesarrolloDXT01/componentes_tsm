import React from 'react';
/**
 * InputText Componente
 * sirve para inputs de tipo texto y numerico como password, email, number, etc.
 * 
 * Props:
 * - type (string): el tipo de input.
 * - placeholder (string): el texto placeholder.
 * - color (string): color del borde (opcional).
 * - outline(bool): si es true tendra fondo transparente
 */
const InputText = ({ type = 'text', placeholder, value, onChange, color= 'black', outline = false }) => {
  const baseStyles = `px-4 py-2 rounded font-semibold border-2 border-${color}`;
  const filledStyles = `text-black`;
  const outlineStyles = `bg-transparent border-2 border-${color}`;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseStyles} ${outline ? outlineStyles : filledStyles}`}
    />
  );
};

export default InputText;

