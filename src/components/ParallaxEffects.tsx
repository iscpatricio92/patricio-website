import { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down';
}

export const ParallaxLayer = ({ children, speed = 0.5, className, direction = 'up' }: ParallaxLayerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      const multiplier = direction === 'up' ? -1 : 1;
      setOffset(scrolled * speed * multiplier);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div
      ref={ref}
      className={cn('will-change-transform', className)}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
};

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgClassName?: string;
}

export const ParallaxSection = ({ children, className, id, bgClassName }: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={cn('relative overflow-hidden', className)}
    >
      {/* Parallax background gradient */}
      <div 
        className={cn('absolute inset-0 transition-opacity duration-300', bgClassName)}
        style={{ 
          opacity: 0.5 + scrollProgress * 0.5,
          transform: `scale(${1 + scrollProgress * 0.05})`
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

interface MouseParallaxProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
}

export const MouseParallax = ({ children, intensity = 20, className }: MouseParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      setPosition({ x: x * intensity, y: y * intensity });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return (
    <div
      ref={ref}
      className={cn('will-change-transform transition-transform duration-200 ease-out', className)}
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      {children}
    </div>
  );
};
