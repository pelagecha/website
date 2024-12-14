import React from "react";
import HomePage from "./components/HomePage";
import Head from "next/head";
import { metadata } from "./metadata";

export { metadata };

export default function Page() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <HomePage />
        </>
    );
}
