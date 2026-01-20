import { useScrollProgress } from '@/hooks/useParallax';

const ScrollIndicator = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-border">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollIndicator;
