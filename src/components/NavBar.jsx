import React from "react";
import logo from "../../public/images/Logo.png";
export const NavBar = () => {
    return (
        <div className="bg-gray-500 ">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Services</a>
                                <ul className="p-2">
                                    <li>
                                        <a>Web Development</a>
                                    </li>
                                    <li>
                                        <a>Software Development</a>
                                    </li>
                                    <li>
                                        <a>App Development</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Projects</a>
                            </li>
                            <li>
                                <a>About Us</a>
                            </li>
                            <li>
                                <a>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <a className="">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <details>
                                <summary>Services</summary>
                                <ul className="p-2">
                                    <li>
                                        <a>Web Development</a>
                                    </li>
                                    <li>
                                        <a>Software Development</a>
                                    </li>
                                    <li>
                                        <a>App Development</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a>Projects</a>
                        </li>
                        <li>
                            <a>About Us</a>
                        </li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn ">Get a Schedule</a>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Services</a>
                                <ul className="p-2">
                                    <li>
                                        <a>Web Development</a>
                                    </li>
                                    <li>
                                        <a>Software Development</a>
                                    </li>
                                    <li>
                                        <a>App Development</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Projects</a>
                            </li>
                            <li>
                                <a>About Us</a>
                            </li>
                            <li>
                                <a>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
