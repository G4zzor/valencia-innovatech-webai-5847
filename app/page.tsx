import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <section id="sobre-nosotros" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Sobre Innovatech Valencia</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Somos un equipo apasionado de ingenieros y desarrolladores con sede en Valencia, dedicados a construir el futuro digital de las empresas.
              Nuestra misión es potenciar tu crecimiento a través de la innovación tecnológica, el desarrollo web de vanguardia y la automatización inteligente con IA,
              manteniendo un compromiso inquebrantable con la calidad y la satisfacción del cliente.
              Creemos en soluciones que no solo funcionen, sino que transformen y aporten valor real a tu negocio.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}