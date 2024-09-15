// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";

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
                <Navbar />
                {children}
                {/* Optional div for modal portal */}
                <div id="modal-root"></div>
            </body>
        </html>
    );
}
