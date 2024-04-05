import React from "react";

const Clock = () => {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14 25.6666C20.4434 25.6666 25.6667 20.4432 25.6667 13.9999C25.6667 7.5566 20.4434 2.33325 14 2.33325C7.55672 2.33325 2.33337 7.5566 2.33337 13.9999C2.33337 20.4432 7.55672 25.6666 14 25.6666Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14 7V14L18.6667 16.3333"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Clock;
