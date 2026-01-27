// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { Providers } from "./context/Providers";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.pelagecha.com"),
    title: "Nikita Pelagecha",
    description: "My personal portfolio website",
    openGraph: {
        title: "Nikita Pelagecha – Portfolio",
        description:
            "Explore my projects, skills, and experiences in software development",
        siteName: "Nikita Pelagecha Portfolio",
        images: [
            {
                url: "/images/metaPreview.png",
                width: 1200,
                height: 630,
                alt: "Nikita Pelagecha Portfolio Preview",
            },
        ],
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="transition-colors duration-500">
                {/* Runs before React hydration, App Router–safe */}
                <Script
                    id="theme-init"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function () {
                const theme = localStorage.getItem('theme');
                if (
                  theme === 'dark' ||
                  (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
                ) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
                    }}
                />

                <Providers>
                    <ThemeProvider>
                        <div className="main-container bg-gray-100 dark:bg-gray-900 min-h-screen">
                            <Navbar />
                            <main className="content pt-16">{children}</main>
                            <Footer />
                        </div>
                    </ThemeProvider>
                </Providers>

                <GoogleAnalytics gaId="G-QR8YZB5NC2" />
            </body>
        </html>
    );
}
