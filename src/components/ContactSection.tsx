import React from 'react';
import { FadeIn, ContactButton } from './UIComponents';
import { Mail, Phone, MapPin, GraduationCap, Github, Linkedin, Instagram, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 relative z-30 w-full border-t border-[#D7E2EA]/10"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={30} className="text-center mb-16">
          <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-light">
            Get In Touch
          </span>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none mt-2"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Info */}
          <FadeIn delay={0.15} x={-40} y={0} className="flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl font-medium uppercase text-[#D7E2EA]">
              Let's Build Something Great
            </h3>
            <p className="text-[#D7E2EA]/70 font-light leading-relaxed max-w-md">
              I'm Syed Wasi Akbar. Whether you have a project in mind, need a mobile app, or responsive website, feel free to reach out!
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-[#18011F] border border-[#B600A8]/30 text-[#B600A8]">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase text-[#D7E2EA]/50 font-light">Email</div>
                  <a href="mailto:syedwasiakbar@gmail.com" className="text-[#D7E2EA] hover:underline font-medium">
                    syedwasiakbar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-[#18011F] border border-[#B600A8]/30 text-[#B600A8]">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase text-[#D7E2EA]/50 font-light">Phone</div>
                  <a href="tel:+923186444766" className="text-[#D7E2EA] hover:underline font-medium">
                    +92 318 6444766
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-[#18011F] border border-[#B600A8]/30 text-[#B600A8]">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase text-[#D7E2EA]/50 font-light">Location</div>
                  <div className="text-[#D7E2EA] font-medium">Okara, Punjab, Pakistan</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-[#18011F] border border-[#B600A8]/30 text-[#B600A8]">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase text-[#D7E2EA]/50 font-light">University</div>
                  <div className="text-[#D7E2EA] font-medium">UAF — BS Computer Science</div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="mt-2">
              <a
                href="https://wa.me/923186444766"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold uppercase tracking-wider px-8 py-3.5 rounded-full transition-transform duration-200 hover:scale-105 shadow-lg"
              >
                <MessageSquare size={20} />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://github.com/wasiakbar8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#D7E2EA]/20 hover:border-[#D7E2EA] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/syed-wasi-akbar-/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#D7E2EA]/20 hover:border-[#D7E2EA] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/__wasi_shah/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#D7E2EA]/20 hover:border-[#D7E2EA] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </FadeIn>

          {/* Right Form */}
          <FadeIn delay={0.25} x={40} y={0}>
            <form
              action="https://formsubmit.co/syedwasiakbar@gmail.com"
              method="POST"
              className="bg-[#121212] p-6 sm:p-8 rounded-3xl border border-[#D7E2EA]/15 flex flex-col gap-5"
            >
              <input type="hidden" name="_subject" value="New Contact from Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label className="block text-xs uppercase text-[#D7E2EA]/70 mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Syed Wasi Akbar"
                  className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#B600A8] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-[#D7E2EA]/70 mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="syedwasiakbar@gmail.com"
                  className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#B600A8] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-[#D7E2EA]/70 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                ></textarea>
              </div>

              <ContactButton label="Send Message" className="w-full text-center mt-2" />
            </form>
          </FadeIn>
        </div>

        {/* Footer info */}
        <div className="mt-20 pt-8 border-t border-[#D7E2EA]/10 text-center text-xs text-[#D7E2EA]/50 uppercase tracking-widest">
          © {new Date().getFullYear()} Syed Wasi Akbar — Frontend & Mobile Engineer. All rights reserved.
        </div>
      </div>
    </section>
  );
};
