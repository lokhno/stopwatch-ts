import { IProjectState, ProjectAction, ProjectActionTypes, IProject } from "../../types/project";

const initialState: IProjectState = {
    projects: (localStorage.projectsItems && JSON.parse(localStorage.projectsItems)) || [
        { _id: 1, title: "stopwatches" },
        { _id: 2, title: "learnenglish" },
        { _id: 3, title: "timeline" },
    ],
    nextId: localStorage.projectNextID || 4,
};

export const excludeItems = (items: IProject[], id: number): IProject[] => {
    return items.filter((item: IProject) => {
        return id !== item._id;
    });
};

const setLocalStorage = (items: IProject[], id: number) => {
    localStorage.stopwatchesNextID = id;
    localStorage.stopwatchesItems = JSON.stringify(items);
};

export const projectReduser = (state = initialState, action: ProjectAction): IProjectState => {
    let tmpState;
    switch (action.type) {
        case ProjectActionTypes.ADD_PROJECT:
            tmpState = {
                ...state,
                projects: [...state.projects, { ...action.payload, _id: state.nextId }],
                nextId: +state.nextId + 1,
            };
            setLocalStorage(tmpState.projects, tmpState.nextId);
            return tmpState;
        case ProjectActionTypes.DELETE_PROJECT:
            tmpState = {
                ...state,
                projects: [...excludeItems(state.projects, action.payload)],
            };
            setLocalStorage(tmpState.projects, tmpState.nextId);
            return tmpState;
        case ProjectActionTypes.EDIT_PROJECT:
            tmpState = {
                ...state,
                projects: [
                    ...excludeItems(state.projects, action.payload._id),
                    { _id: action.payload._id, title: action.payload.title },
                ].sort((a, b) => a._id - b._id),
            };
            setLocalStorage(tmpState.projects, tmpState.nextId);
            return tmpState;
        default:
            return state;
    }
};
