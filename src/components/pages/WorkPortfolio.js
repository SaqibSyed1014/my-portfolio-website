import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import BaseButton from "../BaseButton";
import { projectsList } from "../../core/constants/projects";
import {useState} from "react";

const WorkPortfolio = () => {
    useGSAP(() => {
        gsap.from('.work-text', {
            scale: 1.5,
            scrollTrigger: {
                trigger: '.pinned',
                start: 'top bottom',
                end: 'top top',
                scrub: true,
            }
        })

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.portfolio-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                pin: true,
                pinSpacing: true
            }
        });
        tl2.to('.work-text', {
            filter:  'blur(12px)',
            opacity: .4,
            duration: 6
        });
        tl2.to('.developer-name', { color: '#d6d6d6', duration: 2 }, '<')
        gsap.utils.toArray(".project-info").forEach((project, index) => {
            tl2.fromTo(`.project-info-${index+1}`, {
                translateY: '70vh',
                translateZ: '25vw',
                rotateX: '90deg',
                scaleY: 1,
                transformStyle: 'preserve-3d',
                filter: 'blur(5px)'
            }, {
                translateY: '0vh',
                translateZ: '0vw',
                rotateX: '0deg',
                scale: 1,
                filter: 'blur(0px)',
                duration: 15
            }, '<')
            tl2.fromTo(`.detail-row-${index+1}`, { translateY: 50 }, { translateY: 0, duration: 7 }, '<')
            tl2.to(`.line-${index+1}`, { width: 35, backgroundColor: '#fff', duration: 5 }, '<')
            tl2.fromTo(`.project-title-${index+1}`, { yPercent: 100 }, { yPercent: -100, duration: 10, delay: 2 })
            tl2.to(`.project-info-${index+1}`,{
                translateY: '-70vh',
                translateZ: '25vw',
                rotateX: '-90deg',
                scaleY: 1,
                transformStyle: 'preserve-3d',
                filter: 'blur(5px)',
                duration: 15
            })
            tl2.to(`.detail-row-${index+1}`, { translateY: -50, duration: 7 }, '<')
            tl2.to(`.indicator-line`, { width: 16, backgroundColor: '#6B7280', duration: 5 }, '<')
        })
    })

    function mouseMoving(event) {
        const hoveredProjectIndex = document.querySelector(`.show-flow-line`)?.id;
        if (!hoveredProjectIndex) return;
        const hoveredProject = document.getElementById(hoveredProjectIndex)
        const projectLinkBtn = document.querySelector('.project-link');
        const headingRect = hoveredProject.getBoundingClientRect();
        if (
            event.clientX >= headingRect.left &&
            event.clientX <= headingRect.right &&
            event.clientY >= headingRect.top &&
            event.clientY <= headingRect.bottom
        ) {
            projectLinkBtn.style.left = `${Math.round(event.clientX)-20}px`;
            projectLinkBtn.style.top = `${Math.round(event.clientY)-25}px`;
        }
    }

    function hoveredIn() {
        const projectCards = document.querySelectorAll('.project-info')
        projectCards.forEach((card, index) => {
            const transformVal = card.style.transform;
            const translateYMatch = transformVal.match(/translate3d\(0px, ([^ ,]+)vh, .*\)/);
            const translateY = parseFloat(translateYMatch[1]);
            if (translateY !== null && translateY > -30 && translateY < 30) {  //&& translateY > -15 && translateY < 15
                card.classList.add('show-flow-line');
                const projectLinkBtn = document.querySelector('.project-link');
                projectLinkBtn.classList.add('mouse-entered')
                projectLinkBtn.classList.remove('mouse-left');
                document.body.style.cursor = 'pointer';
            }

        })
    }

    function hoveredOut() {
        const projectCars = document.querySelectorAll('.project-info');
        const projectLinkBtns = document.querySelector('.project-link');
        projectCars.forEach(card => {
            card.classList.remove('show-flow-line');
            projectLinkBtns.classList.remove('mouse-entered');
            projectLinkBtns.classList.add('mouse-left');
            document.body.style.cursor = 'default';

        })
    }
  return (
      <section className="portfolio-section bg-soft-black max-sm:overflow-hidden">
          <div className="pinned h-screen flex justify-center items-center mix-blend-difference overflow-hidden absolute top-0 bottom-0 left-0 right-0 max-md:w-[85%] mx-auto">
              <h2 className="invisible absolute">Work</h2>
              <div className="work-text relative mix-blend-difference w-[720px]">
                  <svg fill="#d6d6d6" viewBox="0 0 747.7 184.56">
                      <path
                          d="M614.5 181.68V2.88h19.2v104.4l-4.32-2.16 90-102.24h24l-72.24 82.08.96-13.68 75.6 110.4h-23.04L663.7 93.6l-30 34.08v54h-19.2ZM460.75 181.68V2.88h61.44c11.68 0 21.92 2.32 30.72 6.96 8.8 4.48 15.6 10.88 20.4 19.2 4.96 8.16 7.44 17.68 7.44 28.56 0 12.64-3.36 23.44-10.08 32.4-6.56 8.96-15.52 15.28-26.88 18.96l41.76 72.72h-22.56l-43.68-77.04 12.96 7.44h-52.32v69.6h-19.2Zm19.2-87.6h43.2c7.68 0 14.4-1.44 20.16-4.32 5.76-3.04 10.24-7.28 13.44-12.72 3.2-5.6 4.8-12.16 4.8-19.68s-1.6-14-4.8-19.44-7.68-9.6-13.44-12.48c-5.76-3.04-12.48-4.56-20.16-4.56h-43.2v73.2ZM334.28 184.56c-12.48 0-24.16-2.24-35.04-6.72-10.72-4.64-20.16-11.04-28.32-19.2-8.16-8.32-14.56-18.08-19.2-29.28-4.64-11.36-6.96-23.76-6.96-37.2s2.32-25.76 6.96-36.96c4.64-11.36 11.04-21.12 19.2-29.28 8.16-8.32 17.6-14.72 28.32-19.2C310.12 2.24 321.8 0 334.28 0s24.08 2.32 34.8 6.96c10.88 4.48 20.4 10.88 28.56 19.2 8.16 8.16 14.56 17.84 19.2 29.04 4.64 11.2 6.96 23.52 6.96 36.96s-2.32 25.84-6.96 37.2c-4.64 11.2-11.04 20.96-19.2 29.28-8.16 8.16-17.68 14.56-28.56 19.2-10.72 4.48-22.32 6.72-34.8 6.72Zm0-18c10.4 0 19.84-1.92 28.32-5.76 8.64-3.84 16.08-9.2 22.32-16.08 6.24-6.88 11.04-14.8 14.4-23.76 3.52-8.96 5.28-18.56 5.28-28.8s-1.76-19.6-5.28-28.56c-3.36-8.96-8.16-16.88-14.4-23.76-6.24-6.88-13.68-12.24-22.32-16.08-8.48-3.84-17.92-5.76-28.32-5.76s-19.92 1.92-28.56 5.76c-8.48 3.84-15.84 9.2-22.08 16.08-6.24 6.88-11.12 14.8-14.64 23.76-3.36 8.96-5.04 18.48-5.04 28.56s1.68 19.84 5.04 28.8c3.52 8.96 8.4 16.88 14.64 23.76 6.24 6.88 13.68 12.24 22.32 16.08 8.64 3.84 18.08 5.76 28.32 5.76ZM51.36 181.68 0 2.88h19.44l44.4 160.08h-4.08l45.6-160.08h20.4l45.36 160.08h-4.32L211.44 2.88h19.44l-51.36 178.8h-20.4l-45.84-160.8h4.32l-45.84 160.8h-20.4Z"></path>
                  </svg>
              </div>
          </div>


          <div className="flex flex-col h-screen">
              {projectsList.map((project, index) => {
                  return (
                      <ProjectCardWith3DEffect
                          key={index}
                          project={project}
                          index={index+1}
                          mouseMovement={mouseMoving}
                          hoveredIn={() => hoveredIn()}
                          hoveredOut={() => hoveredOut()}
                      />
                  )
              })}
          </div>

          <div className="absolute top-0 right-0 bottom-0 w-[50px] flex flex-col justify-center items-end gap-2.5">
              {projectsList.map((_, index) => {
                  return <div key={index} className={`h-0.5 w-4 bg-gray-500 indicator-line line-${index+1}`}></div>
              })}
          </div>

          <div className="project-details-bar">
              {projectsList.map((project, index) => {
                  return (
                      <div key={index} className={`project-detail-row detail-row-${index+1}`}>
                          <p>{project.year}</p>
                          <p>{project.category}</p>
                      </div>
                  )
              })}
          </div>

          <a href="/" className="project-link mouse-left">
              <BaseButton type="button" label="Show Project" showDot={true} />
          </a>
      </section>
  )
}

function ProjectCardWith3DEffect({ project, index, mouseMovement, hoveredIn, hoveredOut }) {
    return <div className="card-3d-effect" onMouseEnter={hoveredIn} onMouseLeave={hoveredOut} onMouseMove={mouseMovement}>
        <div className={`project-info project-info-${index}`} id={index}>
            <div className="titled-card">
                <img src={project.image} alt="Project Image" />
            </div>
            <div className="project-title-wrap">
                <h3 className={`project-title project-title-${index}`}>{project.title}</h3>
            </div>
        </div>
    </div>
}

export default WorkPortfolio;
