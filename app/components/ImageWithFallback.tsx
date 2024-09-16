"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

const ImageWithFallback: React.FC<ImageProps> = ({ src, alt, ...props }) => {
    const [imgSrc, setImgSrc] = useState(src as string);

    const handleError = () => {
        setImgSrc("/images/fallback.png");
    };

    return (
        <Image
            src={imgSrc}
            alt={alt}
            onError={handleError}
            {...props} // Ensure width, height, and other necessary props are passed
        />
    );
};

export default ImageWithFallback;
