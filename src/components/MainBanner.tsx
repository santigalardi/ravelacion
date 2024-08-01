import Image from 'next/image';

const MainBanner = () => (
  <section className="relative min-h-screen flex justify-center items-center bg-cover bg-center mb-20 overflow-hidden">
    <h1 className="sr-only">Ravela</h1>
    <h2 className="sr-only">Ravela - Próximos Eventos de Música Electrónica</h2>
    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
      <source src="/videos/textura-background.mp4" type="video/mp4" />
    </video>
    <div className="relative p-6 md:p-0 md:pb-16 z-10">
      <Image src="/wordmark-white.png" width={800} height={800} alt="Ravela Logo" priority />
    </div>
  </section>
);

export default MainBanner;
