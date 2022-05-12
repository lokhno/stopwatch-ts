import { StopwatchFormAction, StopwatchFormActionTypes, formType } from "../../types/stopwatchForm";
import { IStopwatch } from "../../types/stopwatch";
import { IProject } from "../../types/project";

export const changeStopwatchFormType = (type: formType): StopwatchFormAction => ({
    type: StopwatchFormActionTypes.CHANGE_STOPWATCH_FORM_TYPE,
    payload: type,
});

export const toggleOverlayView = (): StopwatchFormAction => ({
    type: StopwatchFormActionTypes.TOGGLE_OVERLAY_VIEW,
});

export const setStopwatchItem = (item: IStopwatch): StopwatchFormAction => ({
    type: StopwatchFormActionTypes.SET_STOPWATCH_ITEM,
    payload: item,
});
export const setProjectItem = (item: IProject): StopwatchFormAction => ({
    type: StopwatchFormActionTypes.SET_PROJECT_ITEM,
    payload: item,
});

export const closeStopwatchForm = (): StopwatchFormAction => ({
    type: StopwatchFormActionTypes.CLOSE_STOPWATCH_FORM,
});
