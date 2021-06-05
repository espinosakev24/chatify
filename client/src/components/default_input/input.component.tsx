import React from 'react';
import IInput from '../../types/input.type';

const Input: React.FunctionComponent<IInput> = ({
  id, name, label, type, action, className
}) => {
  return (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <input
          id={id}
          className={className}
          type={type}
          name={name}
          placeholder={label} 
          onChange={action}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope"></i>
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check"></i>
        </span>
      </p>
    </div>
  );

}

export default Input;
