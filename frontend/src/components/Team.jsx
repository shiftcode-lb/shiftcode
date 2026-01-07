import React from 'react';
import Title from './Title';
import TeamCard from './TeamCard';
import { assets } from '../assets/assests';

const Team = () => {
  const team = [
    {
      name: "Mohammad Kassem",
      email: "mohammaddkassemm@gmail.com",
      position: "Co-Founder",
      image: assets.mhmd,
      socialLinks: {
        instagram: "https://www.instagram.com/mohamadkassemm",
        linkedin: "https://www.linkedin.com/in/mohammad-kassem-57a91524a",
        github: "https://github.com/mohamadkassemm"
      }
    },

    {
      name: "Ali Issa",
      email: "alyy.issa01@gmail.com",
      position: "Co-Founder",
      image: assets.ali,
      socialLinks: {
        instagram: "https://www.instagram.com/alyy.issa",
        linkedin: "https://www.linkedin.com/in/ali-issa-18034234b",
        github:"https://github.com/alyyissa"
        }
      },
      {
        name: "Batoul Issa",
        email: "batoulissa510@gmail.com",
        position: "Localization Specialist",
        image: assets.batol,
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/batoul-i-49699b283"
        }
      },
      {
        name: "Elham Zaiour",
        email: "elhamzaiour@gmail.com",
        position: "UI/UX Developer",
        image: assets.elham,
        socialLinks:{
          instagram: "https://www.instagram.com/elham.zaiour",
          linkedin: "https://www.linkedin.com/in/elham-zaiour-6296b5358/"
        }
      }
  ]
  return (
    <div className='relative flex flex-col justify-center items-center mb-10
      w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl'>
      
      <img
        src={assets.bg_imag1}
        alt=""
        className="absolute left-[-150px] top-1/2 -translate-y-1/2 w-[300px] opacity-20 pointer-events-none select-none"
      />

      <Title
        title="Our Professional Team"
        subtitle="Meet the dedicated experts committed to delivering quality and innovation for every project."
      />

      <div className='grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 mt-10 w-full'>
        {team.map((teamMember, index) => (
          <TeamCard
            key={index}
            name={teamMember.name}
            email={teamMember.email}
            position={teamMember.position}
            image={teamMember.image}
            socialLinks={teamMember.socialLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
