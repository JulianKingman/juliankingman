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
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch">
            
            {/* Email */}
            <a
              href="mailto:hello@juliankingman.com"
              className="group relative flex items-center gap-4 px-8 py-4 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 min-w-[280px]"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
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
              className="group relative flex items-center gap-4 px-8 py-4 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 min-w-[280px]"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
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
              className="group relative flex items-center gap-4 px-8 py-4 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 min-w-[280px]"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
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