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
                                    src="https://s3-alpha-sig.figma.com/img/62b1/3e68/9ae521f93c400d307bb438d094196dc3?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VEHzui-KdaiL7zILAI84N~abYrni5X9DKx4wlV1CvM0yRrff1rGkta5b~Z3NWaSVpzA2SuBxUl-J2xVqnO1t0i1r5J7Hd8PyQzrjdUdMGXCYJHmjhNtHFSyBRLh-xsOeFHuCZr6urmLzDgHB85sF5RUOkxWZ~WIuVpBQtajPG0m14rgYuAn7QddVptqWM0ECDkKiALHQ5j71SpPJlJD9Hml7wJr7lDvKiL7wfmKaC6clrXHot268ncvWNqEotRoa-yrzNCUKOka5ypar92ISvicARRSxSz~xAx8~mi-Bc4IK-c8mEPiNyFBp68WEjs~9YmA9oSp1UUE51d7Lm-egtw__"
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
                                    src="https://s3-alpha-sig.figma.com/img/a4df/540e/d532a757f7324d13f4bd2f1fe2f47ea8?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XgfCdbgiBxTkgV72Zn0TDJtFw4cQhWLu7o2PaSx1wUOjYSqqog3LiFbIiKXGPfBph6Ta4~SIHJVBb8kmVi9rTISDLT120JD1A02EIg50dB7zCHFPAJQsIs1dCUR2woKgQe2nc-RQhTOUsSp2K5DuVkem2vOBS0InQE03mssfRbJnDZR63Q2Mp98YZKSi94KzkglHBj7uxsvJKZ77gv70tcF4PO~z1yLL260H42Lq-WVOgRSEqZezP-5iuox3NYzVBQxwqVX6-vNhiLZLyytTJvvG6XePs0tiW4nSlzGrF3idhx5GQ24bTzEuzMUgJ7hT7AZerGg7XvOdbjfT7KO51g__"
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
                                    src="https://s3-alpha-sig.figma.com/img/69ac/d89a/c2c424395297e830539581230ce2598b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r-5ZglOOEnyCedcxRcnTfrlNIGyTB8NAdgviheZHsmPyYz3hNu9nQbw2~XZEMZ54SeBZqU3Q2D8M9T~omEmgeIuBsw04k~3WRIaXPagAm9Zx0WgKMW0HQvKSCJRk26cV4T2yvMmSSVNExqzSaQfWdA32oFq-Gqm4CI8K~40bi4T3N~adZTcJZ-OMb4QDz4Ri5FDP4q3J8cLxzNPiFZuBBl~MAfurdmdG3iCQ6oSgRi3~NMRfdgjbKNa0zvYqxHArALrFpkFUg88cbfZWdqDBdDqIx5zUyJp8DW05Wp6CrG6pdAdRLxqKZDpHpsPxL1XBakTKvyaXHQHnuivbjNgEiQ__"
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
                                    src="https://s3-alpha-sig.figma.com/img/5cfa/c46b/4d013142b5221088852e53950024e969?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kqa8qPNyIh6vr6jLvd6kGNv6FwqF~GjGie~MR2W9u9Wz824AqZxDaeLaNtZFtD4lI1Lk7F5nN1ZF4snWyweaxhGxHxH5tthJsUfCIJgjFEFaLC90B4lnCFp5Tuidh9gLEn~dOl5s8kKitQfKHPbJj4-F6zCQR7~xYba~tyrG8V53rejNPCt0OohQbwjIXHi8CiU15uMOq~MjY-5-LO3vXWzthZUup5Q8q9BQXnLRa1B6Qkai2rYmnTrIiaAiyjcfGVfSKI9rgBrv~YjqZlWiPFwTtOA70BcpFsrwSDzaWrvUhp1Wny0epHMIo94htqP7IveR5LSx64q4nR9OL6dzPg__"
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
