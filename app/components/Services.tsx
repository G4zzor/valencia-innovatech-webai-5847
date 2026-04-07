import React from 'react';

const servicesData = [
  {
    title: 'Desarrollo Web a Medida',
    description: 'Creamos plataformas web robustas y escalables, desde eCommerce hasta aplicaciones empresariales complejas, optimizadas para rendimiento, seguridad y experiencia de usuario. Tu visión, nuestra tecnología.'
  },
  {
    title: 'Automatización con Inteligencia Artificial',
    description: 'Implementamos soluciones de IA para optimizar procesos repetitivos, analizar grandes volúmenes de datos y reducir costes operativos, liberando el potencial estratégico de tu equipo. Eficiencia inteligente.'
  },
  {
    title: 'Consultoría y Estrategia Digital',
    description: 'Te guiamos en la definición de tu hoja de ruta digital. Identificamos oportunidades, diseñamos arquitecturas tecnológicas y elaboramos estrategias que aseguran tu crecimiento y competitividad en el mercado actual.'
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12">Nuestros Servicios Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
