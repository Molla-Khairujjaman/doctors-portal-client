import React from 'react';
import treatment from './treatment.png';

const Information = () => {
    return (
        <div >
            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col lg:flex-row space-x-20">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div >
                        <h1 className="text-5xl font-bold ">Exceptional Dental Care, on Your Terms</h1>
                        <p className="mt-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        <button className="btn btn-primary mt-6 text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;