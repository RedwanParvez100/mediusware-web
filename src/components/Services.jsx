import React from "react";

const Services = () => {
    return (
        <div className="">
            <div className="container mx-auto py-28 px-3 md:px-0">
                <div className="grid gap-6 grid-cols-12">
                    <div className="col-span-12 lg:col-span-6">
                        <h3 className="text-xl font-semibold  md:font-bold md:text-3xl lg:text-5xl">
                            How We{" "}
                            <span className="text-[#2EB8A2]">
                                Work Together
                            </span>
                        </h3>
                        <p className="py-10 text-gray-950">
                            Mediusware is a US-based software development
                            company with unique access to premium developers &
                            Designers. We follow a structured process to ensure
                            project success. Our approach guarantees reliability
                            and ongoing support for every project. Here is the
                            process we work on:
                        </p>
                    </div>

                    <div className="border rounded-xl p-6 bg-[#F1F5F9] col-span-12 md:col-span-6 lg:col-span-3">
                        <img src="./images/planning.png" alt="" />
                        <div className="mt-4 lg:mt-11">
                            <h5 className="text-2xl font-semibold mb-3">
                                Planning
                            </h5>
                            <p>
                                Collaborate with clients to create a detailed
                                project plan.
                            </p>
                        </div>
                    </div>

                    <div className="border rounded-xl p-6 bg-[#F1F5F9] col-span-12 md:col-span-6 lg:col-span-3">
                        <img src="./images/planning.png" alt="" />
                        <div className="mt-4 lg:mt-11">
                            <h5 className="text-2xl font-semibold mb-3">
                                Defining
                            </h5>
                            <p>
                                Document project requirements and
                                specifications.
                            </p>
                        </div>
                    </div>
                    <div className="border rounded-xl p-6 bg-[#F1F5F9] col-span-12 md:col-span-6 lg:col-span-3">
                        <img src="./images/planning.png" alt="" />
                        <div className="mt-4 lg:mt-11">
                            <h5 className="text-2xl font-semibold mb-3">
                                Designing
                            </h5>
                            <p>
                                Develop and refine user-friendly prototypes and
                                wireframes.
                            </p>
                        </div>
                    </div>
                    <div className="border rounded-xl p-6 bg-[#F1F5F9] col-span-12 md:col-span-6 lg:col-span-3">
                        <img src="./images/planning.png" alt="" />
                        <div className="mt-4 lg:mt-11">
                            <h5 className="text-2xl font-semibold mb-3">
                                Coding & Implement
                            </h5>
                            <p>
                                Develop the software using best practices and
                                latest technologies.
                            </p>
                        </div>
                    </div>
                    <div className="border rounded-xl p-6 bg-[#F1F5F9] col-span-12 md:col-span-6 lg:col-span-3">
                        <img src="./images/planning.png" alt="" />
                        <div className="mt-4 lg:mt-11">
                            <h5 className="text-2xl font-semibold mb-3">
                                Testing
                            </h5>
                            <p>
                                Rigorously test for functionality, performance,
                                and security.
                            </p>
                        </div>
                    </div>
                    <div className="border rounded-xl p-6 bg-[#F1F5F9] col-span-12 md:col-span-6 lg:col-span-3">
                        <img src="./images/planning.png" alt="" />
                        <div className="mt-4 lg:mt-11">
                            <h5 className="text-2xl font-semibold mb-3">
                                Integration
                            </h5>
                            <p>
                                Integrate components, conduct final testing, and
                                provide support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            ;
        </div>
    );
};

export default Services;
