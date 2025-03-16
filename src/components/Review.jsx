import React from "react";
import slider1 from "/images/slider1.jpg";
import slider2 from "/images/slider2.jpg";
import slider3 from "/images/slider3.jpg";
import slider4 from "/images/slider4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Review = () => {
    return (
        <div className="bg-[#F0F8FF] py-16 lg:py-28">
            <div className="container mx-auto px-3 md:px-0">
                <div className="md:w-10/12 lg:w-8/12 mx-auto mb-16">
                    <div className="text-center ">
                        <h3 className="text-xl mb-6 font-semibold md:font-bold md:text-3xl lg:text-5xl">
                            What the People{" "}
                            <span className="text-[#2EB8A2]">Are Saying</span>
                        </h3>
                        <p>
                            Explore success stories from clients across a range
                            of industries, spanning from techpreneurs and start-{" "}
                            <br />
                            ups to established enterprises.
                        </p>
                    </div>
                </div>

                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 3000, // Delay in ms for autoplay
                        disableOnInteraction: false, // Keeps autoplay even after interaction
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className=""
                >
                    <SwiperSlide className="pb-9">
                        <div className="w-full border p-5 overflow-hidden bg-white rounded-lg shadow-lg">
                            <div className="relative">
                                <img
                                    className="object-cover rounded-lg w-full h-56"
                                    src={slider1}
                                    alt="avatar"
                                />
                                <img
                                    className="absolute w-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    src="./images/play.png"
                                    alt="play icon"
                                />
                            </div>
                            <div className="pt-5">
                                <h3 className="text-lg font-medium mb-4">
                                    Mediusware renewed our trust in outsourcing
                                    IT development in the USA.
                                </h3>
                                <p>Jenny Wilson</p>
                                <p className="text-sm">CEO, Company Name</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="pb-9">
                        <div className="w-full border p-5 overflow-hidden bg-white rounded-lg shadow-lg">
                            <div className="relative">
                                <img
                                    className="object-cover rounded-lg w-full h-56"
                                    src={slider2}
                                    alt="avatar"
                                />
                                <img
                                    className="absolute w-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    src="./images/play.png"
                                    alt="play icon"
                                />
                            </div>
                            <div className="pt-5">
                                <h3 className="text-lg font-medium mb-4">
                                    Banking the unbanked with the help of
                                    Mediusware developers.
                                </h3>
                                <p>Courtney Henry</p>
                                <p className="text-sm">CTO, Company Name</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="pb-9">
                        <div className="w-full border p-5 overflow-hidden bg-white rounded-lg shadow-lg">
                            <div className="relative">
                                <img
                                    className="object-cover rounded-lg w-full h-56"
                                    src={slider3}
                                    alt="avatar"
                                />
                                <img
                                    className="absolute w-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    src="./images/play.png"
                                    alt="play icon"
                                />
                            </div>
                            <div className="pt-5">
                                <h3 className="text-lg font-medium mb-4">
                                    Our Digital Transformation Journey Fueled by
                                    Top-Tier IT Solutions by Mediusware Ltd.
                                </h3>
                                <p>Kristin Watson</p>
                                <p className="text-sm">
                                    Director, Company Name
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="pb-9">
                        <div className="w-full border p-5 overflow-hidden bg-white rounded-lg shadow-lg">
                            <div className="relative">
                                <img
                                    className="object-cover rounded-lg w-full h-56"
                                    src={slider4}
                                    alt="avatar"
                                />
                                <img
                                    className="absolute w-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    src="./images/play.png"
                                    alt="play icon"
                                />
                            </div>
                            <div className="pt-5">
                                <h3 className="text-lg font-medium mb-4">
                                    Working with Mediusware has been a
                                    game-changer for Thruhike.
                                </h3>
                                <p>Katherine Van Hengel</p>
                                <p className="text-sm">
                                    CEO of Thruhike (goThruhike.com)
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Review;
