import React from "react";
import { useParams } from "react-router-dom";

import { StopwatchList } from "../../components/Stopwatch/StopwatchList";

// import "./Stopwatches.scss";

interface StopwatchesProps {}

export const Stopwatches: React.FC<StopwatchesProps> = () => {
    const { projectId } = useParams();
    return (
        <div className="content">
            <StopwatchList projectId={projectId !== undefined ? +projectId : 0} type="single" />
        </div>
    );
};
