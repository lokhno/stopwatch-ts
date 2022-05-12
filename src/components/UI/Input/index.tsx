import React from "react";

import "./Input.scss";

interface InputProps {
    title: string;
    value: string;
    setValue: (v: string) => void;
}

export const Input: React.FC<InputProps> = ({ value, setValue, title }) => {
    return (
        <div className="input">
            <label>{title}</label>
            <input
                type={"text"}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
};
