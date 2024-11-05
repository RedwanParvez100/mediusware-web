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
                                src="https://s3-alpha-sig.figma.com/img/f3dc/d637/15503c2703643402258baa8f4b635cd8?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NxeDpyXN~wOTN-4c2DNrIohwJoGxVKXfAIzw1QrWmZUsLRZnEi~XM0ZoO7TbksBmBzHOM8ETMvK9gHmw0NzYQI63rBlroLlTN1OznjksxsVwADVRDoSPtb4eB7uH33jMxR6vWgX1EwqSibLHt7sRvAL~hFIyZlHQjEOIZn-aYkt9l0K7LYbcXCAdrAe07EYTBS1K6drKj1UNtaWTUpsV6E2KGhvwqzVU5ah3dZFupNekITcP~JyifgoT6pNXS3dkENjU0cHEfmTdbEYVkBxPtBRlpalUNkvU3nevQaC4MORo1LmojL7OJf1xrbCQxGJXHJwsW5swjsM0n9AzomjJCw__"
                                alt="Shoes"
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
                                src="https://s3-alpha-sig.figma.com/img/9a0c/6ee6/70499deb64fa0abd378303f7d3e7995b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxUSWbFy8Ep92Wm5euV0J4G5eT-oErZgPN22PL4Bg7va-wYx-BTDy5h22VR3k0ECtr5g7AJ7E-urIrBiJjTNCBzyXrL4NNrDBJwBFu0bNG1Gx3D6SnOxsn-fxHcghzCB-R5znbKN79SpzBMRdgu8IbHDJ9lcrXP0~TT9ZFvCR8RJ9hcWUcrFKU1BmqfA7ttKpG2nHn7reujxF8nsOU7JHHcyIJkeEtuFZgYIomywks7JOKQUb2LTZsD1qq5~nXvIQXce2bEh4esDmsmxgnJjP~aBLF3NFiFPYgzIjxzu6O4y6jhkllvTTS~qVy7TDm5LBixsjzei0DgGJGmlL-fGSA__"
                                alt="Shoes"
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
                                src="https://s3-alpha-sig.figma.com/img/c24c/3069/68d761117cd21f3db76ef9b9d3626fb6?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcB00Afjv3WK7VZk64YYjaisvUT7h1nbKUx31IBqQUVFj7W5uZrd1j9-7XNl6txV7OCfqSk5ojiwoHjJFHcDYmPO6Tw~UFUiyYmZai8SCmfKJb-0zJcTJXvSBUYUZDUMwMqgqSv0dDRNr-~P3gelJKqXN7KKU4A5rKvSLkgYThUmdL2xdPnGK85nUCWb7aucdaWSRYeR0gWYaMtJhY7tFP7h8JFzEFj5QIg4xfExt4UBYzu8j-TsCwW4-e68bcDxa37jZ8hbNRW70ts6hJmixJbrn7WMzWzscHW6Rp0qdalCFh1AyUuPqnuQmYauwJcv4Z0EdlEZ~DyDZD9fEFKd1A__"
                                alt="Shoes"
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
                                src="https://s3-alpha-sig.figma.com/img/c24c/3069/68d761117cd21f3db76ef9b9d3626fb6?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcB00Afjv3WK7VZk64YYjaisvUT7h1nbKUx31IBqQUVFj7W5uZrd1j9-7XNl6txV7OCfqSk5ojiwoHjJFHcDYmPO6Tw~UFUiyYmZai8SCmfKJb-0zJcTJXvSBUYUZDUMwMqgqSv0dDRNr-~P3gelJKqXN7KKU4A5rKvSLkgYThUmdL2xdPnGK85nUCWb7aucdaWSRYeR0gWYaMtJhY7tFP7h8JFzEFj5QIg4xfExt4UBYzu8j-TsCwW4-e68bcDxa37jZ8hbNRW70ts6hJmixJbrn7WMzWzscHW6Rp0qdalCFh1AyUuPqnuQmYauwJcv4Z0EdlEZ~DyDZD9fEFKd1A__"
                                alt="Shoes"
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
            </Swiper>
        </div>
    );
};

export default Projects;
