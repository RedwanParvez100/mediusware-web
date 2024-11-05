import React from "react";
import img1 from "/images/clutch.jpg";
import img2 from "/images/upwork.jpg";
import img3 from "/images/google.jpg";
import img4 from "/images/swd.jpg";

const awards = () => {
    return (
        <div className="bg-[#F0F8FF] mt-16 p-10 mx-auto px-3 md:px-0">
            <div className="mt-16 text-center">
                <h1 className="font-bold text-4xl">
                    Achievements{" "}
                    <span className="text-[#2EB8A2]"> & Awards</span>
                </h1>
                <p className="mt-10 text-xl">
                    People know us for our top-notch work and great customer
                    service, all of whom have expressed nothing <br />
                    but positive feedback about our services. Take a moment to
                    see for yourself.
                </p>
            </div>
            <div className="logo mt-14 grid grid-cols-2 lg:grid-cols-4 ml-5 gap-5 mb-16">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
        </div>
    );
};

export default awards;
