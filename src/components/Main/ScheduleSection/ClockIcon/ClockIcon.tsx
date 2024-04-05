import Clock from "@/components/UI/Icons/Clock";
import React from "react";

const ClockIcon = () => {
    return (
        <div className="md:w-[50px] md:h-[50px] h-[40px] w-[40px] flex items-center justify-center bg-custom-green">
            <Clock />
        </div>
    );
};

export default ClockIcon;
