import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PagePreloader() {
    useGSAP(() => {
        gsap.to('.loading-overlay', {
            y: '100vh',
            duration: 1,
            delay: 3,
            ease: 'power2.in'
        })
        gsap.to('.owner-name', {
            opacity: 0,
            duration: 1,
            delay: 2,
            ease: 'power2.in'
        })
    })
    return (
        <div className="loading-overlay fixed z-[1000] w-screen h-screen flex justify-center items-center overflow-hidden bg-soft-black">
            <div className="owner-name text-inverted-soft-black font-medium text-4xl relative">
                <p>Saqib</p>
                <p className="relative -right-10">Syed</p>
            </div>
        </div>
    )
}
