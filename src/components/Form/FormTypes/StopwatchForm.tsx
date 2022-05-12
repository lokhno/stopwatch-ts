import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { Form } from "..";
import { Input } from "../../UI/Input";
import { Textarea } from "../../UI/Textarea";
import { useActions } from "../../../hooks/useAction";
import { useTypeSelector } from "../../../hooks/useTypeSelector";

interface StopwatchFormProps {}

export const StopwatchForm: React.FC<StopwatchFormProps> = () => {
    const { pathname } = useLocation();
    const projectId = pathname.substring(pathname.lastIndexOf("/") + 1);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const stopwatchFormType = useTypeSelector((state) => state.stopwatchFormState.type);
    const item = useTypeSelector((state) => state.stopwatchFormState.stopwatch);
    const { addStopwatch, closeStopwatchForm, editStopwatch } = useActions();

    useEffect(() => {
        if (item?.title) {
            setTitle(item.title);
        }
        if (item?.description) {
            setDescription(item.description);
        }
    }, [item]);

    const onSave = () => {
        if (stopwatchFormType === "create") {
            if (projectId) {
                addStopwatch({ title, description, projectId: +projectId, timeIntervals: [] });
            }
        } else {
            item?._id &&
                editStopwatch({
                    _id: item?._id,
                    title,
                    description,
                    projectId: item.projectId,
                    timeIntervals: item.timeIntervals,
                });
        }
        setTitle("");
        setDescription("");
        closeStopwatchForm();
    };

    const onCancel = () => {
        setTitle("");
        setDescription("");
        closeStopwatchForm();
    };

    return (
        <Form onSave={onSave} onCancel={onCancel}>
            <Input title="Название" setValue={setTitle} value={title} />
            <Textarea title="Описание" setValue={setDescription} value={description} />
        </Form>
    );
};
