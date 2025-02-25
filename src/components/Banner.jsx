import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const Banner = () => {
    return (
        <div className="relative w-full  overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://s3-figma-videos-production-sig.figma.com/video/907900026577014002/TEAM/2e15/b653/-bba7-4454-a5cc-3ca982ed3987?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a6l85JSM429Rdi668P6nm1kILPeBVDufKqQu6LSLG1wpfH-e55buOvh-jyHvQlBVYFWoXSkgLJIJx9Bz5oYu58MFZc982RyaTamuh8etbH1eY257HB4trFyzat3AsC0wvZKkqN-JO5nnRT2WiXfG4AXkpSiFUKOBpzKwBh0RNPlN1Bfyt2ggZo7s1nV9WbcVagXPVFoM7hyVlF7myR6NR0n7YJplWhO6~i4ugn0PO-qOi9pbZP5ln-uSxP8Vr4~KK2NlnEBiPBgtiEnlAvxj0Psjp0tuyksAhJnTGE4~p2vGFP0p6HONjfhxQAgHt8XDf0GTu7MEc0xRaa73iOh5tQ__"
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
