import React from 'react'
import Title from './Title'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div className='flex flex-col justify-center items-center
    w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl'>
        <Title
        title="Our Professional Team"
        subtitle="Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo ligula eget dolorenean massa."
        />
        <div className='grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 mt-10'>
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
    </div>
  )
}

export default Team
