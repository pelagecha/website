"use client";

import { ParticlesProvider } from "./ParticlesContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return <ParticlesProvider>{children}</ParticlesProvider>;
}
