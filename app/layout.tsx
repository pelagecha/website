// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata = {
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
            <body>
                <ThemeProvider>
                    <Navbar />
                    <main className="pt-16">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
