import React, { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Projects = () => {
    return (
        <div
            id="projects"
            className="container mx-auto py-16 lg:py-24 px-3 md:px-0"
        >
            <div className="grid gap-4 grid-cols-12 ">
                <div className="col-span-12 md:col-span-10">
                    <h3 className="text-xl mb-6 font-semibold  md:font-bold md:text-3xl lg:text-5xl">
                        Projects We’d Hang on
                        <span className="text-[#2EB8A2]">Our Refrigerator</span>
                    </h3>
                    <p>
                        Discover our latest work, showcasing innovative
                        solutions and successful collaborations that highlight
                        our expertise in <br />
                        delivering high-quality software development projects.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-2 lg:flex lg:justify-end lg:items-end">
                    <button className="btn px-6 btn-info text-white">
                        See All
                        <IoArrowForward />
                    </button>
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
                className="mySwiper lg:mt-16"
            >
                <SwiperSlide className="py-9">
                    <div className="card card-compact  overflow-hidden  shadow-xl">
                        <figure>
                            <img
                                className="w-full h-[250px] lg:h-[320px]"
                                src="https://s3-alpha-sig.figma.com/img/f3dc/d637/15503c2703643402258baa8f4b635cd8?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jtJdaSSvsNbgChOyI~zHn0PDYB-7U3IjuGKSTDVfbplNI4HiyIKhkmNWgLUQlC0EO-3YF1WhCzrqDfyKDm9E~fHPFyV~UZh7Gqki2xGhid5oJJidVUJbQWzAaYSB8RUXLx-FYtaAgweCGV2Ex5PuDcL18rV7cgM7HQg0Sl8terTVHq72ZgyWaqb-wg6jYrWhiQs5WUBeJ8OCdWkXQn4GRHLN8nvfG4GF-~yDbhFlisx6GItMcdYtAt1ZKsfTIyZT71ETcX6~0rcw11WFJMbjaQns31VkKgNXiZrc4OeSf3JJKPBy24UhafpSPWd7d~MAW3ZEBMPjRO9pQZ4vF4kj~w__"
                                alt="laptop"
                            />
                        </figure>
                        <div className="card-body bg-[#F0F8FF]">
                            <h2 className="card-title font-semibold">
                                Go Thruhike Website Redesign
                            </h2>
                            <p>
                                Thruhike is the ultimate platform for
                                discovering and sharing your favorite places and
                                products. Our mission is to celebrate local
                                business and inspire
                            </p>
                            <div className="mt-4">
                                <button className="flex items-center gap-4 text-[#0C98EB] font-semibold">
                                    <span> View Project</span>{" "}
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="py-9">
                    <div className="card card-compact  overflow-hidden  shadow-xl">
                        <figure>
                            <img
                                className="w-full h-[250px] lg:h-[320px]"
                                src="https://s3-alpha-sig.figma.com/img/9a0c/6ee6/70499deb64fa0abd378303f7d3e7995b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C113k0lPG-EtwSvCLXVHhc0WXNKZv4vJD8Nz5Y4z3b73fdNHfbh3yRAhEFSAktsEOHxGs5LO12Xaqxtm3ymzpwvQnE7D0PyYJ6iQc6yDPSD9pnCcREya2bPBfb-Hma89Jq32BTKHR5rf1D35tLjD68TE272cS6qcDMD-pflByfg18jEhBK9U0SlDV0e4hfrTUtVC7ALWYOFmtfNDnSEp-fXHJXUAQuMpvBVVCF3PKTKG-MK4xFt-6tOp1rJOEHl1mCqFl23RoHRUxkITP5dDTqEEGtrS8pCR24WfMubnEiDinjb5ZQTMZ5b4twIzUkNVC4vXTKwuSBCYFuY~8-xtcg__"
                                alt="gamezone launcher"
                            />
                        </figure>
                        <div className="card-body bg-[#F0F8FF]">
                            <h2 className="card-title font-semibold">
                                Gamezone Game Launcher
                            </h2>
                            <p>
                                Game Launcher is a sleek desktop application
                                designed exclusively for gamers. It offers
                                seamless access to your favorite games,
                                customizable.
                            </p>
                            <div className="mt-4">
                                <button className="flex items-center gap-4 text-[#0C98EB] font-semibold">
                                    <span> View Project</span>{" "}
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="py-9">
                    <div className="card card-compact  overflow-hidden  shadow-xl">
                        <figure>
                            <img
                                className="w-full h-[250px] lg:h-[320px]"
                                src="https://s3-alpha-sig.figma.com/img/c24c/3069/68d761117cd21f3db76ef9b9d3626fb6?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IwpiAspzYGYcaDr9QAa-2QZr3MdjxDcscqKjr5Th~eY6fZ7i61moOiftGxTukfyw4K2YYTtDPTEtYMdonS9DPtX6gf6MXk4FZ5byPhVkJMaX43AKr~fZlVgHdTNpQUIECuOpN5nfqVjt4P2ktSokaovo2xnKiddlqaSAxANSoUnmLnw2fh47am-~bxfc1h-qwSPE7YGrn3i1Lb3hBm9kwlcleFpWJCLO9pcKXGdJ0FceIh-hdmTsRq4Tv8432bnEKX6Lh87ZvO-L86k6OcRJIej2EwU6~k2Zr09Ajui~NN-a~KnaXJyP8nAh2tNKCyH42zhhSusWmJwpHf0-KQABmw__"
                                alt="learning"
                            />
                        </figure>
                        <div className="card-body bg-[#F0F8FF]">
                            <h2 className="card-title font-semibold">
                                Learn Here
                            </h2>
                            <p>
                                LearnHere is the platform that presents all the
                                lessons from Beginner to Expert Level with live
                                and recorded classes.
                            </p>
                            <div className="mt-4">
                                <button className="flex items-center gap-4 text-[#0C98EB] font-semibold">
                                    <span> View Project</span>{" "}
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="py-9">
                    <div className="card card-compact  overflow-hidden  shadow-xl">
                        <figure>
                            <img
                                className="w-full h-[250px] lg:h-[320px]"
                                src="https://s3-alpha-sig.figma.com/img/37a3/6b2f/df66fbe04daaed700f1ad2bc2db1682f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DJ0OcEymJQaGyAM1FgmzlnIIKF7brf4kHjgcOAdaoGje4afI5NxOf8N9B4T-Qt6sq-VKrZu2LKFbhZbjWzPuKN~hGAa1h97QVdVZweqnF~dHtcPNgES6ik3EMhTX1Puy40sRTDbirsvwt4~FlkhyL4oMc-qoNc6r0QoGy9FcdF86fZLwcJOT9bDf1hhxYk2RYe3Wq9reBx1ykh47ocqqCbqy2Yhihk7mKkuitbag06iZGT6Cm5ZxntCa9vsiYbFEJHhHE146yRUib1SW-yvmucBNghnuvfR3Q5edRqMaYSX5ki8LRfT0tnf34zhnWTxq7US1MT8qZUFahmTZprr1Ag__"
                                alt="laptop"
                            />
                        </figure>
                        <div className="card-body bg-[#F0F8FF]">
                            <h2 className="card-title font-semibold">
                                Vivabillpay Website UX UI Design
                            </h2>
                            <p>
                                Vivabillpay is a bill payment platform that
                                offers a seamless and user-friendly experience
                                for managing utility bills, mobile recharges.
                            </p>
                            <div className="mt-4">
                                <button className="flex items-center gap-4 text-[#0C98EB] font-semibold">
                                    <span> View Project</span>{" "}
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;
