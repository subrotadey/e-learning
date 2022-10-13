import React from 'react';
import slider1 from '../../assets/images/slider1.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={slider1} class="max-w-sm rounded-lg shadow-2xl" alt='' />
            <div>
              <h1 class="text-5xl font-bold">Box Office News!</h1>
              <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-accent to primary ">Get Started</button>
            </div>
          </div>
        </div>
    );
};

export default Banner;