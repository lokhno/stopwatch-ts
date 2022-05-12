import React from "react";

import "./Button.scss";

interface ButtonProps {
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
};
