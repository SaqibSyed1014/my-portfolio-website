import Navbar from "../components/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";


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

    const projects = [
        {
            title: 'Project 1',
            category: 'Ecommerce',
            image: 'https://cdn.dribbble.com/userupload/5052099/file/original-ef38f9c0d4592bfdf3dc0af1c2397e4c.png?resize=400x300&vertical=center',
            stack: []
        },
        {
            title: 'Project 2',
            category: 'Ecommerce',
            image: 'https://cdn.dribbble.com/userupload/3350329/file/original-0fa1629e3d9558eb3861f06620df8f04.png?resize=400x300&vertical=center',
            stack: []
        },
        {
            title: 'Project 3',
            category: 'Ecommerce',
            image: 'https://cdn.dribbble.com/userupload/5052099/file/original-ef38f9c0d4592bfdf3dc0af1c2397e4c.png?resize=400x300&vertical=center',
            stack: []
        },
        {
            title: 'Project 4',
            category: 'Ecommerce',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Ftags%2Fweb-application-design&psig=AOvVaw1Pq00Fw8bdAYPePSAOGmLT&ust=1726782920636000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOj_lee9zYgDFQAAAAAdAAAAABAE',
            stack: []
        }
    ]

  return (
    <div className="bg-soft-black pt-36">
      <header className=" text-inverted-soft-black">
          <Navbar title="My Portfolio" />
      </header>
        <main className="px-10">
            <div className="headline text-3xl mix-blend-difference text-inverted-soft-black h-[36px]"></div>

            <div className="grid grid-cols-3 gap-4 pt-14 projects-list">
                {projects.map((project, index) => {
                    return <ProjectCard project={project} key={index} />
                })}
            </div>
        </main>
    </div>
  );
}

function ProjectCard({ project }) {
    return (
        <div className="relative border border-soft-black rounded-xl group overflow-hidden">
            <div className="h-56">
                <img src={project.image} alt="Image" className="w-full h-full object-cover" />
            </div>
            <div className="">
                <div
                    className="rounded-full w-20 h-20 absolute -top-8 -right-8 bg-pink-800 group-hover:scale-[22] transition duration-300"></div>
                <div className="rounded-full w-20 h-20 absolute -top-8 -right-8 bg-pink-800 ">
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
            <div className="absolute p-4 hidden">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-base mb-1">{project.category}</p>
                <div className="text-sm">
                    <p>Stack:</p>
                </div>
            </div>

        </div>
    )
}

export default Portfolio;
