import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const Background = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let connections = [];

        // Configuration based on theme
        const isDark = theme === 'dark';
        const particleColor = isDark ? 'rgba(0, 243, 255, 0.5)' : 'rgba(15, 23, 42, 0.3)'; // Neon Blue vs Slate
        const lineColor = isDark ? 'rgba(188, 19, 254, 0.15)' : 'rgba(59, 130, 246, 0.15)'; // Neon Purple vs Blue
        const bgColor = isDark ? '#030014' : '#F8FAFC'; // Deep space vs Slate-50

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100); // Responsive count

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                });
            }
        };

        const draw = () => {
            // Fill background
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();
            });

            // Draw connections
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        // Fade out line based on distance
                        ctx.globalAlpha = 1 - (distance / 150);
                        ctx.stroke();
                        ctx.globalAlpha = 1; // Reset alpha
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]); // Re-run when theme changes

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] transition-colors duration-500"
        />
    );
};

export default Background;
