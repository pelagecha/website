// components/Blogs.tsx

import React, { useState, useEffect } from "react";
import { blogsData } from "../data/blogsData";
import BlogCard from "./BlogCard";
import { AnimatePresence, motion } from "framer-motion";

const Blogs: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage, setBlogsPerPage] = useState(3); // Default to desktop view

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
        // Update blogsPerPage on mount
        updateBlogsPerPage();

        // Update blogsPerPage on window resize
        window.addEventListener("resize", updateBlogsPerPage);

        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", updateBlogsPerPage);
    }, []);

    // Calculate total pages based on blogsPerPage
    const totalPages = Math.ceil(blogsData.length / blogsPerPage);

    // Ensure currentPage is within bounds when blogsPerPage changes
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [blogsPerPage, totalPages, currentPage]);

    // Get current blogs based on currentPage and blogsPerPage
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <section id="blogs" className="my-16 p-4 container mx-auto">
            <div className="relative">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(event, info) => {
                            const swipe = info.offset.x;
                            if (swipe < -100 && currentPage < totalPages) {
                                setCurrentPage(currentPage + 1);
                            } else if (swipe > 100 && currentPage > 1) {
                                setCurrentPage(currentPage - 1);
                            }
                        }}
                    >
                        {currentBlogs.map((blog) => (
                            <BlogCard key={blog.slug} blog={blog} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 bg-green-500 text-white rounded 
                                disabled:opacity-50 disabled:cursor-not-allowed 
                                hover:bg-green-600 transition-colors duration-300`}
                >
                    Previous
                </button>
                <span className="text-gray-700 dark:text-gray-300">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 bg-green-500 text-white rounded 
                                disabled:opacity-50 disabled:cursor-not-allowed 
                                hover:bg-green-600 transition-colors duration-300`}
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default Blogs;
