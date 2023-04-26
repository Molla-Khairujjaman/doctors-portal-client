import React from 'react';
import Banner from './Banner';
import Cards from './Cards';
import Services from './Services/Services';
import Ourservices from './Ourservices';
import Information from './Information';
import Makeappointment from './Makeappointment';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';



const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Cards></Cards>
            <Ourservices></Ourservices>
            <Services></Services>
            <Information></Information>
            <Makeappointment></Makeappointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;