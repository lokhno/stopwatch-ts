import {
    IStopwatchesState,
    StopwatchAction,
    StopwatchActionTypes,
    IStopwatch,
    ITimeInterval,
} from "../../types/stopwatch";
const initialState: IStopwatchesState = {
    stopwatches: (localStorage.stopwatchesItems && JSON.parse(localStorage.stopwatchesItems)) || [
        
    ],
    nextId: localStorage.stopwatchesNextID || 3,
};

export const excludeItems = (items: IStopwatch[], id: number): IStopwatch[] => {
    return items.filter((item: IStopwatch) => {
        return id !== item._id;
    });
};

const addInterval = (items: IStopwatch[], id: number, interval: ITimeInterval): IStopwatch[] => {
    let newItems: IStopwatch[] = [...items];
    newItems = newItems.map((item) => {
        if (item._id === id) {
            item.timeIntervals.push(interval);
        }
        return item;
    });
    return newItems;
};

const excludeInterval = (items: IStopwatch[], id: number): IStopwatch[] => {
    let newItems: IStopwatch[] = [...items];
    newItems = newItems.map((item) => {
        if (item._id === id) {
            item.timeIntervals.pop();
        }
        return item;
    });
    return newItems;
};

const setLocalStorage = (items: IStopwatch[], id: number) => {
    localStorage.stopwatchesNextID = id;
    localStorage.stopwatchesItems = JSON.stringify(items);
};

export const stopwatchReduser = (state = initialState, action: StopwatchAction): IStopwatchesState => {
    let tmpState;
    switch (action.type) {
        case StopwatchActionTypes.ADD_STOPWATCH:
            tmpState = {
                ...state,
                stopwatches: [
                    ...state.stopwatches,
                    {
                        _id: state.nextId,
                        description: action.payload.description,
                        title: action.payload.title,
                        projectId: action.payload.projectId,
                        timeIntervals: action.payload.timeIntervals,
                    },
                ],
                nextId: +state.nextId + 1,
            };
            setLocalStorage(tmpState.stopwatches, tmpState.nextId);
            return tmpState;
        case StopwatchActionTypes.DELETE_STOPWATCH:
            tmpState = {
                ...state,
                stopwatches: [...excludeItems(state.stopwatches, action.payload)],
            };
            setLocalStorage(tmpState.stopwatches, tmpState.nextId);
            return tmpState;
        case StopwatchActionTypes.EDIT_STOPWATCH:
            tmpState = {
                ...state,
                stopwatches: [
                    ...excludeItems(state.stopwatches, action.payload._id),
                    {
                        _id: action.payload._id,
                        description: action.payload.description,
                        title: action.payload.title,
                        projectId: action.payload.projectId,
                        timeIntervals: action.payload.timeIntervals,
                    },
                ].sort((a, b) => a._id - b._id),
            };
            setLocalStorage(tmpState.stopwatches, tmpState.nextId);
            return tmpState;
        case StopwatchActionTypes.ADD_TIME_INTERVAL:
            tmpState = {
                ...state,
                stopwatches: addInterval(state.stopwatches, action.payload.id, action.payload.interval),
            };
            setLocalStorage(tmpState.stopwatches, tmpState.nextId);
            return tmpState;
        case StopwatchActionTypes.CHANGE_TIME_INTERVAL:
            tmpState = {
                ...state,
                stopwatches: addInterval(
                    excludeInterval(state.stopwatches, action.payload.id),
                    action.payload.id,
                    action.payload.interval
                ),
            };
            setLocalStorage(tmpState.stopwatches, tmpState.nextId);
            return tmpState;
        case StopwatchActionTypes.REST_STOPWATCH:
            tmpState = {
                ...state,
                stopwatches: state.stopwatches.map((item) =>
                    item._id !== action.payload ? item : { ...item, timeIntervals: [] }
                ),
            };
            setLocalStorage(tmpState.stopwatches, tmpState.nextId);
            return tmpState;
        default:
            return state;
    }
};
