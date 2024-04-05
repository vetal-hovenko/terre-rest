import React from "react";

const Intro = () => {
    return (
        <div className="lg:mt-[200px] md:mt-[100px] mt-[20px]">
            <h1 className="lg:text-[120px] md:text-[70px] text-[50px] font-lora tracking-wider">
                terre restaurant
            </h1>

            <div className="flex md:flex-row flex-col-reverse md:items-center items-start gap-8">
                <button className="flex justify-center items-center rounded-full border-[1px] border-white uppercase bg-white lg:w-[120px] lg:h-[120px] md:w-[80px] md:h-[80px] w-[70px] h-[70px] regular-text px-4 lg:leading-7 leading-4 hover:scale-150 hover:bg-transparent hover:text-white transition text-custom-black">
                    about us
                </button>
                <div className="regular-text">
                    <p>
                        We have beautiful and fun things coming up on the patio
                        this summer.
                    </p>
                    <p>Now it only needs to… be summer. To be continued!</p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
