import React from "react";
import "./FormInput.css";

const FormInput = ({ handleChange, label, ...otherProps }) => {
    console.log(otherProps.name);
    return (
        <div className="group">
            {otherProps.name === "message" ? (
                <textarea className="form-input " onChange={handleChange} {...otherProps} />
            ) : (
                <input className="form-input" onChange={handleChange} {...otherProps} />
            )}

            {label ? (
                <label className={`${otherProps.length ? "shrink" : ""} form-input-label`}>
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export default FormInput;
