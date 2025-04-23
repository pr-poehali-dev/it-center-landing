import { useEffect, useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  threshold?: number; // Порог видимости (от 0 до 1)
  className?: string;
  delay?: number; // Задержка анимации в мс
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  threshold = 0.1,
  className = "",
  delay = 0
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    
    const element = elementRef.current;
    
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, delay]);
  
  return (
    <div 
      ref={elementRef} 
      className={`animate-on-scroll ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
