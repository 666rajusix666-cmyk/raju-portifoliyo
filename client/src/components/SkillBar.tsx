import { useEffect, useState } from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

export default function SkillBar({ skill, percentage, delay = 0 }: SkillBarProps) {
  const [animate, setAnimate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className="space-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-mono text-foreground">{skill}</span>
        <span className={`text-sm font-bold transition-all duration-200 ${
          isHovered ? 'text-primary scale-110' : 'text-muted-foreground'
        }`}>
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out ${
            isHovered ? 'shadow-lg shadow-primary/20' : ''
          }`}
          style={{
            width: animate ? `${percentage}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );
}