import { combineReducers } from "redux";
import { projectReduser } from "./projectReduser";
import { stopwatchReduser } from "./stopwatchReduser";
import { stopwatchFormReduser } from "./stopwatchFormReduser";

export const rootReduser = combineReducers({
    projectState: projectReduser,
    stopwatchState: stopwatchReduser,
    stopwatchFormState: stopwatchFormReduser
})

export type RootState = ReturnType<typeof rootReduser>