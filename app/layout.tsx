// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
    title: "Nikita Pelagecha | Portfolio",
    description: "Portfolio website of Nikita Pelagecha",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-white text-black">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
