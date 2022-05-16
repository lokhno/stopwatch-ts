import React from "react";
import { Link } from "react-router-dom";

import { useActions } from "../../../hooks/useAction";
import { useTypeSelector } from "../../../hooks/useTypeSelector";

import { IStopwatch } from "../../../types/stopwatch";
import { StopwatchItem } from "../StopwatchItem";

import "./StopwatchList.scss";

interface StopwatchListProps {
    projectId?: number;
}

export const StopwatchList: React.FC<StopwatchListProps> = ({ projectId }) => {
    const stopwatches = useTypeSelector((state) =>
        state.stopwatchState.stopwatches.filter((item) => {
            if (projectId) {
                return item.projectId === +projectId;
            }
        })
    );
    const project = useTypeSelector(
        (state) =>
            state.projectState.projects.filter((item) => {
                if (projectId) {
                    return item._id === +projectId;
                }
            })[0]
    );
    const { toggleOverlayView, changeStopwatchFormType, setStopwatchItem, deleteStopwatch } = useActions();
    const onEditButtonClick = (item: IStopwatch) => {
        toggleOverlayView();
        setStopwatchItem(item);
        changeStopwatchFormType("edit");
    };
    const onDeleteButtonClick = (item: IStopwatch) => {
        deleteStopwatch(item._id);
    };
    return (
        <div className="stopwatch">
            <div className="stopwatch__title">
                <Link to={`/stopwatch/${projectId}`}>{project?.title}</Link>
            </div>
            <table className="stopwatch__table table">
                <thead>
                    <tr>
                        <th className="table__head-action">⠀</th>
                        <th className="table__title">Название</th>
                        <th className="table__timer">Таймер</th>
                        <th className="table__description">Описание</th>
                        <th className="table__head-action">⠀</th>
                        <th className="table__head-action">⠀</th>
                    </tr>
                </thead>
                <tbody>
                    {stopwatches.map((item) => (
                        <StopwatchItem
                            key={item._id}
                            item={item}
                            onDeleteButtonClick={onDeleteButtonClick}
                            onEditButtonClick={onEditButtonClick}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
