import Image from "next/image";
import AnimatedBackground from "@/components/animated-background";
import FloatingMonitors from "@/components/floating-monitors";
import { FlowerOfLife, MetatronsCube, Torus } from "@/components/sacred-geometry";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          
          {/* Profile Image - Meditating Code Mage */}
          <div className="mb-8 mage-rig">
            <div className="relative">
              {/* Shadow underneath */}
              <div
                className="absolute floating-shadow left-1/2 -ml-14 md:-ml-20 w-28 md:w-40 h-8 bg-gradient-to-r from-transparent via-black/80 to-transparent rounded-full"
                style={{ bottom: '-10px', zIndex: -1 }}
              />

              {/* Main character image */}
              <Image
                src="/MeditatingCodeMage2.png"
                alt="Meditating Code Mage"
                width={1024}
                height={1211}
                sizes="(min-width: 768px) 192px, 128px"
                priority
                className="mage-sprite pixelated-float pixel-crisp"
              />
            </div>

            {/* Hovering amber CRT monitors */}
            <FloatingMonitors />

            {/* Animated aura rings */}
            <div className="absolute inset-0 rounded-full border border-amber-400/30 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 rounded-full border border-orange-500/30 animate-ping pointer-events-none" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          </div>

          {/* Name with glow */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6 relative">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent animate-pulse">
              Julian Kingman
            </span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent blur-lg opacity-50 -z-10">
              Julian Kingman
            </div>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wide">
            Ascended software
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/projects" className="btn-crt">
              View My Work
            </a>

            <a href="/contact" className="btn-crt btn-crt-ghost">
              Let&apos;s Connect
            </a>
          </div>
        </div>

        {/* Geometric overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <MetatronsCube
            className="absolute -top-10 -left-16 sm:top-[8%] sm:left-[6%] w-72 h-72 sm:w-80 sm:h-80 opacity-[0.10]"
            cycle={34}
            spin={-300}
          />
          <Torus
            className="absolute -bottom-16 -right-20 sm:bottom-[6%] sm:right-[5%] w-72 h-72 sm:w-80 sm:h-80 opacity-[0.10]"
            cycle={30}
            spin={260}
          />
          <FlowerOfLife
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(46rem,130vw)] h-[min(46rem,130vw)] opacity-[0.13]"
            cycle={26}
            spin={360}
          />
        </div>
      </div>
    </>
  );
}
