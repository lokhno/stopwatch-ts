import { IProject } from "../types/project";
import { IStopwatch } from "../types/stopwatch";

export type formType = "edit" | "create" | "";

export interface IStopwatchFormState {
    type: formType;
    overlayHidden: boolean;
    stopwatch: IStopwatch | null;
    project: IProject | null;
}

export enum StopwatchFormActionTypes {
    TOGGLE_OVERLAY_VIEW = "TOGGLE_OVERLAY_VIEW",
    CHANGE_STOPWATCH_FORM_TYPE = "CHANGE_STOPWATCH_FORM_TYPE",
    SET_STOPWATCH_FORM_ITEM = "SET_STOPWATCH_FORM_ITEM",
    CLOSE_STOPWATCH_FORM = "CLOSE_STOPWATCH_FORM",
    SET_STOPWATCH_ITEM = "SET_STOPWATCH_ITEM",
    SET_PROJECT_ITEM = "SET_PROJECT_ITEM",
}

interface ToggleOvarlayViewAction {
    type: StopwatchFormActionTypes.TOGGLE_OVERLAY_VIEW;
}

interface ChangeStopwatchFormTypeAction {
    type: StopwatchFormActionTypes.CHANGE_STOPWATCH_FORM_TYPE;
    payload: formType;
}

interface SetStopwatchItem {
    type: StopwatchFormActionTypes.SET_STOPWATCH_ITEM;
    payload: IStopwatch;
}
interface SetProjectItem {
    type: StopwatchFormActionTypes.SET_PROJECT_ITEM;
    payload: IProject;
}
interface CloseStopwatchForm {
    type: StopwatchFormActionTypes.CLOSE_STOPWATCH_FORM;
}

export type StopwatchFormAction =
    | ToggleOvarlayViewAction
    | ChangeStopwatchFormTypeAction
    | CloseStopwatchForm
    | SetStopwatchItem
    | SetProjectItem;
