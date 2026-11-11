import AnimatedBackground from "@/components/animated-background";
import { Torus } from "@/components/sacred-geometry";

export default function About() {
  return (
    <>
      <AnimatedBackground />
      
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto relative">
          
          {/* Animated mandala background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Torus className="w-[min(40rem,120vw)] h-[min(40rem,120vw)] opacity-[0.12]" count={24} cycle={32} spin={300} />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-12 text-center">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Personal Story */}
              <div className="space-y-6">
                <div className="p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-amber-400 mb-4">The Journey</h2>
                  <p className="text-gray-300 leading-relaxed">
                    I believe software development is like playing with Legos – every project is an opportunity 
                    to build something meaningful from individual pieces. With a passion for clean code and innovative solutions, 
                    I craft digital experiences that make a difference.
                  </p>
                </div>

                <div className="p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-amber-400 mb-4">Philosophy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    I approach each project with curiosity and attention to detail, believing that the best solutions 
                    emerge from understanding both the technical requirements and the human needs behind them.
                  </p>
                </div>
              </div>

              {/* Skills & Expertise */}
              <div className="space-y-6">
                <div className="p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-amber-400 mb-4">Core Technologies</h2>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full text-sm text-gray-300 border border-orange-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-amber-400 mb-4">Focus Areas</h2>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      Full-Stack Web Development
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      User Experience Design
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      System Architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      Performance Optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <a href="/contact" className="btn-crt">
                Let&apos;s Build Something Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 