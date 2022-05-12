import React from "react";

import { useTypeSelector } from "../../hooks/useTypeSelector";
import { ProjectItem } from "../../components/Project/ProjectItem";
import { ProjectList } from "../../components/Project/ProjectList";

import "./Main.scss";

interface MainProps {}

export const Main: React.FC<MainProps> = () => {
    const projects = useTypeSelector((state) => state.projectState.projects);

    return (
        <div className="content">
            <ProjectList>
                {projects.map((item) => (
                    <ProjectItem key={item._id} item={item} />
                ))}
            </ProjectList>
        </div>
    );
};
