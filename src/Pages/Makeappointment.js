import React from 'react';
import doctor from '../assets/images/doctor.png';
import appointment from '../assets/images/appointment.png';
const Makeappointment = () => {
    return (
        <section className='mt-16' style={
            {
                background: `url(${appointment})`
            }
        }>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-40 hidden lg:block lg:w-1/2 rounded-lg " alt='' />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-4xl text-white font-bold">Make an Appointment today</h1>
                        <p className="py-6 text-white ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Makeappointment;