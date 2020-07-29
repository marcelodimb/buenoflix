import React from 'react';

const FormField = ({ label, type, name, value, onChange }) => (
    <div>
        <label>
            {label}:
            <input type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    </div>
);

export default FormField;