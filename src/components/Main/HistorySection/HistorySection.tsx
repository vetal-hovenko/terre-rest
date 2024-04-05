import ContentWrapper from "@/components/UI/ContentWrapper/ContentWrapper";
import HandwrittenText from "@/components/UI/HandwrittenText/HandwrittenText";
import Image from "next/image";
import React from "react";

const HistorySection = () => {
    return (
        <section className="px-4">
            <ContentWrapper>
                <div className="lg:pt-20 md:pt-16 pt-12 flex lg:justify-between lg:items-center lg:flex-row flex-col-reverse">
                    <h2 className="section-title">our history</h2>
                    <HandwrittenText text="We could not be prouder to be." />
                </div>

                <div className="relative flex justify-end">
                    <div className="absolute lg:top-0 md:-bottom-32 right-0 left-0">
                        <div className="lg:w-1/2 h-screen w-full relative">
                            <Image
                                src="/two-men-1.png"
                                alt="Picture of the founders"
                                width={560}
                                height={600}
                                className="lg:static absolute md:-right-10 md:left-auto md:-bottom-20 bottom-0 left-1/4 lg:h-[600px] lg:w-[500px] md:w-[424px] md:h-[464px] h-[360px] w-[280px] -z-20"
                            />
                            <Image
                                className="absolute lg:-right-64 lg:bottom-36 lg:left-auto md:-bottom-48 md:left-44 bg-transparent -z-20 lg:w-[400px] lg:h-[320px] md:w-[320px] md:h-[320px] md:block hidden"
                                src="/two-men-min.png"
                                alt="Picture of the founders"
                                width={440}
                                height={368}
                            />
                        </div>
                    </div>

                    <article className="lg:w-7/12 w-full flex flex-col gap-2 regular-text z-10">
                        <p>
                            It only took one visit to Newfoundland & Labrador
                            for Chef Matthew Swift to pack-up everything he
                            owned and make St. John’s his new home.
                        </p>
                        <p>
                            Heading kitchens in Ontario and Quebec restaurants,
                            including Montreal institution Joe Beef, for two
                            decades was the perfect primer for Matthew to break
                            out on his own. Inspired by the provinces people,
                            food, produce, history and jaw-dropping landscapes,
                            Matthew and his incredible team have created a
                            welcoming comfortable space that reflects and
                            respects it’s environment.
                        </p>
                        <p className="md:w-1/2">
                            In 2021, Terre was selected as one of ‘Canada’s Best
                            New Restaurants’ by enRoute Magazine’s expert food
                            panel. We could not be prouder to be part of this
                            prestigious list.
                        </p>

                        <button className="mt-8 md:py-5 md:px-10 py-3 px-6 lg:self-end self-start font-bold full-story-button">
                            read the full enroute story
                        </button>
                    </article>
                </div>
            </ContentWrapper>
        </section>
    );
};

export default HistorySection;
