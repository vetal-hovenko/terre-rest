import React from "react";
import { Montez } from "next/font/google";

const montez = Montez({ weight: "400", subsets: ["latin"] });

const HandwrittenText = ({ text, isWhite }: { text: string, isWhite?: boolean }) => {
    return <p className={`regular-text ${isWhite ? "text-white " : "text-custom-green"} ${montez.className}`}>{text}</p>;
};

export default HandwrittenText;
