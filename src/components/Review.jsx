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
            <div className="container mx-auto px-2 md:px-0">
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
                                    src="https://s3-alpha-sig.figma.com/img/62b1/3e68/9ae521f93c400d307bb438d094196dc3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YBqEi-4hICeBMsE0QbIXYrWBFwh~47t9AlJvdjwsMslzEiHRhgkYBXQMknLZu-nf1NFhep85yAzjhPmOXU~3e283aVvGjtKIu2d2Xe20zHMsGXIDun4eson7Bs6n3pcVmMxZ-S~djwHCc0C34qz~rGjGykY2GAtar~Pykg0wezINnjsnSn1ck3Q9lRKTCF9c8nNV7thg4y8Suv~vexKUcjmY5QXXex8EbUtBMg~lkMr7QGy-2JD8AElOsH~uOO~mILRKPiIGpOqcRSAYgNbRYcMNjzLlL4kmNUsxkyVHWfgLaswMBiKD46RiR8sprcMEBzHF92rbBECILBYinBI00Q__"
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
                                    src="https://s3-alpha-sig.figma.com/img/a4df/540e/d532a757f7324d13f4bd2f1fe2f47ea8?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bLXrysu7THKroYlMnQGNlpPjHfgRZ6~EQicbjlq9IGvUBAiCYNUqSp1k-eQ89qzivQNCH683RgXH4k3sAx30MT0gJmRuru5OeBNlpJbhxM98-fr9KJiUKlMkmp~38c-URI7AzbuSNvbuBU5laDTGh7if8ZLjn4skV28N~VJ8VQvJtYUOXF2cIS-PXLlic3p~45n-gBsDikXSKAVrAaV2uGxYk7SFg2rmbd0FqlJ95veryCD-dY~6JOcTPjh8d8CWwQ1F03a2dOqr0gi4H73E67p1BTE2cl~cJsb03Lq~Nqd0BcMDzBw47FUG37CJ5IngIM1bkvWnn9AwGNoWVRKf3w__"
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
                                    src="https://s3-alpha-sig.figma.com/img/69ac/d89a/c2c424395297e830539581230ce2598b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hGYuhqaqEWgb7r0el07LgRCF80~HTEFOBo-mBEE0cQD00l2QRikym~1LVaEsAh8wrKmbd~yOSQPJoYRiRcwc6eUPnQUlwVTVBgUBGNGvmkFQO6wCcS-RE0pcBZZq6dqJs312Q0E7asL-Y7kQqhwahQeVSbNz0FONfuasVke4i4LvtdCVWTHLmO0Wb7BXsz-PkhD-eJa~dS-4utraU4OQ0UGZxYLmq9I1DSEdN4-DBGcsgS646dxRr2dyOHLx02OzguRgxH9qzHkNTDqzE6nayvdIrvfKr1yeyWmtCiXB5J042aAL06xXNVy3JEEykzV8YuIr3lMGm22iq1wYGDHdnQ__"
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
                                    src="https://s3-alpha-sig.figma.com/img/62b1/3e68/9ae521f93c400d307bb438d094196dc3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YBqEi-4hICeBMsE0QbIXYrWBFwh~47t9AlJvdjwsMslzEiHRhgkYBXQMknLZu-nf1NFhep85yAzjhPmOXU~3e283aVvGjtKIu2d2Xe20zHMsGXIDun4eson7Bs6n3pcVmMxZ-S~djwHCc0C34qz~rGjGykY2GAtar~Pykg0wezINnjsnSn1ck3Q9lRKTCF9c8nNV7thg4y8Suv~vexKUcjmY5QXXex8EbUtBMg~lkMr7QGy-2JD8AElOsH~uOO~mILRKPiIGpOqcRSAYgNbRYcMNjzLlL4kmNUsxkyVHWfgLaswMBiKD46RiR8sprcMEBzHF92rbBECILBYinBI00Q__"
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
