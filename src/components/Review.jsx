import React from "react";
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
                                    src="https://s3-alpha-sig.figma.com/img/62b1/3e68/9ae521f93c400d307bb438d094196dc3?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RN46qa4SXru4S6dOXMH46vifkI8FdTfavULvjOyaSNGTCtfaJYVllofmexjBgOcGke9b-8QMVKTDMnnDW0YGtNuPqKH-EqOwjraiJW9FdWA-ZQ1N51DpvX6mp0ZMMqSz6xtE~iQ4fjg8O~MiaRvPiofGjS223FAGFlehW-vPo8j8GahOJZ6jB5qjL4oAYhMHD6yn~P6zIOfGMyk1vDiw8P5yqfQ8WNL03a79TOnqOkvTmu6tC~N6ksugmdhDoOB6EF4UV9AmtlGY5YyOsQOrniJSc1YuhtHMR9EweHPAMf4wPDsq1H1al8v5nZXc6HouKtXSij8V06ODM2xVJ74WdA__"
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
                                    src="https://s3-alpha-sig.figma.com/img/a4df/540e/d532a757f7324d13f4bd2f1fe2f47ea8?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n9500uOnBctEr4clSOqlsKzf9SMJl6SIPsHD9FbluM7yDvUBQN510fki3utFSiS70b-KqyTSCpkSCNJTdgnX4XGcscMA9xT5thu-kNhX5sGRZODrPL9fGkvqDwRL~-LMvfvLCd7oGLes3cnZZpPdPcZdlJ~KdzJQobBmOYARxX4sBXvLkRFUBoZAyFNJwTMogDZE-S9rgTnkNIgymWNEiJPGWWKoeMrkyBAMBOTA4XpuU9sv8H5eVJLm6b4acDtrLq0bh4C1NHsVdi7bI7VSHeuoubdhO88IlXR9~ZWvJNc7e~5MwxJelxMj11vke~fjJmfFEAH~J2OPsc76Exo9Kw__"
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
                                    src="https://s3-alpha-sig.figma.com/img/69ac/d89a/c2c424395297e830539581230ce2598b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ORt1mXZwKpP8QQRwiF5RnCGVw136cNXnqIRjeSoQeVohUv9XljlJYVBhSsD50LYb0f6xK3lYLFa1NQYOYv~AJ3BwnwTjQ~uEswGDFbyA4emh0h~NTr~Paydu~jgS5dWQyfD~Mv44X8jWR9SvBriVE3KnlYHXM3W-BSCciu1hKwJLUP8RQkhwnQD6wimEPJm3qk-JOwLieu01k-fZV3A0quc9yJMl~7DuDvFnZmhsP~PtQRw4rZO2RDwXBpxMmVr788E5obEeBswp0N89PGFrNaTXgjKIfhzbaLkn0t4yHuLKC2SdtPsKgVkzn8~1rWzmsMIsdpTI9cWvcZfolYGY-Q__"
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
                                    src="https://s3-alpha-sig.figma.com/img/62b1/3e68/9ae521f93c400d307bb438d094196dc3?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RN46qa4SXru4S6dOXMH46vifkI8FdTfavULvjOyaSNGTCtfaJYVllofmexjBgOcGke9b-8QMVKTDMnnDW0YGtNuPqKH-EqOwjraiJW9FdWA-ZQ1N51DpvX6mp0ZMMqSz6xtE~iQ4fjg8O~MiaRvPiofGjS223FAGFlehW-vPo8j8GahOJZ6jB5qjL4oAYhMHD6yn~P6zIOfGMyk1vDiw8P5yqfQ8WNL03a79TOnqOkvTmu6tC~N6ksugmdhDoOB6EF4UV9AmtlGY5YyOsQOrniJSc1YuhtHMR9EweHPAMf4wPDsq1H1al8v5nZXc6HouKtXSij8V06ODM2xVJ74WdA__"
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
                </Swiper>
            </div>
        </div>
    );
};

export default Review;
