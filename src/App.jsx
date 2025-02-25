import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import { IoArrowForward } from "react-icons/io5";
import Services from "./components/Services";
// import Peoples from "./components/Peoples";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Info from "./components/Info";
import Footer from "./components/Footer";
import About from "./components/About";
import softwareImg from "../public/images/software.jfif";
import webImg from "../public/images/web.jfif";
import appImg from "../public/images/mobile.jfif";
import solutionImg from "../public/images/ecommerce.jfif";
import uiImg from "../public/images/uiux.jfif";
import apiImg from "../public/images/api.jfif";
import Review from "./components/Review";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <NavBar />
            <Banner />
            <div className="container mx-auto py-8 md:py-16 lg:py-28 px-3 md:px-0">
                <div>
                    <h2 className="text-xl md:text-3xl lg:text-5xl text-center font-semibold">
                        Things We’re{" "}
                        <span className="text-[#2EB8A2]">Good At</span>
                    </h2>
                </div>

                <div
                    id="good"
                    className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                    <Card
                        img={softwareImg}
                        title={"Software Development"}
                        description={
                            "Relieve the Burden of Software Development and Project Management."
                        }
                    />
                    <Card
                        img={webImg}
                        title={"Web Development"}
                        description={
                            "We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ..."
                        }
                    />
                    <Card
                        img={appImg}
                        title={"Mobile App Development"}
                        description={
                            "Innovative solutions tailored to your needs, delivering seamless user experiences."
                        }
                    />
                    <Card
                        img={solutionImg}
                        title={"E-commerce Solution"}
                        description={
                            "E-commerce websites need to be user-friendly, but attractive at the same time."
                        }
                    />
                    <Card
                        img={uiImg}
                        title={"UI/UX Design"}
                        description={
                            "Crafting interfaces that enhance user experiences, elevating brand engagement effortlessly."
                        }
                    />
                    <Card
                        img={apiImg}
                        title={"API Integration"}
                        description={
                            "Bridging platforms for effortless data flow, enabling enhanced operational efficiency."
                        }
                    />
                </div>
                <div className="text-center pt-12">
                    <button className="btn px-6 btn-info text-white">
                        See All
                        <IoArrowForward />
                    </button>
                </div>
            </div>
            <About />
            <Services />
            <Review />
            {/* <Peoples /> */}
            <Projects />
            <Awards />
            <Info />
            <Footer />
        </>
    );
}

export default App;
