import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './UIComponents';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  number: string;
  category: string;
  name: string;
  link: string;
  isGithub: boolean;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const projectsData: Project[] = [
  {
    number: '01',
    category: 'Web Application',
    name: 'Learning Management System (LMS)',
    link: 'https://github.com/wasiakbar8/college-lms',
    isGithub: true,
    col1Image1: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop',
    col1Image2: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
    col2Image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '02',
    category: 'Enterprise HR Web App',
    name: 'Employee Management System',
    link: 'https://github.com/wasiakbar8/employee_managment_system',
    isGithub: true,
    col1Image1: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
    col1Image2: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop',
    col2Image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '03',
    category: 'Production Client Platform',
    name: 'BlueRoute Logistics',
    link: 'https://blueroutelogistic.online/',
    isGithub: false,
    col1Image1: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    col1Image2: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop',
    col2Image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '04',
    category: 'Mobile Application',
    name: 'Enrollment Form Management System',
    link: 'https://github.com/wasiakbar8/Ug-form-System',
    isGithub: true,
    col1Image1: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop',
    col1Image2: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1000&auto=format&fit=crop',
    col2Image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '05',
    category: 'Mobile Application',
    name: 'Fitness Tracker App',
    link: 'https://github.com/wasiakbar8/Fitness_App',
    isGithub: true,
    col1Image1: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop',
    col1Image2: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1000&auto=format&fit=crop',
    col2Image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
  },
];

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-24">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Sticky Stacking Cards Container */}
      <div ref={containerRef} className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-16 pb-20">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={projectsData.length}
          />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh] w-full flex justify-center items-start"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl"
      >
        {/* Top Row */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase text-xs sm:text-sm tracking-widest font-light">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-base sm:text-xl md:text-2xl">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Button displaying 'VIEW' with GitHub/External icon */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors duration-200 flex items-center gap-2"
          >
            <span>VIEW</span>
            {project.isGithub ? <Github size={16} /> : <ExternalLink size={16} />}
          </a>
        </div>

        {/* Bottom Row: High Quality Image Grid matching each project topic */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 w-full h-full min-h-0 overflow-hidden">
          {/* Left Column (40% width) - 2 Stacked Images */}
          <div className="md:col-span-5 flex flex-col gap-4 h-full">
            <div className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[45px] flex-1">
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[45px]"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
            </div>
            <div className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[45px] flex-1">
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[45px]"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
          </div>

          {/* Right Column (60% width) - 1 Tall Image */}
          <div className="md:col-span-7 h-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px]">
            <img
              src={project.col2Image}
              alt={`${project.name} main showcase`}
              className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
