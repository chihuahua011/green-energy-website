import React from 'react';
import "./button.scss";

function Button({ children, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button