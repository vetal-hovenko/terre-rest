import React from "react";

const CloseButton = () => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22.5 7.5L7.5 22.5"
                stroke="black"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.5 7.5L22.5 22.5"
                stroke="black"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default CloseButton;
