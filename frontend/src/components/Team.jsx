import React from 'react';
import Title from './Title';
import TeamCard from './TeamCard';
import { assets } from '../assets/assests';

const Team = () => {

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
            description={teamMember.description}
            image={teamMember.image}
            // NOTE: socialLinks already comes from API, 
            // members[teamMember.name] kept as reference for local assets
            socialLinks={teamMember.socialLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
