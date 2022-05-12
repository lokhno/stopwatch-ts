import React, { useEffect, useRef, useState } from "react";
import { EditOutlined, DeleteOutlined, PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";

import * as workerTimers from "worker-timers";
import { setWorkerInterval, clearWorkerTimer } from "set-worker-timer";

import { getStopwatchTime, isStopwatchTicking, getTimeFromMilliseconds } from "../../../helper/stopwatch";
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

    const [currentTimer, setCurrentTimer] = useState(getStopwatchTime(item.timeIntervals));
    const [start, setStart] = useState<Date | undefined>();

    let currentTimerView = getStopwatchTime(item.timeIntervals);

    useEffect(() => {
        // let timerId = workerTimers.setInterval(() => {
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
            // workerTimers.clearInterval(timerId);
        };
    }, [start]);

    const onToggleTicking = () => {
        if (!isTicking) {
            setStart(new Date());
            addTimeInterval(item._id, { startDate: start || new Date(), stopDate: undefined });
        } else {
            changeTimeInterval(item._id, { startDate: start || new Date(), stopDate: new Date() });
            setStart(undefined);
        }
    };

    return (
        <tr key={item._id}>
            <td className="table__action action">
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
