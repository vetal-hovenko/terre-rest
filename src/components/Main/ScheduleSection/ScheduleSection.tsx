import ContentWrapper from "@/components/UI/ContentWrapper/ContentWrapper";
import HandwrittenText from "@/components/UI/HandwrittenText/HandwrittenText";
import React from "react";
import ScheduleCaption from "./ScheduleCaption/ScheduleCaption";

const ScheduleSection = () => {
    return (
        <section>
            <ContentWrapper containerStyle="px-2 my-16">
                <div className="flex flex-col gap-8 lg:px-0 md:px-5 px-0">
                    <article className="flex lg:flex-row flex-col-reverse lg:items-center gap-8">
                        <div className="food schedule-image" />
                        <div className="md:px-0 px-5">
                            <HandwrittenText text="work time" />
                            <h2 className="section-title">restaurant</h2>

                            <div className="flex lg:flex-col gap-4 flex-row justify-between">
                                <ScheduleCaption
                                    day="friday"
                                    time="8AM - 11:30AM"
                                />
                                <ScheduleCaption
                                    day="saturday & sunday"
                                    time="9AM - 2:00PM"
                                />
                            </div>
                        </div>
                    </article>

                    <article className="flex lg:flex-row-reverse flex-col-reverse lg:items-end justify-between gap-8 lg:-mt-20">
                        <div className="person-with-cup schedule-image" />
                        <div className="md:px-0 px-5">
                            <HandwrittenText text="work time" />
                            <h2 className="section-title">café</h2>
                            <ScheduleCaption
                                day="breakfast & lunch"
                                time="every day from 8AM - 3PM"
                            />
                        </div>
                    </article>
                </div>
            </ContentWrapper>
        </section>
    );
};

export default ScheduleSection;
