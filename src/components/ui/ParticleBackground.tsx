import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];

    // ── Config ──
    const particleCount = 50;
    const minRadius = 3;
    const maxRadius = 8;
    const baseSpeed = 0.25;
    const maxSpeedNearMouse = 1.8;    // ← key: how fast near mouse
    const mouseInfluenceRadius = 180; // distance where mouse affects particles
    const lineDistance = 180;
    const lineOpacity = 0.06;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * (maxRadius - minRadius) + minRadius,
        color: 'rgba(100, 180, 255, 0.35)',
        vx: (Math.random() - 0.5) * baseSpeed,
        vy: (Math.random() - 0.5) * baseSpeed,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.001 + Math.random() * 0.002,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;

      particles.forEach((p) => {
        // Gentle pulsing
        p.radius = minRadius + (maxRadius - minRadius) / 2 + Math.sin(p.pulse) * 2;
        p.pulse += p.pulseSpeed;

        // Mouse influence
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseInfluenceRadius) {
            // Move faster near mouse (you can change to repulsion by *= -1)
            const force = (mouseInfluenceRadius - distance) / mouseInfluenceRadius;
            p.vx += (dx / distance) * force * (maxSpeedNearMouse - baseSpeed);
            p.vy += (dy / distance) * force * (maxSpeedNearMouse - baseSpeed);
          }
        }

        // Normal movement + bounce
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(100, 180, 255, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connections
        particles.forEach((p2) => {
          if (p === p2) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < lineDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(100, 180, 255, ${lineOpacity * (1 - distance / lineDistance)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30 dark:opacity-20"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleBackground;