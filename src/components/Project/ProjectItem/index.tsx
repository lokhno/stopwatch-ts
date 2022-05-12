import React from "react";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { useActions } from "../../../hooks/useAction";

import { IProject } from "../../../types/project";

import "./ProjectItem.scss";

interface ProjectItemProps {
    item: IProject;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ item }) => {
    const { toggleOverlayView, changeStopwatchFormType, setProjectItem, deleteProject } = useActions();
    const onEditButtonClick = () => {
        toggleOverlayView();
        setProjectItem(item);
        changeStopwatchFormType("edit");
    };
    const onDeleteButtonClick = () => {
        deleteProject(item._id);
    };
    return (
        <div className="project-item">
            <Link to={`/stopwatch/${item._id}`}>{item.title}</Link>
            <div className="project-item__actions actions">
                <div className="actions__item" onClick={onEditButtonClick}>
                    <EditOutlined />
                </div>
                <div className="actions__item" onClick={onDeleteButtonClick}>
                    <DeleteOutlined />
                </div>
            </div>
        </div>
    );
};
