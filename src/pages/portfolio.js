import Navbar from "../components/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { projectsList } from "../core/constants/projects";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css'


function Portfolio() {
    gsap.registerPlugin(TextPlugin);

    useGSAP(() => {
        gsap.to(".headline", {
            delay: 1,
            duration: 4,
            text: "I have worked on variety of web projects including:"
        })
        gsap.from(".projects-list", {
            opacity: 0,
            delay: 1.5
        })
    })


  return (
    <div className="bg-soft-black pt-36 pb-20">
      <header className=" text-inverted-soft-black">
          <Navbar title="My Portfolio" />
      </header>
        <main className="px-5 md:px-10">
            <div className="headline text-2xl md:text-3xl mix-blend-difference text-inverted-soft-black h-20 md:h-[36px]"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-14 projects-list">
                {projectsList.map((project, index) => {
                    return <ProjectCard project={project} key={index} />
                })}
            </div>
        </main>
    </div>
  );
}

function ProjectCard({ project }) {
    return (
        <div className="relative flex flex-col rounded-xl group overflow-hidden cursor-pointer">
            <div className="h-56">
                <img src={project.image} alt="Image" className="w-full h-full object-cover" />
            </div>
            <div>
                <div
                    className="max-lg:hidden rounded-full w-20 h-20 absolute -top-8 -right-8 bg-soft-black/70 group-hover:scale-[22] transition duration-500">
                </div>
                <div className="rounded-full w-20 h-20 absolute -top-8 -right-8 max-lg:bg-soft-black/70">
                    <svg className="absolute bottom-4 left-4" xmlns="http://www.w3.org/2000/svg" width="24px"
                         height="24px" viewBox="0 0 24 24" role="img" aria-labelledby="arrowRightTopIconTitle"
                         stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
                         color="#fff"><title id="arrowRightTopIconTitle">Arrow Right Top</title>
                        <path d="M19 13V5h-8"/>
                        <path strokeLinecap="round" d="M19 5l-1 1"/>
                        <path d="M18 6L5 19"/>
                    </svg>
                </div>
            </div>

            {/* Details on Desktop */}
            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 p-4 text-white opacity-0 group-hover:opacity-100 transition delay-200">
                <h2 className="text-4xl font-semibold">{project.title}</h2>
                <p className="text-sm mt-0.5 mb-4">{project.category}</p>
                {Boolean(project.techStack.length) && <div className="flex items-center gap-2 text-sm">
                    <p>Stack:</p>
                    {project.techStack.map((tech, index) => {
                        return (
                            <Tippy key={index} content={tech.title} animation="shift-away">
                                <div className="bg-soft-black px-2.5 py-1 rounded-2xl flex justify-center">
                                    <img src={tech.logo} alt="logo" className="size-5 object-contain" />
                                </div>
                            </Tippy>
                        )
                    })}
                </div>}
            </div>

            {/* Details on Mobile & Tablet */}
            <div className="block lg:hidden p-4 bg-inverted-soft-black flex-1">
                <h2 className="text-2xl md:text-4xl font-semibold">{project.title}</h2>
                <p className="text-sm md:text-base mt-0.5 mb-2">{project.category}</p>
                {Boolean(project.techStack.length) && <div className="flex items-center gap-2 text-sm">
                    <p>Stack:</p>
                    {project.techStack.map((tech, index) => {
                        return (
                            <Tippy key={index} content={tech.title} animation="shift-away">
                                <div className="bg-soft-black px-2.5 py-0.5 md:py-1 rounded-2xl flex justify-center">
                                    <img src={tech.logo} alt="logo" className="size-3 md:size-5 object-contain" />
                                </div>
                            </Tippy>
                        )
                    })}
                </div>}
            </div>
        </div>
    )
}

export default Portfolio;
