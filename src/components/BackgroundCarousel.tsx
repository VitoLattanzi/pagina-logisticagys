import  { useEffect, useMemo, useRef, useState } from "react";

interface BackgroundCarouselProps {
  images: string[];
  /** Duración que cada imagen queda visible (ms). Default: 6000 */
  intervalMs?: number;
  /** Clase extra opcional para customizar desde afuera */
  className?: string;
}

export default function BackgroundCarousel({
  images,
  intervalMs = 6000,
  className = "",
}: BackgroundCarouselProps) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);

  // Respeta usuarios con motion reducido
  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // Precarga para evitar parpadeos
  useEffect(() => {
    images?.forEach((src) => {
      const i = new Image();
      i.src = src;
    });
  }, [images]);

  // Autoplay
  useEffect(() => {
    if (!images?.length || reducedMotion) return;
    const tick = () => setActive((i) => (i + 1) % images.length);
    timerRef.current = window.setInterval(tick, Math.max(2000, intervalMs));
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [images, intervalMs, reducedMotion]);

  // Pausa en hover (desktop)
  const onMouseEnter = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  const onMouseLeave = () => {
    if (!reducedMotion && images?.length && !timerRef.current) {
      timerRef.current = window.setInterval(
        () => setActive((i) => (i + 1) % images.length),
        Math.max(2000, intervalMs)
      );
    }
  };

  return (
    <div
      className={`bg-carousel ${className}`}
      aria-hidden
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className={`bg-carousel__slide${i === active ? " is-active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      {/* Capa para contraste del texto */}
      <div className="bg-carousel__overlay" />
    </div>
  );
}
