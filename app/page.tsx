// app/page.tsx
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";

export default function Home() {
    return (
        <>
            <AboutMe />
            <Projects />
            <Blogs />
        </>
    );
}
