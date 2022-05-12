import React from "react";
import cn from "classnames";

import { useTypeSelector } from "../../hooks/useTypeSelector";

import "./Form.scss";
import { Button } from "../UI/Button";

interface FormProps {
    onSave: () => void;
    onCancel: () => void;
}

export const Form: React.FC<FormProps> = ({ children, onSave, onCancel }) => {
    const overlayHidden = useTypeSelector((state) => state.stopwatchFormState.overlayHidden)
    return (
        <>
            <div
                className={cn("background", { background_hide: overlayHidden })}
                onClick={onCancel}
            ></div>
            {!overlayHidden && (
                <div className="form">
                    {children}{" "}
                    <div className="form__controller">
                        <Button onClick={onSave}>Сохранить</Button>
                        <Button onClick={onCancel}>Отмена</Button>
                    </div>
                </div>
            )}
        </>
    );
};
