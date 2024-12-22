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
        <div className="container mx-auto py-16 lg:py-24 px-3 md:px-0">
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
                                src="https://s3-alpha-sig.figma.com/img/f3dc/d637/15503c2703643402258baa8f4b635cd8?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aTX6h7dQR6yQMwi1wJVW4iocRQN4XWGMjlHvCoClYgzk~ajrYHdnEMI5TpbYqXvN3HzOHz-nRhTeascIu~izQzbOyjmHwvFtjVKBiGehlxpVP~Z~8P-ArvP9tcnZMN-SUTLycaX~yJRt95WjRcdwIBGqfyOqtJM61xjvUXxEEWyEm2XMJ0eVBV77Iq0v55jZd3H~infZdKxS~xKoLnvrdDer-lkt6-xG~Dhw5MPs0RiiGeqkJyzhrgHOr4O9N7P3P4sbUrhxqznJspWqOq4CrcbSvCwDge25uqILXyUhx6xddfuAE7ppbbPiwqBspVtkeB35hypNgE6vQtexb6d3Ow__"
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
                                business and inspire new experiences.
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
                                src="https://s3-alpha-sig.figma.com/img/9a0c/6ee6/70499deb64fa0abd378303f7d3e7995b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ldGyKUfinxKnDYb2DUYxEinXmmDjMIUkoKdav1rxKbKaOWHYzj1mzqUGrFEJc4biVBDai75cElOkPhgNxf4B0leGSvWFNJ3SYeZw32oky1HNWoawoTza8AYvRn2wrthnnvvRjw7ooMQBx~dgKYc3kNQRRxvWmO9VR4GwuVuSWYf4Gk9LM3xQG1uGdnc~5GYumh06rIwXEIWMYJMUMYkS04-9Q8Aq7JMauJ4rTtN~luYj~cSSIjynENWFYPdQarXpBG1JqrEGM5BoWTBP8LTLYujxrURLIho7Jk4tAG9nJBw~BP3vqyWK1I5xv3ScTUKyGtdfsuNTk1Q8PzEJYov4QA__"
                                alt="game launcher"
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
                                customizable settin....
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
                                src="https://s3-alpha-sig.figma.com/img/c24c/3069/68d761117cd21f3db76ef9b9d3626fb6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PEHNjqn04AK0U--w26UQvd8AoqxC2ulOEhsyko4pTsLwgQJyOgoGfa9UOq9Snwr-VPzk60X1q0Fu51v8XDK-xb1tJHn-AQHbgudwr-TzXeQSThYY1~hEfg2jWq1MHBXmoQtjLuCC7EbAlf2V1wpMlw8vSHYUWVMhjXOHV4Kv23mJ27iaf2RLER7AiI2h8YK3wPZ04n~N7PoIcuib6R2siHT~RTFbLqVk8~iSTe7eieNhSeQ7oxeKkqnW6VRLCeSsakXruS4J2SvS~QTK~GV9C-3Yjj6wu1W0PedbYKZBL9vhwfjlzsYhyng7ICOJdGGvcV6tJzd~MQKeCZB~Ltqq3g__"
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
                                src="https://s3-alpha-sig.figma.com/img/f3dc/d637/15503c2703643402258baa8f4b635cd8?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aTX6h7dQR6yQMwi1wJVW4iocRQN4XWGMjlHvCoClYgzk~ajrYHdnEMI5TpbYqXvN3HzOHz-nRhTeascIu~izQzbOyjmHwvFtjVKBiGehlxpVP~Z~8P-ArvP9tcnZMN-SUTLycaX~yJRt95WjRcdwIBGqfyOqtJM61xjvUXxEEWyEm2XMJ0eVBV77Iq0v55jZd3H~infZdKxS~xKoLnvrdDer-lkt6-xG~Dhw5MPs0RiiGeqkJyzhrgHOr4O9N7P3P4sbUrhxqznJspWqOq4CrcbSvCwDge25uqILXyUhx6xddfuAE7ppbbPiwqBspVtkeB35hypNgE6vQtexb6d3Ow__"
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
                                business and inspire new experiences.
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
