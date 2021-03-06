import React from 'react';
import Particles from 'react-tsparticles';

const Particle = () => {
  return (
    <div className='particle'>
      <Particles
        id='tsparticles'
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },

              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 3,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 1,
              },
            },
          },
          particles: {
            color: {
              value: 'random',
            },
            links: {
              color: '#ffffff',
              distance: 100,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};
export default Particle;
