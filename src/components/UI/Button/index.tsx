import React from "react";

import "./Button.scss";

interface ButtonProps {
    onClick: () => void;
    className?: string
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};
