import * as React from "react";

export default function ParticleBackground() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let points = [];
    let frame = null;
    let lastTime = null;

    function draw() {
      context.clearRect(0, 0, width, height);
      const reach = width < 620 ? 140 : 185;
      for (let i = 0; i < points.length; i += 1) {
        const point = points[i];
        for (let j = i + 1; j < points.length; j += 1) {
          const neighbor = points[j];
          const distance = Math.hypot(point.x - neighbor.x, point.y - neighbor.y);
          if (distance >= reach) continue;
          context.strokeStyle = `rgba(121, 64, 173, ${0.16 * (1 - distance / reach)})`;
          context.lineWidth = 0.8;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(neighbor.x, neighbor.y);
          context.stroke();
        }
        context.fillStyle = "rgba(121, 64, 173, 0.28)";
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fill();
      }
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      const count = Math.min(width < 620 ? 18 : 42, Math.max(12, Math.round(width * height / 26000)));
      points = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 3 + Math.random() * 4;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.3 + Math.random() * 0.8,
        };
      });
      draw();
    }

    function animate(time) {
      // Limit drawing to 30 fps and avoid jumps after an inactive tab.
      if (lastTime === null) lastTime = time;
      const elapsed = time - lastTime;
      if (elapsed >= 1000 / 30) {
        const delta = Math.min(elapsed / 1000, 0.08);
        lastTime = time;
        for (const point of points) {
          point.x += point.vx * delta;
          point.y += point.vy * delta;
          if (point.x < 0 || point.x > width) {
            point.vx *= -1;
            point.x = Math.max(0, Math.min(width, point.x));
          }
          if (point.y < 0 || point.y > height) {
            point.vy *= -1;
            point.y = Math.max(0, Math.min(height, point.y));
          }
        }
        draw();
      }
      frame = window.requestAnimationFrame(animate);
    }

    function syncAnimation() {
      window.cancelAnimationFrame(frame);
      frame = null;
      lastTime = null;
      draw();
      if (!reducedMotion.matches && !document.hidden) {
        frame = window.requestAnimationFrame(animate);
      }
    }

    resize();
    syncAnimation();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", syncAnimation);
    reducedMotion.addEventListener("change", syncAnimation);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", syncAnimation);
      reducedMotion.removeEventListener("change", syncAnimation);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" aria-hidden="true" />;
}
