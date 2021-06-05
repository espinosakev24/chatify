import React from 'react';
import IButton from '../../types/button.type';



const Button: React.FunctionComponent<IButton> = ({
  id, name, label, action, className
}) => {
  return (
    <button
      id={id}
      className={className}
      name={name}
      onClick={action}
    >
      {label}
    </button>
  );

}

export default Button;
