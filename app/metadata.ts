import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.pelagecha.com"),
    title: "Nikita Pelagecha",
    description: "My personal portfolio website",
    openGraph: {
        title: "Nikita Pelagecha - Portfolio",
        description:
            "Explore my projects, skills, and experiences in software development",
        url: "https://www.pelagecha.com",
        siteName: "Nikita Pelagecha Portfolio",
        images: [
            {
                url: "/images/metaPreview.png",
                width: 1200,
                height: 630,
                alt: "Nikita Pelagecha Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};
