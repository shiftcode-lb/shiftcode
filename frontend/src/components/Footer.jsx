import React from "react";
import { assets } from "../assets/assets";

const contactBoxes = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/shiftcodelb/",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.371 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.114 20.452H3.558V9h3.556v11.452z" />
      </svg>
    ),
  },

  {
    label: "Instagram",
    href: "https://www.instagram.com/shiftcode_/",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },

  {
    label: "Email Us",
    href: "mailto:shiftcode.lb@gmail.com",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M4 7l8 6 8-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    span: true,
  },
];

const Footer = () => {
  return (
    <footer
      className="relative flex flex-col items-center justify-center w-full pt-24 pb-12 bg-background border-t border-borderColor overflow-hidden mt-5 md:mt-20"
      id="contact-us"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(47,214,108,0.10),transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 section-x w-full">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start lg:items-center justify-between pb-16">
          
          {/* Left */}
          <div data-aos="fade-up" className="lg:w-1/2">
            <span className="font-mono-code text-primary text-sm tracking-[3px] uppercase">
              Get in touch
            </span>

            <h3 className="text-text text-4xl md:text-6xl font-bold max-w-lg mt-4 leading-[1.1]">
              Let's build the next version of your product.
            </h3>

            <p className="text-muted text-base md:text-lg max-w-md mt-5">
              Tell us about the project — web platform, product interface, or a
              security review — and we'll reply within one business day.
            </p>

            <a
              href="mailto:shiftcode.lb@gmail.com"
              className="inline-flex items-center gap-2 text-text text-xl md:text-2xl font-bold mt-8 border-b-2 border-borderColor pb-1 hover:text-primary hover:border-primary transition-colors duration-300"
            >
              shiftcode.lb@gmail.com

              <svg
                width="18"
                height="18"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 11L11 3M11 3H5M11 3v6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Contact cards */}
          <div
            className="grid grid-cols-2 gap-5 w-full lg:w-1/2 lg:max-w-lg"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {contactBoxes.map((box) => (
              <a
                key={box.label}
                href={box.href}
                target={box.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  box.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className={`
                  border
                  border-borderColor
                  rounded-2xl
                  p-8
                  hover:border-primary
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  group
                  ${box.span ? "col-span-2" : ""}
                `}
              >
                <span
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-coprimary
                    flex
                    items-center
                    justify-center
                    text-primary
                    group-hover:bg-primary
                    group-hover:text-background
                    transition-colors
                    duration-300
                    mb-10
                  "
                >
                  {box.icon}
                </span>

                <span className="block text-text text-xl font-medium">
                  {box.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="section-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono-code text-lg font-bold text-text">
            <img
              src={assets.logo}
              alt="ShiftCode"
              className="h-7 logo-green"
            />
          </div>

          <p className="text-center text-muted text-base">
            © 2025 ShiftCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;