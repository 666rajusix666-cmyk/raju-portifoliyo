import { useMouseGlow } from '@/hooks/useMouseGlow';

interface MouseGlowProps {
  className?: string;
}

export default function MouseGlow({ className = '' }: MouseGlowProps) {
  const { x, y } = useMouseGlow();

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 z-0 opacity-30 transition-all duration-300 ease-out ${className}`}
      style={{
        background: `radial-gradient(400px at ${x}px ${y}px, hsl(var(--primary)) 0%, transparent 70%)`,
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}