export interface IStopwatchesState {
    stopwatches: IStopwatch[];
    nextId: number;
}

export enum StopwatchActionTypes {
    ADD_STOPWATCH = "ADD_STOPWATCH",
    DELETE_STOPWATCH = "DELETE_STOPWATCH",
    EDIT_STOPWATCH = "EDIT_STOPWATCH",
    CHANGE_TIME_INTERVAL = "CHANGE_TIME_INTERVAL",
    ADD_TIME_INTERVAL = "ADD_TIME_INTERVAL",
    REST_STOPWATCH = "REST_STOPWATCH",
}

interface AddStopwatchAction {
    type: StopwatchActionTypes.ADD_STOPWATCH;
    payload: IStopwatchNew;
}
interface DeleteStopwatchAction {
    type: StopwatchActionTypes.DELETE_STOPWATCH;
    payload: number;
}
interface EditStopwatchAction {
    type: StopwatchActionTypes.EDIT_STOPWATCH;
    payload: IStopwatch;
}
interface AddTimeInterval {
    type: StopwatchActionTypes.ADD_TIME_INTERVAL;
    payload: { id: number; interval: ITimeInterval };
}
interface ResetStopwatch {
    type: StopwatchActionTypes.REST_STOPWATCH;
    payload: number
}

interface ChangeTimeIntervalAction {
    type: StopwatchActionTypes.CHANGE_TIME_INTERVAL;
    payload: { interval: ITimeInterval; id: number };
}

export type StopwatchAction = AddStopwatchAction | DeleteStopwatchAction | EditStopwatchAction | AddTimeInterval | ChangeTimeIntervalAction | ResetStopwatch;

export interface IStopwatch {
    title: string;
    _id: number;
    projectId: number;
    timeIntervals: ITimeInterval[];
    description: string;
}

export interface ITimeInterval {
    startDate: Date;
    stopDate: Date | undefined;
}

export type IStopwatchNew = Omit<IStopwatch, "_id">;
