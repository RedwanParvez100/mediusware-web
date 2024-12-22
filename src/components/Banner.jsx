import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const Banner = () => {
    return (
        <div className="relative w-full  overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://s3-figma-videos-production-sig.figma.com/video/907900026577014002/TEAM/2e15/b653/-bba7-4454-a5cc-3ca982ed3987?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NiKyjXWcHQbhsK8ZZKDHBGhZqK8ba3WlxUkRHxdHq9OIlnqOT3Zni~6sxgwqCiNpHGfm1fIS~LwLFvePcJsz9RcjJx6EJdL9SZHmB~phqxRaZ-CK0~~c1DMcHJ-t56gkQ2s~b7ILTQHyt8uVYwjysu~npGHxUw5q0RTQ5Ep2bnCSMm9zwo7q0ii27Yf0L2AlsSeNnTtdHSKErfz70trlfjvrNPsuqbzk0nid3OSEnhPszH5Mfgyq4uoqFDd~IaP78mb9fWDNzUyk8pUiVjlB7IX56D1qNz5uGLZOA1MPJ0JrxuBBURViPJdVSBku0BhFvJqFOjdNlW6UlWP2gF3boQ__"
                autoPlay
                loop
                muted
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
