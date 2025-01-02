import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { GoogleAnalytics } from "@next/third-parties/google";

import { Providers } from "./context/Providers";

// app/layout.tsx
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
                        <div className="main-container bg-gray-100 dark:bg-gray-900 min-h-screen">
                            <Navbar />
                            <main className="content pt-16">{children}</main>
                            <Footer />
                        </div>
                    </ThemeProvider>
                </Providers>
            </body>
            <GoogleAnalytics gaId="G-QR8YZB5NC2" />
        </html>
    );
}
