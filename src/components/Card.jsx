import React from "react";

import software from "../../public/images/software.jfif";
// import web from "../../public/images/web.jfif";

const card = () => {
    return (
        <div className="relative rounded-xl h-[234px] md:h-[264px] lg:h-[364px] overflow-hidden mt-20">
            <img src={software} className="w-full h-full object-cover" alt="" />
            <div
                style={{
                    background:
                        "linear-gradient(to top, #072B4A99 80%, #072B4A66 50%, #072B4A99 80%)",
                }}
                className="absolute flex flex-col justify-end pl-6 pb-6 inset-0 text-white "
            >
                <h2 className="text-2xl font-semibold">Software Development</h2>
                <p>Relieve the Burden of Software Development and Project</p>
            </div>
        </div>
    );
};

export default card;
