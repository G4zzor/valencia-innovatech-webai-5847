import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-dark text-white py-10">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <p className="text-lg mb-4">
          ¿Listo para transformar tu negocio? Hablemos.
        </p>
        <p className="text-sm text-gray-400 mb-2">
          Innovatech Valencia | info@innovatechvalencia.com | +34 960 123 456
        </p>
        <p className="text-xs text-gray-500">
          © 2024 Innovatech Valencia. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
