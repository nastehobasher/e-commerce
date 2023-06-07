import React from 'react';


const Custominput = (props) => {
    const { type, name, placeholder, classname, value, onChange, onBlur, disabled } = props;

    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`form-control ${classname}`}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
            />
        </div>
    );
};

export default Custominput;