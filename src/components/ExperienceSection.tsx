import React from 'react';
import { FadeIn } from './UIComponents';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Associate Software Engineer',
    company: 'Devisgon (Pvt) Ltd',
    period: '2025 — Present',
    location: 'Pakistan',
    description:
      'Working on professional software projects, contributing to production codebases, implementing modern frontend architecture, and applying real-world engineering practices.',
    skills: ['React', 'React Native', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    role: 'Freelance Mobile & Web Developer',
    company: 'Independent Client Work',
    period: '2024 — Present',
    location: 'Remote',
    description:
      'Developing custom cross-platform mobile apps and modern web interfaces. Specialized in API integration, state management, and UI performance optimization.',
    skills: ['React Native', 'Expo', 'Firebase', 'Gemini AI'],
  },
  {
    role: 'Frontend Web Developer',
    company: 'Logistics & Client Projects',
    period: '2023 — 2024',
    location: 'Remote',
    description:
      'Built and deployed responsive production websites for logistics and business sector clients using HTML5, CSS3, JavaScript, and custom styling systems.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 sm:py-32 relative z-30 w-full border-t border-[#D7E2EA]/10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={30} className="mb-16 sm:mb-20 text-center">
          <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-light">
            Career Pathway
          </span>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none mt-2"
            style={{ fontSize: 'clamp(3rem, 10vw, 130px)' }}
          >
            Experience
          </h2>
        </FadeIn>

        {/* Experience Timeline */}
        <div className="w-full flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <FadeIn key={exp.role + index} delay={index * 0.15} y={40} className="w-full">
              <div className="bg-[#121212] border border-[#D7E2EA]/15 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col gap-6 hover:border-[#BBCCD7]/40 transition-colors duration-300 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D7E2EA]/10 pb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#BBCCD7] bg-[#BBCCD7]/10 px-3 py-1 rounded-full border border-[#BBCCD7]/20">
                      {exp.company}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[#D7E2EA] mt-3">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#D7E2EA]/60">
                    <div className="flex items-center gap-1.5 bg-[#0C0C0C] px-3 py-1.5 rounded-xl border border-white/5">
                      <Calendar size={14} className="text-[#BBCCD7]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#0C0C0C] px-3 py-1.5 rounded-xl border border-white/5">
                      <MapPin size={14} className="text-[#BBCCD7]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#D7E2EA]/75 font-light leading-relaxed text-sm sm:text-base md:text-lg">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 bg-[#0C0C0C] px-3 py-1 rounded-lg border border-[#D7E2EA]/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
