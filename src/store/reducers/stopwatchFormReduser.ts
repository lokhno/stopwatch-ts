import { IStopwatchFormState, StopwatchFormAction, StopwatchFormActionTypes } from "../../types/stopwatchForm";

const initialState: IStopwatchFormState = {
    type: "",
    overlayHidden: true,
    stopwatch: null,
    project: null,
};

export const stopwatchFormReduser = (state = initialState, action: StopwatchFormAction): IStopwatchFormState => {
    switch (action.type) {
        case StopwatchFormActionTypes.CHANGE_STOPWATCH_FORM_TYPE:
            return {
                ...state,
                type: action.payload,
            };
        case StopwatchFormActionTypes.SET_PROJECT_ITEM:
            return {
                ...state,
                project: action.payload,
            };
        case StopwatchFormActionTypes.SET_STOPWATCH_ITEM:
            return {
                ...state,
                stopwatch: action.payload,
            };
        case StopwatchFormActionTypes.TOGGLE_OVERLAY_VIEW:
            return {
                ...state,
                overlayHidden: !state.overlayHidden,
                type: !state.overlayHidden ? "" : state.type,
            };
        case StopwatchFormActionTypes.CLOSE_STOPWATCH_FORM:
            return {
                ...state,
                overlayHidden: true,
                type: "",
                stopwatch: null,
                project: null,
            };
        default:
            return state;
    }
};
