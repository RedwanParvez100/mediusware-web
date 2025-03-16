import React from "react";
import { FiDownload } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import about from "/images/about.png";

const About = () => {
    return (
        <div id="about" className=" py-28 bg-[#F0F8FF]">
            <div className="container mx-auto relative px-3 md:px-0">
                <div className="w-full lg:w-[703px] border-green-700 lg:relative">
                    <div className="relative rounded-2xl overflow-hidden">
                        <img className="w-full" src={about} alt="" />
                        <img
                            className="absolute w-14 lg:w-20 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 z-50"
                            src="./images/play.png"
                            alt=""
                        />
                        <div className="absolute inset-0 bg-black opacity-15"></div>
                    </div>

                    <div className="w-full xxl:w-[900px]  lg:absolute lg:left-[82%] lg:top-1/2 lg:-translate-y-1/2 rounded-lg border p-8 bg-white  lg:mt-0 ">
                        <h2 className="text-xl md:text-3xl lg:text-5xl mb-4  font-semibold">
                            A Little Bit {""}
                            <span className="text-[#2EB8A2]">About Us</span>
                        </h2>
                        <p className="text-xs md:text-base">
                            Incepted in 2015, Mediusware Ltd. has been serving
                            as a leading IT Solution provider in USA &
                            Bangladesh. Our aim is to help businesses all around
                            the world by providing the digital solutions
                            according to their need. Serving a number of
                            renowned companies from the USA, UK, and many other
                            countries, we have already created a wide range of
                            satisfied clients!
                        </p>

                        <div className="mt-4 grid gap-4 grid-cols-3 ">
                            <div className="bg-[#F1F5F9] p-4 rounded-lg">
                                <h5 className="text-xl md:text-3xl mb-2 font-semibold">
                                    800+
                                </h5>
                                <p className="text-xs md:text-base">
                                    Projects Completed
                                </p>
                            </div>
                            <div className="bg-[#F1F5F9] p-4 rounded-lg">
                                <h5 className="text-xl md:text-3xl mb-2 font-semibold">
                                    100+
                                </h5>
                                <p className="text-xs md:text-base">
                                    Team Members
                                </p>
                            </div>

                            <div className="bg-[#F1F5F9] p-4 rounded-lg">
                                <h5 className="text-xl md:text-3xl mb-2 font-semibold">
                                    1000+
                                </h5>
                                <p className="text-xs md:text-base">
                                    Happy Customers
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 md:mt-8 flex flex-col md:flex-row gap-6">
                            <button className="btn px-6 btn-info text-white">
                                <FiPhoneCall />
                                Contact Us
                            </button>
                            <button className="btn bg-transparent border border-gray-300 px-6 btn-info hover:text-white ">
                                <FiDownload />
                                Company Deck
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
