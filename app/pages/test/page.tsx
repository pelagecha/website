"use client";
import React, { useState, useEffect } from "react";
import { Device } from "@/app/context/Device";

const YourComponent = () => {
    const [deviceType, setDeviceType] = useState("");

    useEffect(() => {
        const userAgent = navigator.userAgent;
        const detectedDevice = Device(userAgent);
        console.log("Detected Device:", detectedDevice); // Debugging
        setDeviceType(detectedDevice);
    }, []);

    return (
        <div>
            {deviceType === "mobile" && <p>Hello Mobile</p>}
            {deviceType === "tablet" && <p>Hello Tablet</p>}
            {deviceType === "desktop" && <p>Hello Desktop</p>}
            {deviceType === "unknown" && <p>Hello Unknown Device</p>}
        </div>
    );
};

export default YourComponent;
