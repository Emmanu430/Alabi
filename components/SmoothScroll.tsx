"use client";
import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.08, anchors: true }}>
        {children}
        </ReactLenis>
    );
}