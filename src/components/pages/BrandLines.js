import {useEffect} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const BrandLines = () => {
    useEffect(() => {
        const createImage = (id, src, alt, className) => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = alt;
            img.classList.add("absolute", "size-16", className);
            document.getElementById(id).appendChild(img);
        };

        createImage("code", "/images/code.webp", "code pic", "code-pic");
        createImage("design", "/images/website-design.svg", "design pic", "design-pic");
        createImage("animation", "/images/keyframe.webp", "animation pic", "animation-pic");
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.animated-bits',
                start: 'top 75%',
                end: '+=1500 top',
                scrub: true,
                pin: false,
                markers: true,
                onEnter: () => {
                    gsap.to('.code-pic', { opacity: 1, translateY: -100, scale: 1, duration: .5, ease: "power3.in" })
                    gsap.to('.design-pic', { opacity: 1, translateY: -160, scale: 1, duration: .5, delay: .5, ease: "power3.in" })
                    gsap.to('.animation-pic', { opacity: 1, translateY: -160, scale: 1, duration: .5, delay: .8, ease: "power3.in" })
                },
                onLeaveBack: () => {
                    gsap.to('.code-pic', { opacity: 0, translateY: -30, scale: .6, duration: .5, delay: .5, ease: "power3.out" })
                    gsap.to('.design-pic', { opacity: 0, translateY: -30, scale: .6, duration: .5, delay: .8, ease: "power3.out" })
                    gsap.to('.animation-pic', { opacity: 0, translateY: -30, scale: .6, duration: .5, ease: "power3.out" })
                }
            }
        });
    })

    return (
        <section className="pb-28 pt-20 lg:pt-[50vh] px-6 grid lg:grid-cols-12 text-3xl relative z-10">
            <h2 className="lg:col-span-3 lg:col-start-2">
                I develop platforms that bridge the gap between people and information.
            </h2>

            <p className="lg:col-span-5 lg:col-start-7 pt-12 animated-bits">
                With each line of <span className="inline-block relative" id="code">code</span>,
                every pixel of <span className="inline-block relative" id="design">design</span>
                and every <span className="inline-block relative" id="animation">animation</span>
                 added, I aim to bring<strong> visions</strong> to life and turn ideas into interactive
                experiences.
            </p>
        </section>
    )
}

export default BrandLines;
