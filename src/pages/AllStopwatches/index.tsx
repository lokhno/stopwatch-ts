import React from "react";

import { StopwatchList } from "../../components/Stopwatch/StopwatchList";
import { useTypeSelector } from "../../hooks/useTypeSelector";

interface AllStopwatchesProps {}

export const AllStopwatches: React.FC<AllStopwatchesProps> = () => {
    const projects = useTypeSelector((state) => state.projectState.projects);
    return (
        <div className="content">
            {projects.map((project) => (
                <StopwatchList key={project._id} projectId={project._id} />
            ))}
        </div>
    );
};
