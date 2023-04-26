import React from 'react';
import clock from '../assets/icons/clock.svg';
import marker from '../assets/icons/marker.svg';
import phone from '../assets/icons/phone.svg';
import Card from '../Card';

const Cards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00am to 5.00pm everyday ',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Open 9.00am to 5.00pm everyday ',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00am to 5.00pm everyday ',
            icon: phone,
            bgClass: 'bg-primary'
        }
    ]


    return (
        <div className='grid mt-20 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <Card
                key={card.id}
                card={card}
                
                ></Card>)
            }

        </div>
    );
};

export default Cards;