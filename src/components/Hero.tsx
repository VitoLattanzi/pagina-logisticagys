import BackgroundCarousel from "./BackgroundCarousel.tsx";


interface HeroProps {
  images: string[];
  title?: string;
  subtitle?: string;
  intervalMs?: number;
}

export function Hero({
    images,
    intervalMs = 6000,
    title = "LOGISTICA MARTINEZ",
    subtitle = "Movemos tu carga, movemos tu negocio.",
  }: HeroProps) {
    return (
      <section id="inicio" className="hero">
        {/* Fondo con carrusel */}
        <BackgroundCarousel images={images} intervalMs={intervalMs} />

        {/* Contenido */}
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>
        </div>
      </section>
    );
  }
