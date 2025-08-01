import React from 'react'
import Title from './Title'
import Card from './Card'
import { useEffect, useState } from 'react';
import { fetchServices } from '../services/servicesServices';


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() =>{
    const loadData = async ()=>{
      const data = await fetchServices();
      console.log("Fetched services:", data);
      setServices(data.services);
    };
    loadData();
  },[]);
  

  return (
    <div className='flex flex-col justify-center items-center  w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl'>
      <div>
        <Title 
        title="Services"
        subtitle="Here are the services that we offer at ShifCode."
        />
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center mt-10 gap-6 w-full flex-wrap'>
        {services.map((service, index) => (
          <Card key={index}
        cardTitle={service.name}
        cardText={service.description}
        cardImage={service.image}
        />
        ))}
      </div>
    </div>
  )
}

export default Services
