"use client";
import React, { useState, useEffect, useRef } from "react";
import { blogsData } from "../data/blogsData";
import BlogCard from "./BlogCard";

const Blogs: React.FC = () => {
    const [blogsPerPage, setBlogsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Function to update blogsPerPage based on window width
    const updateBlogsPerPage = () => {
        const width = window.innerWidth;
        if (width < 640) {
            setBlogsPerPage(1); // Mobile
        } else if (width >= 640 && width < 1024) {
            setBlogsPerPage(2); // Tablet
        } else {
            setBlogsPerPage(3); // Desktop
        }
    };

    useEffect(() => {
        updateBlogsPerPage();
        window.addEventListener("resize", updateBlogsPerPage);
        return () => window.removeEventListener("resize", updateBlogsPerPage);
    }, []);

    // Calculate total pages
    const totalPages = Math.ceil(blogsData.length / blogsPerPage);

    // Function to handle scroll
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
        <section id="blogs" className="container mx-auto section-flush">
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
                                {blogsData
                                    .slice(
                                        pageIndex * blogsPerPage,
                                        (pageIndex + 1) * blogsPerPage
                                    )
                                    .map((blog) => (
                                        <BlogCard key={blog.slug} blog={blog} />
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center mt-6 space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (scrollRef.current) {
                                scrollRef.current.scrollTo({
                                    left: index * scrollRef.current.clientWidth,
                                    behavior: "smooth",
                                });
                            }
                        }}
                        className={`w-3 h-3 rounded-full ${
                            currentPage === index + 1
                                ? "bg-indigo-500"
                                : "bg-gray-300"
                        }`}
                        aria-label={`Go to page ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Blogs;
