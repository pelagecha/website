import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { Metadata } from "next";
import { ParticlesProvider } from "./context/ParticlesContext";

import { Providers } from "./context/Providers";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="transition-colors duration-500">
                <Providers>
                    <ThemeProvider>
                        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
                            <Navbar />
                            <main className="pt-16">{children}</main>
                            <Footer />
                        </div>
                    </ThemeProvider>
                </Providers>
            </body>
        </html>
    );
}
