import React, { useEffect, useRef, useState } from "react";
import { EditOutlined, DeleteOutlined, PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";
import cn from 'classnames'

import { setWorkerInterval, clearWorkerTimer } from "set-worker-timer";

import { getStopwatchTime, isStopwatchTicking, getTimeFromMilliseconds, getStopwatchLastIntervalStartTime } from "../../../helper/stopwatch";
import { useActions } from "../../../hooks/useAction";

import { IStopwatch } from "../../../types/stopwatch";

interface StopwatchItemProps {
    item: IStopwatch;
    onEditButtonClick: (item: IStopwatch) => void;
    onDeleteButtonClick: (item: IStopwatch) => void;
}

export const StopwatchItem: React.FC<StopwatchItemProps> = ({ item, onEditButtonClick, onDeleteButtonClick }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { addTimeInterval, changeTimeInterval } = useActions();
    const isTicking = isStopwatchTicking(item.timeIntervals);

    let currentTimerView = getStopwatchTime(item.timeIntervals);

    useEffect(() => {
        let timerId = setWorkerInterval(() => {
            if (isTicking) {
                currentTimerView += 1000;
                if (null !== ref.current) {
                    ref.current.innerText = getTimeFromMilliseconds(currentTimerView);
                }
            }
        }, 1000);
        return () => {
            clearWorkerTimer(timerId);
        };
    }, [isTicking]);

    const onToggleTicking = () => {
        if (!isTicking) {
            addTimeInterval(item._id, { startDate: new Date(), stopDate: undefined });
        } else {
            changeTimeInterval(item._id, { startDate: getStopwatchLastIntervalStartTime(item.timeIntervals), stopDate: new Date() });
            
        }
    };

    return (
        <tr key={item._id} className={cn({table__line_ticked: isTicking})}>
            <td className={`table__action action`} >
                <div className="action__item" onClick={onToggleTicking}>
                    {isTicking ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
                </div>
            </td>
            <td>{item.title}</td>
            <td>
                <div ref={ref}>{getTimeFromMilliseconds(getStopwatchTime(item.timeIntervals))}</div>
            </td>
            <td>{item.description}</td>
            <td className="table__action action">
                <div
                    className="action__item"
                    onClick={() => {
                        onEditButtonClick(item);
                    }}
                >
                    <EditOutlined />
                </div>
            </td>
            <td className="table__action action">
                <div
                    className="action__item"
                    onClick={() => {
                        onDeleteButtonClick(item);
                    }}
                >
                    <DeleteOutlined />
                </div>
            </td>
        </tr>
    );
};
