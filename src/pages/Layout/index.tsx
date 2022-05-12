import React from "react";

import { FormSelector } from "../../components/Form/FormSelector";
import { Navigation } from "../../components/Navigation";

import "./Layout.scss";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            {<FormSelector />}
            <div className="stopwatch-layout">
                <Navigation />
                {children}
            </div>
        </>
    );
};
