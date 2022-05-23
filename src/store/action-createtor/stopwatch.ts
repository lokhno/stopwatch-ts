import { IStopwatch, IStopwatchNew, StopwatchAction, StopwatchActionTypes, ITimeInterval } from "../../types/stopwatch";

export const addStopwatch = (item: IStopwatchNew): StopwatchAction => ({
    type: StopwatchActionTypes.ADD_STOPWATCH,
    payload: item,
});

export const deleteStopwatch = (id: number): StopwatchAction => ({
    type: StopwatchActionTypes.DELETE_STOPWATCH,
    payload: id,
});

export const editStopwatch = (item: IStopwatch): StopwatchAction => ({
    type: StopwatchActionTypes.EDIT_STOPWATCH,
    payload: item,
});

export const addTimeInterval = (id: number, interval: ITimeInterval): StopwatchAction => ({
    type: StopwatchActionTypes.ADD_TIME_INTERVAL,
    payload: { id, interval },
});
export const changeTimeInterval = (id: number, interval: ITimeInterval): StopwatchAction => ({
    type: StopwatchActionTypes.CHANGE_TIME_INTERVAL,
    payload: { interval, id },
});

export const resetStopwatch = (id: number): StopwatchAction => ({
    type: StopwatchActionTypes.REST_STOPWATCH,
    payload: id
});
