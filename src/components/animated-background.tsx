'use client';

import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Spark colors from the cosmic image palette
    const sparkColors = [
      '#FFD700', // Gold
      '#FFA500', // Orange
      '#FF8C00', // Dark orange
      '#FF6347', // Tomato
      '#4169E1', // Royal blue
      '#1E90FF', // Dodger blue
      '#00CED1', // Dark turquoise
      '#FFB347', // Peach
    ];

    // Particle system for cosmic sparks
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      pulseSpeed: number;
      twinkle: number;
    }> = [];

    // Initialize particles - more particles but smaller
    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5, // Smaller sparks (0.5-2px)
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.9 + 0.1,
        color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
        pulseSpeed: Math.random() * 0.03 + 0.01,
        twinkle: Math.random() * Math.PI * 2,
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines with warmer colors
      ctx.strokeStyle = 'rgba(255, 165, 0, 0.05)'; // Orange grid
      ctx.lineWidth = 1;
      
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        const alpha = 1 - (x / canvas.width) * 0.8;
        ctx.strokeStyle = `rgba(255, 165, 0, ${alpha * 0.05})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        const alpha = 1 - (y / canvas.height) * 0.8;
        ctx.strokeStyle = `rgba(255, 165, 0, ${alpha * 0.05})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Animate cosmic sparks
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.twinkle += particle.pulseSpeed;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Twinkling effect for spark-like behavior
        const twinkleOpacity = particle.opacity + Math.sin(particle.twinkle) * 0.4;
        const finalOpacity = Math.max(0.1, Math.min(1, twinkleOpacity));

        // Draw spark with intense glow
        const glowSize = particle.size * 4;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        );

        // Convert hex to rgba for gradient
        const hexToRgba = (hex: string, alpha: number) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };

        gradient.addColorStop(0, hexToRgba(particle.color, finalOpacity));
        gradient.addColorStop(0.3, hexToRgba(particle.color, finalOpacity * 0.6));
        gradient.addColorStop(1, hexToRgba(particle.color, 0));

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw bright core spark
        ctx.fillStyle = hexToRgba(particle.color, finalOpacity);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add cross-shaped sparkle for brighter particles
        if (finalOpacity > 0.7) {
          ctx.strokeStyle = hexToRgba(particle.color, finalOpacity * 0.8);
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          // Horizontal line
          ctx.moveTo(particle.x - particle.size * 2, particle.y);
          ctx.lineTo(particle.x + particle.size * 2, particle.y);
          // Vertical line
          ctx.moveTo(particle.x, particle.y - particle.size * 2);
          ctx.lineTo(particle.x, particle.y + particle.size * 2);
          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1520 30%, #2a1810 60%, #16213e 100%)' }}
    />
  );
};

export default AnimatedBackground; 