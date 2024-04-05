import React from "react";
import HistorySection from "./HistorySection/HistorySection";
import BannersSection from "./BannersSection/BannersSection";
import ScheduleSection from "./ScheduleSection/ScheduleSection";
import BookingSection from "./BookingSection/BookingSection";

const Main = () => {
    return (
        <main>
            <HistorySection />
            <BannersSection />
            <ScheduleSection />
            <BookingSection />
        </main>
    );
};

export default Main;
