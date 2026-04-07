import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Impulsamos tu Negocio con Desarrollo Web y Automatización IA en Valencia
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90 animate-fade-in-delay">
          Transformamos tus ideas en soluciones digitales eficientes y escalables, optimizando procesos con la inteligencia artificial más avanzada.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-accent hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg 
                     text-lg transition duration-300 ease-in-out transform hover:scale-105 animate-bounce-in-delay"
        >
          Solicita tu Consultoría Gratuita
        </a>
      </div>
    </section>
  );
};

export default Hero;
