import React from 'react';
import { FadeIn, AnimatedText, ContactButton } from './UIComponents';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Decorative 3D images in corners */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none opacity-40 sm:opacity-80"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon icon"
          className="w-[100px] sm:w-[150px] md:w-[190px] object-contain drop-shadow-xl"
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none opacity-40 sm:opacity-80"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D object"
          className="w-[90px] sm:w-[130px] md:w-[160px] object-contain drop-shadow-xl"
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none opacity-40 sm:opacity-80"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego icon"
          className="w-[100px] sm:w-[150px] md:w-[190px] object-contain drop-shadow-xl"
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none opacity-40 sm:opacity-80"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D group"
          className="w-[110px] sm:w-[160px] md:w-[200px] object-contain drop-shadow-xl"
        />
      </FadeIn>

      {/* Content Container */}
      <div className="flex flex-col items-center z-20 max-w-5xl w-full text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Animated Paragraph cleanly focused on personal & technical vision without UAF cards or agency references */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <AnimatedText
            text="I'm Syed Wasi Akbar — a passionate Frontend & React Native Developer focused on building scalable, user-centric applications that bridge beautiful design with powerful engineering. With expertise in React, React Native, TypeScript, and AI integrations, I truly enjoy working on projects that aim to stand out and deliver exceptional digital experiences. Let's build something incredible together!"
            className="font-medium text-center leading-relaxed max-w-[840px] text-base sm:text-xl md:text-2xl"
          />
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};
