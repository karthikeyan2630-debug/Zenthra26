import { useEffect, useRef } from "react";

export default function TechBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    // Mouse coordinates with smooth lerping
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    const updatePointer = (clientX, clientY) => {
      if (!mouse.active) {
        mouse.x = clientX;
        mouse.y = clientY;
      }
      mouse.targetX = clientX;
      mouse.targetY = clientY;
      mouse.active = true;
    };

    const handleMouseMove = (e) => {
      updatePointer(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("resize", resize);

    // Particle system
    let particles = [];
    const initParticles = () => {
      particles = [];
      const count = width < 768 ? 32 : 62;
      for (let i = 0; i < count; i++) {
        const type = Math.random();
        // Cyan, indigo, or bright sky blue
        let baseColor = "34, 211, 238"; // cyan
        if (type < 0.35) {
          baseColor = "129, 140, 248"; // indigo
        } else if (type < 0.55) {
          baseColor = "56, 189, 248"; // sky
        }

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1.4,
          baseColor,
          alpha: Math.random() * 0.4 + 0.5, // 0.5 to 0.9 for strong visibility
          pulseSpeed: Math.random() * 0.025 + 0.015,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    resize();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp mouse position
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;

        // Draw soft glowing neon cursor aura
        const auraRadius = width < 768 ? 190 : 270;
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          auraRadius
        );
        gradient.addColorStop(0, "rgba(34, 211, 238, 0.22)");
        gradient.addColorStop(0.35, "rgba(99, 102, 241, 0.12)");
        gradient.addColorStop(0.7, "rgba(34, 211, 238, 0.03)");
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, auraRadius, 0, Math.PI * 2);
        ctx.fill();

        // Small bright cursor center beacon
        ctx.fillStyle = "rgba(34, 211, 238, 0.85)";
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      const maxConnectDist = width < 768 ? 95 : 135;
      const maxCursorDist = width < 768 ? 140 : 210;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Motion
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < -15) p.x = width + 15;
        else if (p.x > width + 15) p.x = -15;
        if (p.y < -15) p.y = height + 15;
        else if (p.y > height + 15) p.y = -15;

        // Pulsing glow
        p.pulse += p.pulseSpeed;
        const currentAlpha = Math.min(
          1,
          Math.max(0.3, p.alpha + Math.sin(p.pulse) * 0.2)
        );

        // Interaction with cursor
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxCursorDist) {
            // Laser connection to cursor
            const lineAlpha = (1 - dist / maxCursorDist) * 0.6;
            ctx.strokeStyle = `rgba(34, 211, 238, ${lineAlpha})`;
            ctx.lineWidth = 1.1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();

            // Responsive physics: gentle repelling nudge to make it interactive
            const force = (1 - dist / maxCursorDist) * 0.8;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
          }
        }

        // Draw particle dot with glow
        ctx.fillStyle = `rgba(${p.baseColor}, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connective lines between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * 0.35;
            ctx.strokeStyle = `rgba(34, 211, 238, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="tech-bg-canvas"
      aria-hidden="true"
    />
  );
}
