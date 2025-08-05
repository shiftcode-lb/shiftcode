import {React, useEffect} from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamCard = ({name, position, description, socialLinks, image, email}) => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false, // animate every time element enters the viewport
        });
      }, []);
      const socialIcons = {
  instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm7.5.25a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-3.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" /></svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14C2.2 0 1 .9 1 2v20c0 1.1 1.2 2 2 2h14c.8 0 2-.9 2-2V2c0-1.1-1.2-2-2-2zm-11 19H5V9h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7S5 4.3 6 4.3s1.7.8 1.7 1.7S7 7.7 6 7.7zM19 19h-3v-5.5c0-1.2-.8-1.8-1.5-1.8s-1.5.7-1.5 1.8V19h-3V9h3v1.4c.4-.6 1.2-1.4 2.5-1.4 1.9 0 3.5 1.4 3.5 4V19z" /></svg>
  ),
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.865 8.32 6.839 9.672.5.093.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.37-1.347-3.37-1.347-.454-1.17-1.11-1.48-1.11-1.48-.908-.63.069-.617.069-.617 1.003.07 1.531 1.045 1.531 1.045.892 1.544 2.341 1.096 2.91.837.092-.662.35-1.105.636-1.355-2.22-.26-4.555-1.14-4.555-5.07 0-1.12.39-2.04 1.03-2.76-.104-.26-.447-1.305.097-2.72 0 0 .84-.28 2.75 1.066A9.582 9.582 0 0112 6.838c.85.005 1.705.12 2.504.35 1.909-1.346 2.747-1.066 2.747-1.066.546 1.415.202 2.46.1 2.72.64.72 1.028 1.64 1.028 2.76 0 3.94-2.339 4.805-4.566 5.06.359.312.678.927.678 1.873 0 1.35-.012 2.44-.012 2.77 0 .27.18.58.688.48C19.137 20.57 22 16.75 22 12.26 22 6.58 17.52 2 12 2z" clipRule="evenodd" /></svg>
  )
};
 return (
    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer bg-coprimary
    rounded-xl hover:border-transparent group hover:bg-primary dark:border-gray-700 dark:hover:border-transparent" data-aos="fade-up" data-aos-delay="300">
      <img
        className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
        src={image}
        alt={`${name} picture`}
      />

      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
        {name}
      </h1>

      <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
        {position}
      </p>

      <div className="flex mt-3 -mx-2">
        {socialLinks &&
          Object.entries(socialLinks).map(([platform, url]) =>
            socialIcons[platform] ? (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
                className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
              >
                {socialIcons[platform]}
              </a>
            ) : null
          )}
      </div>
    </div>
  );
};

export default TeamCard
