export interface IProjectState {
    projects: IProject[];
    nextId: number;
}
export enum ProjectActionTypes {
    ADD_PROJECT = "ADD_PROJECT",
    DELETE_PROJECT = "DELETE_PROJECT",
    EDIT_PROJECT = "EDIT_PROJECT",
}

interface AddProjectAction {
    type: ProjectActionTypes.ADD_PROJECT;
    payload: IProjectNew;
}

export interface EditProjectAction {
    type: ProjectActionTypes.EDIT_PROJECT;
    payload: IProject;
}

interface DeleteProjectAction {
    type: ProjectActionTypes.DELETE_PROJECT;
    payload: number;
}

export type ProjectAction = AddProjectAction | EditProjectAction | DeleteProjectAction;

export interface IProject {
    _id: number;
    title: string;
}

export type IProjectNew = Omit<IProject, "_id">;
