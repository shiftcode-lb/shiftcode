import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const services = [
  {
    number: '01',
    name: 'Software Development',
    description:
      'We build modern, high-performance websites and web applications tailored to your business goals. From company websites to custom platforms, we deliver scalable solutions that are fast, secure, and easy to maintain.',
    tags: [
      'Business Websites',
      'E-Commerce',
      'Custom Web Apps',
      'Portfolios',
      'API Integration',
      'Database Design',
    ],
  },
  {
    number: '02',
    name: 'UI/UX Design',
    description:
      'We create intuitive and visually appealing user experiences that help businesses engage users and increase conversions. Every design is crafted with usability, accessibility, and your brand identity in mind.',
    tags: [
      'UI Design',
      'UX Research',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'Responsive Design',
      'Social Media Posts',
    ],
  },
  {
    number: '03',
    name: 'Cybersecurity',
    description:
      'We help businesses identify and mitigate security risks before they become costly problems. Our assessments focus on protecting websites, applications, APIs, and digital assets from modern threats.',
    tags: [
      'Penetration Testing',
      'Security Audits',
      'Vulnerability Assessment',
      'Web Security Testing',
      'API Security',
      'Security Consulting',
    ],
  },
  {
    number: '04',
    name: 'AI Solutions',
    description:
      'We develop AI-powered solutions that automate processes, enhance user experiences, and turn data into actionable insights. From intelligent assistants to custom machine learning integrations, we help businesses leverage the power of AI.',
    tags: [
      'AI Chatbots',
      'Machine Learning',
      'Computer Vision',
      'Generative AI',
      'AI Integration',
      'Automation',
    ],
  },
  {
    number: '05',
    name: 'Hosting & Maintenance',
    description:
      'We provide reliable hosting and ongoing technical support to keep your website secure, updated, and running at peak performance. Our team ensures your platform stays online and continues to evolve with your business.',
    tags: [
      'Cloud Hosting',
      'Website Maintenance',
      'Performance Monitoring',
      'Backups',
      'Security Updates',
      'Technical Support',
    ],
  },
  {
    number: '06',
    name: 'Digital Marketing',
    description:
      'We help businesses grow their online presence and reach their target audience through effective digital marketing strategies. From SEO to social media campaigns, we drive traffic and generate leads for your business.',
    tags: [
      'Search Engine Optimization',
      'Pay-Per-Click Advertising',
      'Social Media Marketing',
      'Content Creation',
      'Brand Strategy',
      'Reels & Video Content',
    ],
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleService = (index, isOpen) => {
    setOpenIndex(isOpen ? -1 : index);

    setTimeout(() => {
      AOS.refresh();
    }, 520);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    AOS.refresh();
  }, []);

  return (
    <section
      id="services"
      className="relative w-full section-x section-pt pb-24 md:pb-32 lg:pb-40"
    >
      <div className="flex w-full flex-col items-center">
        {/* Section heading */}
        <div className="w-full" data-aos="fade-up">
          <span className="font-mono-code text-primary text-sm tracking-[3px] uppercase">
            // services
          </span>

          <h2 className="text-text text-3xl md:text-5xl font-bold mt-3">
            Services
          </h2>
        </div>

        {/* Services list */}
        <div className="w-full mt-10">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const contentId = `service-content-${index}`;

            return (
              <div
                key={service.number}
                className="relative w-full border-t border-borderColor last:border-b"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <button
                  type="button"
                  onClick={() => toggleService(index, isOpen)}
                  className="w-full flex items-center gap-4 md:gap-6 py-7 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="font-mono-code text-sm text-muted w-8 shrink-0">
                    {service.number}
                  </span>

                  <span
                    className={`text-xl md:text-2xl font-semibold transition-colors duration-300 ${
                      isOpen
                        ? 'text-primary'
                        : 'text-text group-hover:text-primary'
                    }`}
                  >
                    {service.name}
                  </span>

                  <span
                    className={`ml-auto shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'rotate-45 text-primary'
                        : 'rotate-0 text-muted group-hover:text-primary'
                    }`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M9 3v12M3 9h12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Expandable content */}
                <div
                  id={contentId}
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 pl-0 md:pl-14 pr-2 flex flex-col md:flex-row md:items-center gap-5">
                      <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl md:flex-1">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 md:justify-end md:ml-auto md:max-w-sm">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3.5 py-1.5 rounded-full bg-primary text-background text-sm font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;