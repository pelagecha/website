import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Portfolio",
    description: "My personal portfolio website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body className="bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
                <ThemeProvider>
                    <Navbar />
                    <main className="pt-16">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
