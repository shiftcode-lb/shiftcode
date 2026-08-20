import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { assets } from '../assets/assets';

const projects = [
  {
    category: 'Web Development',
    title: 'Skincare by Zahraa',
    description:
      'Designed and developed a modern skincare business website focused on user experience, brand presentation, and customer engagement.',
    image: assets.project1_zahraa,
    url: 'https://skincarebyzahraa.onrender.com/',
  },
  {
    category: 'Web Development',
    title: 'Tafseer Compare',
    description:
      'Built a platform that allows users to compare Quranic tafseer sources through a clean interface designed for research and learning.',
    image: assets.project2_tafseer,
    url: 'https://tafsir-compare.vercel.app/',
  },
  {
    category: 'AI Solution',
    title: 'Nova AI Chatbot',
    description:
      'Developed an AI-powered chatbot capable of assisting users through intelligent conversations, automated responses, and personalized interactions.',
    image: assets.project3_nova,
    url: 'https://nova-ai-sales-assistant.vercel.app/',
  },
  {
    category: 'SEO Optimization',
    title: 'BostonDinio Coach',
    description:
      'Implemented SEO strategies, local optimization, and performance improvements to increase online visibility and search engine rankings.',
    image: assets.project4_boston,
    url: 'https://bostondiniocoach.com/',
  },
  {
    category: 'Web Development & SEO Optimization',
    title: 'Dedham Airport Taxi & Livery',
    description:
      'Designed and developed a modern, responsive website and implemented local SEO strategies to improve search visibility, performance, and customer reach.',
    image: assets.project5_dedham,
    url: 'https://dedhamairporttaxi.com/',
  },
];

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const gridCols = 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section
      className="flex flex-col justify-between items-center section-x section-pt"
      id="projects"
    >
      <div className="w-full" data-aos="fade-up">
        <span className="font-mono-code text-primary text-sm tracking-[3px] uppercase">
          // selected works
        </span>

        <h2 className="text-text text-3xl md:text-5xl font-bold mt-3">
          Projects
        </h2>
      </div>

      <div
        className={`w-full grid grid-cols-1 ${gridCols} gap-4 mt-10`}
      >
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} project`}
            className="
              block
              rounded-2xl
              overflow-hidden
              bg-light
              hover:-translate-y-2
              transition-transform
              duration-300
              group
              cursor-pointer
              w-full
              no-underline
            "
            data-aos="fade-up"
            data-aos-delay={i * 120}
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              {project.image ? (
                <div
                  role="img"
                  aria-label={`${project.title} — ${project.category} project by ShiftCode`}
                  className="
                    absolute
                    inset-0
                    bg-top
                    group-hover:bg-bottom
                    transition-[background-position]
                    duration-[4000ms]
                    ease-linear
                  "
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              ) : (
                <>
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-top
                      group-hover:bg-bottom
                      transition-[background-position]
                      duration-[4000ms]
                      ease-linear
                    "
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(45deg, #e4ede6 0 10px, #eef4ef 10px 20px)',
                      backgroundSize: '100% 260%',
                    }}
                  />

                  <span
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      text-lightMuted
                      text-xs
                      font-mono-code
                      pointer-events-none
                    "
                  >
                    Image placeholder
                  </span>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <span className="text-primaryDark text-xs font-semibold uppercase tracking-wide">
                {project.category}
              </span>

              <h3
                className="
                  text-background
                  text-lg
                  font-bold
                  mt-1
                  group-hover:text-primaryDark
                  transition-colors
                  duration-300
                "
              >
                {project.title}
              </h3>

              <p className="text-lightMuted text-sm leading-relaxed mt-2">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;