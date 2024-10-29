import React from "react";

const Banner = () => {
    return (
        <div className="banner py-52 text-center bg-slate-900">
            <p className="text-8xl text-white font-bold">
                Transforming Your Ideas <br />
                into
                <span className="text-green-500"> Digital Outcomes</span>
            </p>
            <br />
            <p className="text-lg text-white">
                Our global journey needs your expertise. Align with our brand
                ethos and help us reach new heights across the world.
            </p>
            <button className="text-white mt-10 btn btn-info">
                Talk to Someone
            </button>
        </div>
    );
};

export default Banner;
