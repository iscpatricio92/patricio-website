import { ReactNode, useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  speed?: number;
  className?: string;
  overlay?: boolean;
  id?: string;
}

const ParallaxSection = ({
  children,
  backgroundImage,
  speed = 0.3,
  className = '',
  overlay = true,
  id,
}: ParallaxSectionProps) => {
  const offset = useParallax(speed);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative min-h-screen overflow-hidden ${className}`}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${offset}px)`,
            willChange: 'transform',
          }}
        />
      )}
      {overlay && (
        <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm" />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default ParallaxSection;
