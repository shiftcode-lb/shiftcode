import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { assets } from '../assets/assets';

// How long each member stays on screen before auto-advancing to the
// next one. Change this single value to 3000 / 5000 / 10000 (ms) etc.
const AUTO_ADVANCE_MS = 5000;

const team = [
  {
    name: "Mohamad Kassem",
    position: "Co-Founder | Cybersecurity & Web Development",
    bio: "Cybersecurity researcher, penetration tester, and web developer focused on building secure, scalable applications and identifying vulnerabilities before they become threats.",
    photo: assets.mak,
    links: {
      Portfolio: "https://mohammadkassem.net",
      LinkedIn: "https://www.linkedin.com/in/mohammadd-kassemm",
    },
  },
  {
    name: "Ali Issa",
    position: "Co-Founder | UI/UX Designer",
    bio: "UI/UX designer focused on creating intuitive, visually engaging, and user-centered digital experiences that turn ideas into polished product interfaces.",
    photo: assets.ali,
    links: {
      Portfolio: "https://ali-issa.figma.site/",
      LinkedIn: "https://www.linkedin.com/in/ali-issa-18034234b",
    },
  },
  {
    name: "Roaa El-Mir",
    position: "Co-Founder | AI & Web Development",
    bio: "AI and web developer focused on building intelligent applications, integrating machine learning solutions, and developing modern, scalable web platforms.",
    photo: assets.roaa,
    links: {
      Portfolio: "https://roaaelmir.net",
      LinkedIn: "https://www.linkedin.com/in/roaa-elmir",
    },
  },
];

const PersonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="8"
      r="3.4"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const Team = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const member = team[index];

  // Different members have different-length bios/names, so switching
  // members changes the section's height. That leaves AOS's cached
  // scroll-trigger offsets stale — later scrolling can then fail to
  // re-reveal this section (or the one after it), leaving content stuck
  // invisible. Refreshing AOS once the swap settles fixes that.
  const changeMember = (newIndex) => {
    setAnimate(false);

    setTimeout(() => {
      setIndex(newIndex);
      setAnimate(true);

      setTimeout(() => {
        AOS.refresh();
      }, 60); // small buffer so the new content has rendered its real height
    }, 200);
  };

  // Restarts fully any time `index` changes — whether that change came
  // from this timer firing, or from the user clicking a selector dot /
  // prev / next. That guarantees every member gets the full duration
  // on screen before auto-advancing, instead of the old behavior where
  // manual clicks didn't reset the running interval.
  useEffect(() => {
    const interval = setInterval(() => {
      changeMember((index + 1) % team.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(interval);
  }, [index]);

  const prev = () => {
    const newIndex = (index - 1 + team.length) % team.length;
    changeMember(newIndex);
  };

  const next = () => {
    const newIndex = (index + 1) % team.length;
    changeMember(newIndex);
  };

  return (
    <section
      id="team"
      data-aos="fade-up"
      className="relative flex flex-col section-x section-pt mb-20 md:mb-28"
    >
      <span className="font-mono-code text-primary text-sm tracking-[3px] uppercase">
        // our team
      </span>

      {/* md: side-by-side so the name starts on the same line as the top
          of the image, instead of only pairing up at the lg breakpoint */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 mt-6 items-start">
        {/* Text + controls */}
        <div
          className={`w-full h-full md:w-1/2 order-2 md:order-1 transition-all duration-500 ease-out ${
            animate
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <h3 className="text-text text-3xl sm:text-4xl md:text-5xl font-bold break-words">
            {member.name}
          </h3>

          <span className="block text-primary text-base font-medium mt-2">
            {member.position}
          </span>

          <div className="h-px w-full max-w-xs bg-borderColor mt-4 mb-4" />

          <p className="text-muted text-base md:text-lg max-w-md leading-relaxed">
            {member.bio}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6">
            {Object.entries(member.links).map(([label, url]) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text text-base font-medium hover:text-primary transition-colors duration-300"
              >
                {label}

                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9l6-6M9 3H4M9 3v5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>

          {/* Selector + prev/next now live under this column only */}
          <div className="flex items-center justify-between flex-wrap gap-4 mt-10 pt-8 border-t border-borderColor">
            <div className="flex items-center gap-3">
              {team.map((teamMember, i) => (
                <button
                  key={teamMember.name}
                  type="button"
                  onClick={() => changeMember(i)}
                  aria-label={`Show ${teamMember.name}`}
                  className={`
                    w-10
                    h-10
                    rounded-full
                    flex
                    items-center
                    justify-center
                    border
                    transition-all
                    duration-300
                    cursor-pointer
                    ${
                      i === index
                        ? 'border-primary text-primary bg-primarySoft scale-110'
                        : 'border-borderColor text-muted hover:text-text hover:border-text/40'
                    }
                  `}
                >
                  <PersonIcon />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous team member"
                className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:text-light hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer hover:-translate-x-1"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 3L5 8l5 5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next team member"
                className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:text-light hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer hover:translate-x-1"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Image — no card background/border anymore, so the page's
            floating tech-symbol decoration shows through normally
            instead of being blocked by a solid box. */}
        <div
          className={`w-full md:w-1/2 order-1 md:order-2 transition-all duration-500 ease-out ${
            animate
              ? 'opacity-100 translate-x-0 scale-100'
              : 'opacity-0 translate-x-4 scale-[0.98]'
          }`}
        >
          <div className="aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] w-full flex items-end justify-center">
            {member.photo ? (
              <img
                src={member.photo}
                alt={`${member.name} - ${member.position}`}
                className="max-h-full max-w-full w-auto h-auto object-contain"
              />
            ) : (
              <div
                role="img"
                aria-label={`Photo of ${member.name}, ${member.position} at ShiftCode`}
                className="w-full h-full rounded-2xl border border-dashed border-borderColor flex items-center justify-center"
              >
                <span aria-hidden="true" className="text-muted text-sm font-mono-code">
                  team photo placeholder
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
