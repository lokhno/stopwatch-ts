import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, PlusCircleOutlined, UnorderedListOutlined } from "@ant-design/icons";

import { NavigationButton } from "./NavigationButton";

import { useActions } from "../../hooks/useAction";

import "./Navigation.scss";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
    const { pathname } = useLocation();
    const { toggleOverlayView, changeStopwatchFormType } = useActions();
    const onCrateButtonClick = () => {
        toggleOverlayView();
        changeStopwatchFormType("create");
    };
    return (
        <>
            <div className="navigation">
                <Link to="/projects">
                    <NavigationButton title="Все проекты">
                        <HomeOutlined />
                    </NavigationButton>
                </Link>
                <Link to="/allstopwatches">
                    <NavigationButton title="Все таймеры">
                    <UnorderedListOutlined />
                    </NavigationButton>
                </Link>
                
                {pathname !== "/allstopwatches" && <NavigationButton title="Создать" action={onCrateButtonClick}>
                    <PlusCircleOutlined />
                </NavigationButton>}
            </div>
        </>
    );
};
