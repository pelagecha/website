// app/components/ImageWithFallback.tsx

"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

const ImageWithFallback: React.FC<ImageProps> = ({ src, alt, ...props }) => {
    const [imgSrc, setImgSrc] = useState(src as string);

    const handleError = () => {
        setImgSrc("/images/fallback.png"); // Ensure this path is correct
    };

    return <Image src={imgSrc} alt={alt} onError={handleError} {...props} />;
};

export default ImageWithFallback;
