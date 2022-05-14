import internal from "stream";
import { ITimeInterval } from "../types/stopwatch";

export const getStopwatchTime = (intervals: ITimeInterval[]): number => {

    let result: number = 0;

    intervals.forEach((item) => {
        let end = item.stopDate ? new Date(item.stopDate).getTime() : new Date().getTime();
        result += end - new Date(item.startDate).getTime();
    });
    return result;
};

export const getStopwatchLastIntervalStartTime = (intervals: ITimeInterval[]): Date => {
    if (intervals.length === 0) {
        return new Date();
    }
    return intervals[intervals.length - 1].startDate;
};

export const isStopwatchTicking = (intervals: ITimeInterval[]): boolean => {
    if (intervals.length === 0) {
        return false;
    }
    return !intervals[intervals.length - 1].stopDate;
};

export const getTimeFromMilliseconds = (milliseconds: number): string => {
    const addZero = (value: string): string => {
        return value.length > 1 ? value : "0" + value;
    };
    let timeWithoutH = milliseconds % 3600000;
    let hours = (milliseconds - timeWithoutH) / 3600000;
    let timeWithoutHAndM = timeWithoutH % 60000;
    let minutes = (milliseconds - hours * 3600000 - timeWithoutHAndM) / 60000;
    let timeWithoutHMAndS = timeWithoutHAndM % 1000;
    let seconds = (milliseconds - hours * 3600000 - minutes * 60000 - timeWithoutHMAndS) / 1000;
    return `${addZero(hours.toString())}:${addZero(minutes.toString())}:${addZero(seconds.toString())}`;
};
