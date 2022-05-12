import React from "react";

import "./Textarea.scss";

interface TextareaProps {
    title: string;
    value: string;
    setValue: (v: string) => void;
    type?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ value, setValue, title, type }) => {
    return (
        <div className="textarea">
            <label>{title}</label>
            <textarea
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
};
