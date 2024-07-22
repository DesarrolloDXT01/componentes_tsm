import React from 'react';

/**
 * Card Component
 * 
 * Props:
 * - header: header del card.
 * - content: body del card.
 * - footer: Footer del card.
 * - color (string): color del borde.
 * 
 * Usage:
 * <Card
 *   header={<h2>Card header</h2>}
 *   content={<p>Card content goes here.</p>}
 *   footer={<button>Click me</button>}
 *   color="border-primary"
 * />
 */

const Card = ({ header, content, footer, color }) => {
  const cardBaseStyles = `border-2 border-${color} bg-slate-100 p-4 rounded shadow-md text-black`;

  return (
    <div className={cardBaseStyles}>
      {header && <div className="mb-4">{header}</div>}
      {content && <div className="mb-4">{content}</div>}
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
};

export default Card;