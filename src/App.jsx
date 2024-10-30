import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import { IoArrowForward } from "react-icons/io5";
import Services from "./components/Services";
import Peoples from "./components/Peoples";
import Projects from "./components/Projects";
import Awards from "./components/Awards";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <NavBar />
            <Banner />
            <div className="container mx-auto py-8 md:py-16 lg:py-28">
                <div>
                    <h2 className="text-xl md:text-3xl lg:text-5xl text-center font-semibold">
                        Things We’re{" "}
                        <span className="text-[#2EB8A2]">Good At</span>
                    </h2>
                </div>

                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="text-center pt-12">
                    <button className="btn px-6 btn-info text-white">
                        See All
                        <IoArrowForward />
                    </button>
                </div>
            </div>
            <Services />
            <Peoples />
            <Projects />
            <Awards />
        </>
    );
}

export default App;
