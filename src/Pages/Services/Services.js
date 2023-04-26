import React from 'react';
import fluoride from './fluoride.png';
import cavity from './cavity.png';
import whitening from './whitening.png';
import Service from './Service';


const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Floride Treatment',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: fluoride

        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: cavity

        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: whitening

        }
    ]
    return (
        <div className='grid mt-20 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                serviceData.map(service => <Service
                key={service.id}
                service = {service}
                
                ></Service>)
            }
        </div>
    );
};

export default Services;