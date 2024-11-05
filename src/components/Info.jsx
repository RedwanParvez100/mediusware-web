import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";

const Info = () => {
    return (
        <div className="container mx-auto my-28 rounded-xl px-3 md:px-0">
            <div className="flex flex-col lg:flex-row justify-between items-center p-4 md:p-16 bg-[#072B4A] rounded-xl">
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
            <div className="container mx-auto my-28">
                <div className="flex flex-col gap-8 justify-between lg:flex-row">
                    <div className=" w-full lg:w-1/2">
                        <div className="relative">
                            <img
                                className="w-32 lg:w-1/3 rounded-lg"
                                src="https://s3-alpha-sig.figma.com/img/6c2d/edfe/fb26de1edc5f6ef2809bc526f681b3b5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FdfRyC35TvCFqWs6QV8SrKD06X1wsbU2NRUImX-HuhxZXqomI6QaNRnejtNm6YBZgdLNkronwuxoyslXfpI1F6q~DqBguKJ2Us5xj2yfyEQSYGJqK~-XytqJVHpzTRNs-PSWvrWOZToNQy7F7paXte1ss69Oh1YTw7Omuqx6PsI09s9deDBF9egPrBOFVvA83-a7pLPxdCZA1Qhyj636nQDyO-HuxEnPsd47kNpWd4N6gpqeLCFCCZs0kSOi70Jjk59yXhgYGfptMtzJ9CSniP1HZRsTf2nQIYVrjPWKKtAFKnVRk02v3aJ5Qpyv6zpXYvePaTHtsEwwUhQL2gbo5w__"
                                alt=""
                            />
                            <div className=" rounded-lg p-4 lg:p-6 absolute bottom-0 left-[30%] md:left-[15%] lg:left-[30%] bg-[#A5EADA4D]/20  backdrop-blur-md">
                                <h4 className="text-base md:text-xl font-semibold">
                                    Md. Shahinur Rahman
                                </h4>
                                <span className="text-xs md:text-base">
                                    Managing Director, Mediusware Ltd
                                </span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="mb-4">
                                I'd be excited to talk with you about your
                                projects or what you need.
                            </p>
                            <p>
                                Fill in the form or send us an email to
                                <span className="text-[#0C98EB] font-semibold underline">
                                    “info@mediusware.com”
                                </span>
                            </p>
                            <h3 className="text-xl font-bold my-8">
                                Talk to you in less than 24hs.
                            </h3>
                        </div>

                        <div className="bg-[#F0F8FF] p-6 rounded-lg">
                            <div>
                                <h5 className="font-bold">Book a call</h5>
                                <p>
                                    Feel free to select a time at your
                                    convenience!
                                </p>
                                <button className="mt-2 flex items-center gap-4 text-[#0C98EB] font-semibold">
                                    <span> Let's Talk</span>{" "}
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=" lg:w-1/2 p-6 bg-[#F0F8FF] rounded-lg">
                        <div>
                            <h4 className="text-2xl font-semibold mb-4">
                                Got an idea? We’ve got the skills.
                            </h4>
                            <p>
                                Fill out our contact form and we’ll get in
                                touch!
                            </p>
                        </div>

                        <form className="mt-8">
                            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                                <div>
                                    <label
                                        className="font-medium"
                                        htmlFor="username"
                                    >
                                        Name*
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="block w-full px-4 py-2 mt-2 rounded-md outline-none   "
                                    />
                                </div>
                                <div>
                                    <label
                                        className="font-medium"
                                        htmlFor="username"
                                    >
                                        Email*
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter Your Email"
                                        className="block w-full px-4 py-2 mt-2 rounded-md outline-none   "
                                    />
                                </div>
                                <div>
                                    <label htmlFor="username">
                                        <span className="font-medium">
                                            Phone Number
                                        </span>{" "}
                                        (Optional)
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        placeholder="Enter Your Phone Number"
                                        className="block w-full px-4 py-2 mt-2 rounded-md outline-none   "
                                    />
                                </div>
                                <div>
                                    <label htmlFor="username">
                                        <span className="font-medium">
                                            Company Name
                                        </span>{" "}
                                        (Optional)
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        placeholder="Enter Your Company Name"
                                        className="block w-full px-4 py-2 mt-2 rounded-md outline-none   "
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="username">
                                    <span className="font-medium">
                                        Deep details about your query
                                    </span>{" "}
                                    (Optional)
                                </label>
                                <textarea
                                    name="comment"
                                    id=""
                                    placeholder="Tell us more about your query"
                                    className="block w-full h-[120px] px-4 py-2 mt-2 rounded-md outline-none"
                                ></textarea>
                            </div>
                            <div className="mt-5 text-right">
                                <button className="btn px-6 btn-info text-white">
                                    Submit Inquiry
                                    <IoSendSharp />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
