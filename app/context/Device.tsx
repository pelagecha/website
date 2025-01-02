export const Device = (userAgent: string): string => {
    userAgent = userAgent.toLowerCase();
    if (/mobile|iphone|ipod|android.*mobile|windows phone/i.test(userAgent)) {
        return "mobile";
    } else if (/ipad|android(?!.*mobile)|tablet/i.test(userAgent)) {
        return "tablet";
    } else if (/macintosh|windows|linux|cros|x11/i.test(userAgent)) {
        return "desktop";
    }
    return "unknown";
};
