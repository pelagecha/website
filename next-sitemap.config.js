module.exports = {
    // Base URL of your website
    siteUrl: process.env.SITE_URL || "https://www.pelagecha.com",

    // Generate a robots.txt file
    generateRobotsTxt: true,

    // Maximum number of URLs per sitemap file
    sitemapSize: 7000,

    // Default change frequency for all URLs
    changefreq: "weekly",

    // Default priority for all URLs
    priority: 0.7,

    // Paths to exclude from the sitemap
    exclude: [
        "/private-page",
        "/admin/**", // Exclude all admin routes
        "/login", // Exclude login page
        "/signup", // Exclude signup page
        "/api/**", // Exclude all API routes
        "/404", // Exclude 404 pages
        "/_app", // Exclude Next.js internal pages
        "/_document",
        "/_error",
    ],

    // Options for robots.txt generation
    robotsTxtOptions: {
        // Policies for different user agents
        policies: [
            {
                userAgent: "*",
                allow: "/", // Allow all
            },
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: ["/private-page", "/admin/**"],
            },
            {
                userAgent: "Bingbot",
                allow: "/",
                disallow: ["/private-page", "/admin/**"],
            },
        ],

        // Additional sitemaps (e.g., for image sitemaps or video sitemaps)
        additionalSitemaps: [
            "https://www.pelagecha.com/sitemap-images.xml",
            "https://www.pelagecha.com/sitemap-videos.xml",
        ],
    },

    // Custom transformations (optional)
    // You can customize URLs, priorities, etc., based on your own logic
    transform: async (config, path) => {
        // Example: Assign higher priority to the homepage and important pages
        let priority = config.priority;
        let changefreq = config.changefreq;

        if (path === "/" || path === "/about" || path === "/contact") {
            priority = 1.0;
            changefreq = "daily";
        }

        return {
            loc: path, // The URL path
            changefreq,
            priority,
            lastmod: new Date().toISOString(), // Optional: Last modification date
            // You can add other properties like `img` or `video` here
        };
    },

    // Optional: Handle dynamic routes (e.g., blog posts)
    // If you have dynamic routes, you might need to fetch them and include in the sitemap
    // Uncomment and customize the following if needed
    /*
    additionalPaths: async (config) => {
      const dynamicPaths = await fetchDynamicPaths(); // Implement this function
      return dynamicPaths.map((path) => ({
        loc: path,
        changefreq: "monthly",
        priority: 0.5,
      }));
    },
    */
};
