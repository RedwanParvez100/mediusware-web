import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const Banner = () => {
    return (
        <div className="relative w-full  overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://s3-figma-videos-production-sig.figma.com/video/907900026577014002/TEAM/2e15/b653/-bba7-4454-a5cc-3ca982ed3987?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cwc90y4mbRq98Yq5MDu~fEYxtemR5xkgJkeDyim3y541R59PooaSGg2RtzJwyz2g06937BGLjMWK4GRlilOY~dWI9CdP5XNcpMeIjlbywNB2eSUAY05scn5T9teS1Fs1zEJsGtLiCtyapw3945LQecQ1FQied5NjIOBCnJ80tkYJxmVpPtc8BKapZlaFKPBnTT0N-J2mlUjgiWQq4ZgHS~n556a6B4C4vjFlJRjanW3IjqQFB21Dji4lfTKYsoQwIZ17FnhZTzeWPuocaX82Hv4MNGVm6p4582pqITo6bSi2RXR5sgpvQvcYRzrqXqpGYEzLDD5vZxELPrdSjSG98g__"
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
