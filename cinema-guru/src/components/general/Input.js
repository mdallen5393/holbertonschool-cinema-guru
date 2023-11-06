import './general.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {

    const handleInput = (event) => {
        setValue(event.target.value);
    }

    return (
        <div classname={`input-container ${className}`}>
            {icon && <FontAwesomeIcon icon={icon} />}
            <label>
                {label}
            </label>
            <input
              type={type}
              value={value}
              onChange={handleInput }
              {...inputAttributes}
            />
        </div>
    );
}

export default Input;
