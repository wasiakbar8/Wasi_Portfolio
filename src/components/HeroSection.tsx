import React from 'react';
import { FadeIn, Magnet, ContactButton } from './UIComponents';
import photoPortrait from '../assets/photo.jpeg';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-between overflow-x-clip relative bg-[#0C0C0C]">
      {/* Background Image Layer with subtle 15% opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={photoPortrait}
          alt="Background Portrait"
          className="w-full h-full object-cover object-top opacity-15 filter blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/85 via-[#0C0C0C]/50 to-[#0C0C0C]" />
      </div>

      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full">
          {['About', 'Services', 'Projects', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 drop-shadow"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="w-full overflow-hidden flex justify-center items-center flex-1 z-20">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[10vw] sm:text-[11.5vw] md:text-[12.5vw] lg:text-[13.5vw] mt-6 sm:mt-4 md:-mt-5 select-none drop-shadow-2xl">
            Hi, i&apos;m Wasi
          </h1>
        </FadeIn>
      </div>

      {/* Hero Floating Portrait (Centered Magnet) - Reduced Opacity to 0.65 / 65% for a softer aesthetic */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[240px] sm:w-[320px] md:w-[380px] lg:w-[440px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none sm:pointer-events-auto"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full flex justify-center items-end"
        >
          <img
            src={photoPortrait}
            alt="Syed Wasi Akbar Portrait"
            className="w-full h-[320px] sm:h-[400px] md:h-[480px] object-cover object-top rounded-t-[100px] sm:rounded-t-[140px] border-4 border-[#BBCCD7]/20 shadow-2xl pointer-events-auto drop-shadow-2xl opacity-65 hover:opacity-100 transition-opacity duration-300"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 w-full z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[300px] drop-shadow-md"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.35rem)' }}
          >
            Frontend &amp; React Native Engineer crafting high-performance digital apps
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};
