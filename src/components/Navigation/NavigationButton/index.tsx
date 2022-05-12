import React from "react";

import "./NavigationButton.scss";

interface NavigationButtonProps {
    title: string;
    action?: () => void;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({ children, title, action }) => {
    return (
        <div
            className="navigation__nav-buttom"
            onClick={() => {
                action && action();
            }}
        >
            {children}
            <div>{title}</div>
        </div>
    );
};
