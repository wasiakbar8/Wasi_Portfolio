import React from 'react';
import { FadeIn } from './UIComponents';

const servicesData = [
  {
    number: '01',
    name: 'React Native & Mobile App Engineering',
    description:
      'Cross-platform iOS & Android mobile application development with Expo and React Native — single codebase, smooth 60fps animations, native API integrations, and offline support.',
  },
  {
    number: '02',
    name: 'Frontend Web Development & React.js',
    description:
      'Designing clean, fast, and conversion-focused websites and web dashboards using React, TypeScript, Tailwind CSS, and HTML5/CSS3 with pixel-perfect attention to detail.',
  },
  {
    number: '03',
    name: 'Gemini AI & Smart App Integrations',
    description:
      'Building intelligent application capabilities — such as AI waste classification (EcoLens), automated image recognition, recommendations, and LLM integrations.',
  },
  {
    number: '04',
    name: 'Firebase Architecture & REST APIs',
    description:
      'Full backend setup utilizing Firebase Authentication, Firestore real-time databases, Storage, and seamless RESTful API connections for dynamic data-driven applications.',
  },
  {
    number: '05',
    name: 'PixelCraft Studio — Web & Agency Solutions',
    description:
      'End-to-end digital agency services: business branding, portfolio website design, quote request automation, and enterprise web solutions for client growth.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 w-full"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={30} className="mb-16 sm:mb-20 md:mb-28 text-center">
          <h2
            className="font-black uppercase tracking-tight leading-none text-[#0C0C0C]"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col">
          {servicesData.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.1} y={30} className="w-full">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 gap-4 md:gap-8">
                {/* Left Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </div>

                {/* Right Name + Description Stack */}
                <div className="flex flex-col gap-2 max-w-2xl">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C]/60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
