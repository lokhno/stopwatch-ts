import React, { useEffect, useState } from "react";

import { Form } from "..";
import { Input } from "../../UI/Input";
import { useActions } from "../../../hooks/useAction";
import { useTypeSelector } from "../../../hooks/useTypeSelector";

interface ProjectFormProps {}

export const ProjectForm: React.FC<ProjectFormProps> = () => {
    const [title, setTitle] = useState("");
    const stopwatchFormType = useTypeSelector((state) => state.stopwatchFormState.type);
    const item = useTypeSelector((state) => state.stopwatchFormState.project);
    const { addProject, closeStopwatchForm, editProject } = useActions();

    useEffect(() => {
        if (item?.title) {
            setTitle(item?.title);
        }
    }, [item]);

    const onSave = () => {
        if (stopwatchFormType === "create") {
            addProject({ title });
        } else {
            item?._id && editProject({ _id: item?._id, title });
        }
        setTitle("");

        closeStopwatchForm();
    };

    const onCancel = () => {
        setTitle("");
        closeStopwatchForm();
    };

    return (
        <Form onSave={onSave} onCancel={onCancel}>
            <Input title="Название проекта" setValue={setTitle} value={title} />
        </Form>
    );
};
