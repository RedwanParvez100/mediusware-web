import React from "react";

const Info = () => {
    return (
        <div className="container mx-auto my-28 rounded-xl bg-[#072B4A]">
            <div className="flex flex-col lg:flex-row justify-between items-center p-4 md:p-16">
                <div className="text-white">
                    <h3 className="text-[18px] md:text-xl lg:text-3xl font-semibold">
                        Want to know what we are up to?
                    </h3>
                    <p className="mt-2">Subscribe to our newsletter.</p>
                </div>

                <div className="flex gap-4">
                    <input
                        type="email"
                        className="w-48 md:w-80 rounded-lg px-3 outline-none"
                        placeholder="Enter your email"
                    />
                    <button className="btn px-6 btn-info text-white">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Info;
