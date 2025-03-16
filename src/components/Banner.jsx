import React from "react";
import bgVideo from "/images/bg.mp4";
import { FiPhoneCall } from "react-icons/fi";

const Banner = () => {
    return (
        <div className="relative w-full  overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />

            <div className="relative bg-black bg-opacity-40 py-64 w-full h-full flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold">
                        Transforming Your Ideas <br />
                        into{" "}
                        <span className="text-[#2EB8A2]">Digital Outcomes</span>
                    </h1>
                    <p className="py-6 mt-5">
                        Our global journey needs your expertise. Align with our
                        brand ethos and help us reach new heights across the
                        world.
                    </p>
                    <button className="btn px-6 btn-info text-white mt-7">
                        <FiPhoneCall />
                        Talk to Someone
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
