import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import BaseButton from "../BaseButton";
import React from "react";
import {Link} from "react-router-dom";

const Introduction = () => {
    useGSAP(() => {
        gsap.fromTo('#profileImage', { y: '0vh' }, { y: '-30vh', duration: 0.75, scrollTrigger: {
                trigger: '#profileImage',
                start: 'top center',
                end: 'bottom top',
                scrub: true,
            } })
    });

    return (
        <>
            <div className="col-span-12 lg:col-span-8 lg:col-start-2 mt-[16vh]">
                <h1 className="uppercase lg:indent-[2ch] max-lg:font-semibold w-full lg:w-[14ch] text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-inverted-soft-black relative z-10 mix-blend-difference">
                    a front end developer who breathes design
                </h1>

                <div className="flex mt-5">
                    <BaseButton
                        type="link"
                        link="https://www.upwork.com/freelancers/uidevelopment"
                        label="Hire Me"
                        showDot={true}
                        classes="md:hidden"
                    />
                </div>
                <Link to="portfolio">
                    <BaseButton type="button" label="View my work" showDot={false} />
                </Link>
            </div>

            <div id="profileImage" className="rounded-2xl md:rounded-[30px] lg:rounded-[48px] overflow-hidden mt-36 md:mt-28 lg:absolute lg:top-[36vh] lg:right-0 col-span-12 lg:col-start-6 w-full lg:w-[64vw] lg:col-span-6 z-0">
                <img src="https://www.juulvrasdonk.nl/_next/image?url=%2Fimages%2Fprofile.webp&w=1200&q=75" alt=""
                    className="w-full h-full object-cover"
                />
            </div>
        </>
    )
}

export default Introduction;
