import React from 'react';
import Title from './Title';
import TeamCard from './TeamCard';
// ===== OLD FETCHING CODE (commented, kept for reference) =====
// import { useEffect, useState } from 'react';
// import { fetchTeam } from '../services/teamServices';
import { assets } from '../assets/assests';

const Team = () => {
  // ===== OLD STATE + FETCH HOOKS (commented, kept for reference) =====
  // const [team, setTeam] = useState([]);
  //
  // useEffect(() =>{
  //   const loadData = async ()=>{
  //     const data = await fetchTeam();
  //     setTeam(data.teamMembers);
  //   };
  //   loadData();
  // }, []);

  // ===== CURRENTLY USING STATIC DATA INSTEAD =====
  const team = [
    {
      "_id": { "$oid": "688a05750c5eee0842153d0a" },
      "name": "Mohammad Kassem",
      "email": "mohammaddkassemm@gmail.com",
      "position": "Co-Founder",
      "description": "Full Stack Developer and Penetration Tester",
      "image": `${assets.mhmd}`,
      "socialLinks": {
        "instagram": "https://www.instagram.com/mohamadkassemm",
        "linkedin": "https://www.linkedin.com/in/mohammad-kassem-57a91524a",
        "github": "https://github.com/mohamadkassemm"
      }
    },
    {
      "_id": { "$oid": "688a070e0c5eee0842153d0e" },
      "name": "Ali Issa",
      "email": "alyy.issa01@gmail.com",
      "position": "Co-Founder",
      "description": "Full Stack Developer and Product Manager",
      "image": `${assets.ali}`,
      "socialLinks": {
        "instagram": "https://www.instagram.com/alyy.issa",
        "linkedin": "https://www.linkedin.com/in/ali-issa-18034234b",
        "github": "https://github.com/alyyissa"
      }
    },
    {
      "_id": { "$oid": "688a0d9d8be3f9bebe27d833" },
      "name": "Batoul Issa",
      "email": "batoulissa510@gmail.com",
      "position": "Localization Specialist",
      "description": "Translating websites between English and Arabic",
      "image": `${assets.batol}`,
      "socialLinks": {
        "linkedin": "https://www.linkedin.com/in/batoul-i-49699b283"
      }
    },
    {
      "_id": { "$oid": "688a0ea88be3f9bebe27d835" },
      "name": "Elham Zaiour",
      "email": "elhamzaiour@gmail.com",
      "position": "UI/UX Developer",
      "description": "Design interfaces and brand identity.",
      "image": `${assets.elham}`,
      "socialLinks": {
        "instagram": "https://www.instagram.com/elham.zaiour",
        "linkedin": "https://www.linkedin.com/in/elham-zaiour-6296b5358/"
      }
    }
  ];

  // ===== LOCAL IMAGE MAPPINGS (currently unused, kept for reference) =====
  // const members = {
  //   "Ali Issa": assets.ali,
  //   "Mohammad Kassem": assets.mhmd,
  //   "Batoul Issa": assets.batol,
  //   "Elham Zaiour": assets.elham
  // };

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
