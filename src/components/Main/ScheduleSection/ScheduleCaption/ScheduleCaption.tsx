import React from "react";
import ClockIcon from "../ClockIcon/ClockIcon";

interface ScheduleCaptionProps {
    day: string;
    time: string;
}

const ScheduleCaption = (props: ScheduleCaptionProps) => {
    const { day, time } = props;
    return (
        <div className="flex gap-4 items-center">
            <ClockIcon />

            <span className="regular-text">
                <strong>{`${day}: `}</strong> {time}
            </span>
        </div>
    );
};

export default ScheduleCaption;
