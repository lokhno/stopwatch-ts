import { IProject, IProjectNew, ProjectAction, ProjectActionTypes } from "../../types/project";

export const addProject = (item: IProjectNew): ProjectAction => ({
    type: ProjectActionTypes.ADD_PROJECT,
    payload: item,
});

export const deleteProject = (id: number): ProjectAction => ({
    type: ProjectActionTypes.DELETE_PROJECT,
    payload: id,
});

export const editProject = (item: IProject): ProjectAction => ({
    type: ProjectActionTypes.EDIT_PROJECT,
    payload: item
})
