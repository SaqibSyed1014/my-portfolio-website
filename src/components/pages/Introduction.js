import gsap from "gsap";
import {useGSAP} from "@gsap/react";

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
            <div className="col-span-8 col-start-2 mt-[16vh]">
                <h1 className="uppercase indent-[2ch] w-[14ch] text-9xl text-inverted-soft-black relative z-10 mix-blend-difference">
                    a front end developer who loves design
                </h1></div>

            <div id="profileImage" className="rounded-[48px] overflow-hidden absolute top-[36vh] right-0 col-start-6 w-[64vw] col-span-6 z-0">
                <img src="https://www.juulvrasdonk.nl/_next/image?url=%2Fimages%2Fprofile.webp&w=1200&q=75" alt=""
                    className="w-full h-full object-cover"
                />
            </div>
        </>
    )
}

export default Introduction;
