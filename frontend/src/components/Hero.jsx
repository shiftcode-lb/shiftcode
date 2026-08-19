import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const marqueeItems = [
  {
    name: 'UI/UX Design',
    dotColor: 'bg-red-500',
  },
  {
    name: 'Software Development',
    dotColor: 'bg-blue-500',
  },
  {
    name: 'Cybersecurity',
    dotColor: 'bg-green-500',
  },
  {
    name: 'Business Marketing',
    dotColor: 'bg-yellow-500',
  },
  {
    name: 'AI Solutions',
    dotColor: 'bg-purple-500',
  },
  {
    name: 'Hosting & Maintenance',
    dotColor: 'bg-cyan-500',
  },
];

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    AOS.refresh();
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] flex flex-col items-center justify-center text-center section-x pt-20 pb-12 overflow-hidden"
    >
      {/* Small Heading */}
      <span
        className="font-mono-code text-muted text-sm md:text-base tracking-[4px] uppercase mb-6"
        data-aos="fade-up"
      >
        Modern Web Studio
      </span>

      {/* Main Heading */}
      <h1
        className="text-primary text-glow text-5xl md:text-7xl lg:text-[86px] font-extrabold leading-[1.05] max-w-5xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Welcome to ShiftCode
      </h1>

      {/* Description */}
      <p
        className="text-muted mt-7 max-w-2xl text-lg md:text-xl leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        We design, build, and support high-impact digital products for startups
        and established companies — from first sketch to long-term maintenance.
      </p>

      {/* Buttons */}
      <div
        className="mt-9 flex flex-wrap items-center justify-center gap-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <button
          type="button"
          onClick={() => scrollToSection('contact-us')}
          className="
            px-7
            py-3.5
            rounded-2xl
            text-md
            border
            bg-primary
            text-background
            font-semibold
            hover:bg-[#1b9e4b]
            hover:-translate-y-1
            transition-all
            duration-300
            cursor-pointer
          "
        >
          Start Project
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('projects')}
          className="
            px-7
            py-3.5
            text-md
            rounded-2xl
            border-1
            border-primary
            bg-coprimary/60
            text-primary
            font-semibold
            hover:bg-coprimary
            hover: text-primary
            hover:-translate-y-1
            transition-all
            duration-300
            cursor-pointer
          "
        >
          See Our Work
        </button>
      </div>

      {/* Marquee */}
      <div
        className="
          marquee-row
          relative
          w-full
          max-w-4xl
          mt-10
          overflow-hidden
          opacity-100
          visible
          [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]
        "
      >
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={`${item.name}-${index}`}
              className="
                flex
                items-center
                gap-3
                shrink-0
                px-6
                py-3
                mr-3
                rounded-full
                border
                border-borderColor
                bg-coprimary
                text-muted
                text-base
                font-mono-code
                whitespace-nowrap
              "
            >
              <span
                className={`w-2 h-2 rounded-full shrink-0 ${item.dotColor}`}
              />

              {item.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;