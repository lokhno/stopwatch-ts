import React from "react";
import { useLocation } from "react-router-dom";

import { ProjectForm } from "../FormTypes/ProjectForm";
import { StopwatchForm } from "../FormTypes/StopwatchForm";

interface FormSelectorProps {}

export const FormSelector: React.FC<FormSelectorProps> = () => {
    let location = useLocation();
    const formRender = (formType: string) => {
        if (formType === "/" || formType === "/projects") {
            return <ProjectForm />;
        }
        if (formType.indexOf("/stopwatch/") !== -1 || formType.indexOf("/allstopwatches") !== -1) {
            return <StopwatchForm/>
        }
    };
    return <>{formRender(location.pathname)}</>;
};
