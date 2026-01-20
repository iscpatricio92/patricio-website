import { useRef, useState, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Hero3DCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glareEnabled?: boolean;
}

const Hero3DCard = ({ children, className, intensity = 15, glareEnabled = true }: Hero3DCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate rotation based on mouse position relative to center
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * intensity;
      const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * intensity;
      
      // Calculate glare position
      const glareX = ((e.clientX - rect.left) / rect.width) * 100;
      const glareY = ((e.clientY - rect.top) / rect.height) * 100;
      
      setTransform({ rotateX, rotateY });
      setGlarePosition({ x: glareX, y: glareY });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setTransform({ rotateX: 0, rotateY: 0 });
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity]);

  return (
    <div
      ref={cardRef}
      className={cn('relative', className)}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
        
        {/* Glare effect */}
        {glareEnabled && (
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden transition-opacity duration-300"
            style={{ opacity: isHovering ? 0.15 : 0 }}
          >
            <div
              className="absolute w-full h-full"
              style={{
                background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, hsl(var(--primary) / 0.8), transparent 60%)`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero3DCard;
