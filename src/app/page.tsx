import Image from "next/image";
import AnimatedBackground from "@/components/animated-background";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          
          {/* Profile Image - Meditating Code Mage */}
          <div className="mb-8 relative inline-block">
            <div className="relative">
              {/* Shadow underneath */}
              <div 
                className="absolute floating-shadow w-28 h-8 bg-gradient-to-r from-transparent via-black/80 to-transparent rounded-full"
                style={{
                  left: '50%',
                  bottom: '-10px',
                  marginLeft: '-56px',
                  zIndex: -1
                }}
              />
              
              {/* Main character image */}
              <Image
                src="/MeditatingCodeMage2.png"
                alt="Meditating Code Mage"
                width={128}
                height={128}
                priority
                className="pixelated-float pixel-crisp"
                style={{
                  imageRendering: 'pixelated'
                }}
              />
            </div>
            
            {/* Animated aura rings */}
            <div className="absolute inset-0 rounded-full border border-amber-400/30 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 rounded-full border border-orange-500/30 animate-ping pointer-events-none" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          </div>

          {/* Name with glow */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 relative">
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
            <a
              href="/projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">View My Work</span>
            </a>
            
            <a
              href="/contact"
              className="group px-8 py-4 border border-orange-500/50 rounded-full font-semibold text-orange-300 hover:text-white hover:border-orange-400 transition-all duration-300 hover:bg-orange-500/10"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* Geometric overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-orange-500/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-amber-500/10 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          
          {/* Subtle Flower of Life pattern */}
          <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5" viewBox="0 0 200 200">
            <g stroke="url(#gradient)" strokeWidth="1" fill="none">
              <circle cx="100" cy="100" r="30" />
              <circle cx="126" cy="85" r="30" />
              <circle cx="126" cy="115" r="30" />
              <circle cx="100" cy="130" r="30" />
              <circle cx="74" cy="115" r="30" />
              <circle cx="74" cy="85" r="30" />
              <circle cx="100" cy="70" r="30" />
            </g>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFA500" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#4169E1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}
