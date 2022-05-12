import * as StopwatchActionCreators from "./stopwatch";
import * as ProjectActionCreators from "./project";
import * as StopwatchFormActionCreators from "./stopwatchForm";

const act = {
    ...ProjectActionCreators,
    ...StopwatchActionCreators,
    ...StopwatchFormActionCreators,
};

export default act;
