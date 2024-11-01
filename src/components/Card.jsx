import React from "react";

const card = (props) => {
    console.log(props);
    return (
        <div className="relative rounded-xl h-[234px] md:h-[264px] lg:h-[364px] overflow-hidden mt-20">
            <img
                src={props.img}
                className="w-full h-full object-cover"
                alt=""
            />
            <div
                style={{
                    background:
                        "linear-gradient(to top, #072B4A99 80%, #072B4A66 50%, #072B4A99 80%)",
                }}
                className="absolute flex flex-col justify-end pl-6 pb-6 inset-0 text-white"
            >
                <h2 className="text-2xl font-semibold">{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default card;
