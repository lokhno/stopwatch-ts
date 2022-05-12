import React from "react";


import "./ProjectList.scss";

interface ProjectListProps {}

export const ProjectList: React.FC<ProjectListProps> = ({ children }) => {
    return <div className="project-list">{children}</div>;
};
