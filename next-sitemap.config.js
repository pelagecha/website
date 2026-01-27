module.exports = {
    siteUrl: "https://www.pelagecha.com",

    generateRobotsTxt: false,

    sitemapSize: 7000,
    changefreq: "weekly",
    priority: 0.7,

    exclude: [
        "/private-page",
        "/admin/**",
        "/login",
        "/signup",
        "/api/**",
        "/404",
        "/_app",
        "/_document",
        "/_error",
        "/pdf/**",
    ],

    transform: async (config, path) => {
        let priority = config.priority;
        let changefreq = config.changefreq;

        if (path === "/" || path === "/about") {
            priority = 1.0;
            changefreq = "daily";
        }

        return {
            loc: path,
            changefreq,
            priority,
        };
    },
};
