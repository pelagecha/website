// components/Projects.tsx

import React, { useState, useEffect, useRef } from "react";
import { projectsData } from "../data/projectsData";
import { blogsData } from "../data/blogsData";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import StoryCard from "./StoryCard";

const Story: React.FC<{ storyType: string }> = ({ storyType }) => {
    const [storiesPerPage, setStoriesPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const scrollRef = useRef<HTMLDivElement>(null);
    let storyData;

    switch (storyType) {
        case "projects":
            storyData = projectsData;
            break;
        case "blogs":
            storyData = blogsData;
            break;
        default:
            storyData = projectsData;
    }

    /** Number of columns in the row of stories */
    const updateStoriesPerPage = () => {
        const width = window.innerWidth;
        if (width < 640) {
            setStoriesPerPage(1); // Mobile
        } else if (width >= 640 && width < 1024) {
            setStoriesPerPage(2); // Tablet
        } else {
            setStoriesPerPage(3); // Desktop
        }
    };

    /** Adjust to window resizing */
    useEffect(() => {
        updateStoriesPerPage();
        window.addEventListener("resize", updateStoriesPerPage);
        return () => window.removeEventListener("resize", updateStoriesPerPage);
    }, []);

    const totalPages = Math.ceil(storyData.length / storiesPerPage); // Calculate total pages

    /** Handle horizontal scroll */
    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollPosition = scrollRef.current.scrollLeft;
            const pageWidth = scrollRef.current.clientWidth;
            const newPage = Math.round(scrollPosition / pageWidth) + 1;
            setCurrentPage(newPage);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
            return () =>
                scrollContainer.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <section id={storyType} className="container mx-auto section-flush">
            <div
                className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
                ref={scrollRef}
            >
                <div className="flex" style={{ width: `${100 * totalPages}%` }}>
                    {Array.from({ length: totalPages }).map((_, pageIndex) => (
                        <div
                            key={pageIndex}
                            className="flex-shrink-0 snap-start px-3"
                            style={{ width: `${100 / totalPages}%` }}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
                                {storyData
                                    .slice(
                                        pageIndex * storiesPerPage,
                                        (pageIndex + 1) * storiesPerPage
                                    )
                                    .map((storyData) => (
                                        <StoryCard
                                            key={storyData.slug}
                                            storyData={storyData}
                                            storyType={storyType} // Add this line
                                        />
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-6 space-x-2">
                    <button
                        onClick={() => {
                            if (scrollRef.current) {
                                scrollRef.current.scrollBy({
                                    left: -scrollRef.current.clientWidth,
                                    behavior: "smooth",
                                });
                            }
                        }}
                        aria-label="Scroll left"
                        className={`p-2 bg-gray-100 dark:bg-gray-800 rounded ${
                            currentPage === 1
                                ? "bg-gray-200 dark:bg-gray-900 cursor-not-allowed"
                                : ""
                        }`}
                    >
                        <FaAngleLeft />
                    </button>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (scrollRef.current) {
                                    scrollRef.current.scrollTo({
                                        left:
                                            index *
                                            scrollRef.current.clientWidth,
                                        behavior: "smooth",
                                    });
                                }
                            }}
                            className={`w-3 h-3 rounded-full ${
                                currentPage === index + 1
                                    ? "bg-black dark:bg-gray-300"
                                    : "bg-white dark:bg-black"
                            }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                    <button
                        onClick={() => {
                            if (scrollRef.current) {
                                scrollRef.current.scrollBy({
                                    left: scrollRef.current.clientWidth,
                                    behavior: "smooth",
                                });
                            }
                        }}
                        aria-label="Scroll right"
                        className={`p-2 bg-gray-100 dark:bg-gray-800 rounded ${
                            currentPage === totalPages
                                ? "bg-gray-200 dark:bg-gray-900 cursor-not-allowed"
                                : ""
                        }`}
                    >
                        <FaAngleRight />
                    </button>
                </div>
            )}
        </section>
    );
};

export default Story;
