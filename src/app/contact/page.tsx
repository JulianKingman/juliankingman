'use client';

import { useEffect, useRef } from 'react';
import AnimatedBackground from "@/components/animated-background";

export default function Contact() {
  const cursorTrailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorTrailRef.current) return;

      // Create sparkle element with cosmic colors
      const sparkle = document.createElement('div');
      const colors = ['bg-amber-400', 'bg-orange-400', 'bg-yellow-400', 'bg-blue-400'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      sparkle.className = `fixed w-2 h-2 ${randomColor} rounded-full pointer-events-none animate-ping`;
      sparkle.style.left = e.clientX + 'px';
      sparkle.style.top = e.clientY + 'px';
      sparkle.style.zIndex = '40';

      document.body.appendChild(sparkle);

      // Remove sparkle after animation
      setTimeout(() => {
        sparkle.remove();
      }, 1000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <AnimatedBackground />
      
      <div ref={cursorTrailRef} className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl mx-auto">
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent">
              Let's build something
            </span>
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            that matters.
          </h2>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            
            {/* Email */}
            <a
              href="mailto:hello@juliankingman.com"
              className="group relative flex items-center gap-4 px-8 py-4 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-amber-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-xl">
                ✉️
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Email</div>
                <div className="text-gray-400 text-sm group-hover:text-amber-400 transition-colors">
                  hello@juliankingman.com
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/juliankingman"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 px-8 py-4 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-amber-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-xl">
                💼
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">LinkedIn</div>
                <div className="text-gray-400 text-sm group-hover:text-amber-400 transition-colors">
                  /juliankingman
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/juliankingman"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 px-8 py-4 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-amber-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-xl">
                💻
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">GitHub</div>
                <div className="text-gray-400 text-sm group-hover:text-amber-400 transition-colors">
                  /juliankingman
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Additional message */}
          <p className="text-gray-400 mt-12 text-lg">
            Ready to turn ideas into reality? Drop me a line and let's create something amazing together.
          </p>
        </div>
      </div>
    </>
  );
} 