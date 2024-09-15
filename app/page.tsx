// app/page.tsx

import React from "react";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";

const HomePage: React.FC = () => {
    return (
        <>
            <AboutMe />
            <Skills />
            <Projects />
            <Blogs />
        </>
    );
};

export default HomePage;
