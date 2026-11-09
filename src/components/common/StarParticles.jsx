import React, { useEffect, useRef } from 'react';

export default function StarParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create 45 ambient subtle stars
    const starsCount = Math.min(Math.floor(width / 30), 45);
    const stars = Array.from({ length: starsCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.7 + 0.3,
      alphaChange: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      speedY: Math.random() * 0.15 + 0.05,
      color: Math.random() > 0.4 ? '#F59E0B' : '#38BDF8'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Animate twinkle
        star.alpha += star.alphaChange;
        if (star.alpha > 0.85 || star.alpha < 0.2) {
          star.alphaChange = -star.alphaChange;
        }

        // Float upwards slowly
        star.y -= star.speedY;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha * 0.6;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}

