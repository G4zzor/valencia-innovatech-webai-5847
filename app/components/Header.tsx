import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-secondary transition-colors duration-300">
          Innovatech Valencia
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#servicios" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                Servicios
              </a>
            </li>
            <li>
              <a href="#sobre-nosotros" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
