import React from 'react';
import appointment from '../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div className='p-10 ' style={
            {
                background: `url(${appointment})`
            }
        }>

            <div className='flex flex-col items-center'>
                <h3 className='text-1xl text-primary font-bold'>Contact Us</h3>
                <h1 className='text-2xl text-white'>Stay connected with us</h1>
            </div>

            <div className='flex flex-col items-center space-y-4 mt-6'
            >

                <input type="email" placeholder="Email Address" className="input input-bordered input-sm w-full max-w-xs" />

                <input type="text" placeholder="Subject" className="input input-bordered input-sm w-full max-w-xs" />

                <input type="text" placeholder="Your Message" className="input input-bordered input-lg w-full max-w-xs" />

                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Submit</button>
            </div>

        </div>



    );
};

export default ContactUs;