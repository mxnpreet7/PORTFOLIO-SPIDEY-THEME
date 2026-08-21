import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  isRed: boolean;
}

interface WebCanvasProps {
  spiderSenseActive?: boolean;
}

export const WebCanvas: React.FC<WebCanvasProps> = ({ spiderSenseActive = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean; clickRipple: number }>({
    x: -1000,
    y: -1000,
    active: false,
    clickRipple: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Particle pool
    const particleCount = Math.min(Math.floor((width * height) / 18000), 70);
    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const isRed = Math.random() < 0.25 || spiderSenseActive;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.5 + 0.8,
          baseRadius: Math.random() * 1.5 + 0.8,
          alpha: Math.random() * 0.4 + 0.15,
          isRed,
        });
      }
    };

    initParticles();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const handleClick = () => {
      mouseRef.current.clickRipple = 1.0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      // Handle ripple decay
      if (mouse.clickRipple > 0) {
        mouse.clickRipple -= 0.02;
        const rippleRadius = (1 - mouse.clickRipple) * 160;
        ctx.save();
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, rippleRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(226, 36, 36, ${mouse.clickRipple * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.restore();
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Interaction with mouse cursor (web thread attraction)
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;

          if (dist < maxDist) {
            const pullForce = (1 - dist / maxDist) * 0.08;
            p.x += dx * pullForce;
            p.y += dy * pullForce;

            // Draw direct web strand to mouse
            const lineAlpha = (1 - dist / maxDist) * (p.isRed || spiderSenseActive ? 0.45 : 0.22);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = p.isRed || spiderSenseActive 
              ? `rgba(226, 36, 36, ${lineAlpha})` 
              : `rgba(255, 255, 255, ${lineAlpha * 0.8})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isRed || spiderSenseActive 
          ? `rgba(226, 36, 36, ${p.alpha + 0.2})` 
          : `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles (Spider-Web geometric mesh)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const connectionLimit = 120;

          if (dist < connectionLimit) {
            const lineAlpha = (1 - dist / connectionLimit) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = (p.isRed && p2.isRed) || spiderSenseActive
              ? `rgba(226, 36, 36, ${lineAlpha * 1.6})`
              : `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [spiderSenseActive]);

  return (
    <canvas
      id="spider-web-canvas"
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
