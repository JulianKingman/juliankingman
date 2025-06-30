'use client';

import { useState } from 'react';
import AnimatedBackground from "@/components/animated-background";

const projects: Project[] = [
  {
    id: 1,
    title: "Giving Universe",
    role: "Full-Stack Web3 Developer",
    description: "A comprehensive blockchain platform for charitable giving and impact tracking. Built as a monorepo with multiple applications supporting various blockchain networks for transparent donation management.",
    tech: ["TypeScript", "React", "Solidity", "Next.js", "Prisma", "IPFS", "Multi-chain"],
    image: "/projects/GivingUniverse.jpg",
    color: "from-green-500 to-blue-600",
    liveUrl: "https://givinguniverse.org/",
    githubUrl: "https://github.com/CollaborativeEconomics/monorepo"
  },
  {
    id: 2,
    title: "Clipboard.fitness",
    role: "Full-Stack Developer",
    description: "A modern training management platform for personal trainers. Features drag-and-drop program building, visual progress tracking, and comprehensive session management tools.",
    tech: ["React", "TypeScript", "Node.js", "Database", "Real-time", "Mobile-responsive"],
    image: "/projects/Clipboard.jpg",
    color: "from-blue-500 to-purple-600",
    liveUrl: "https://www.clipboard.fitness",
    githubUrl: null
  },
  {
    id: 3,
    title: "Allo Yeeter",
    role: "Web3 Developer",
    description: "A fund distribution tool built with the Allo protocol for public goods funding. Enables efficient allocation and distribution of resources within the Web3 ecosystem.",
    tech: ["TypeScript", "React", "Solidity", "Ethereum", "Allo Protocol", "DeFi"],
    image: "/projects/Yeeter.jpg",
    color: "from-purple-500 to-pink-600",
    liveUrl: "https://allo-yeeter.vercel.app",
    githubUrl: "https://github.com/greenpill-dev-guild/allo-yeeter"
  }
];

interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  tech: string[];
  image: string;
  color: string;
  liveUrl: string;
  githubUrl: string | null;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <AnimatedBackground />
      
      {/* Parallax background layers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/5 to-transparent transform translate-y-0 parallax-slow" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-amber-900/5 to-transparent transform translate-y-0 parallax-medium" />
      </div>
      
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A collection of projects that showcase my passion for building innovative digital solutions.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 h-48 rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-amber-400 text-sm mb-3">{project.role}</p>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-orange-500/20 rounded-md text-xs text-orange-300">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 rounded-md text-xs text-gray-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-gray-300 mb-6">Interested in collaborating on your next project?</p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
          <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-orange-500/30 max-w-2xl w-full p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-amber-400">{selectedProject.role}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="mb-6 h-48 rounded-lg overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full text-sm text-gray-300 border border-orange-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href={selectedProject.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl font-semibold text-white hover:scale-105 transition-transform text-center"
              >
                View Live Site
              </a>
              {selectedProject.githubUrl && (
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 border border-orange-500/50 rounded-xl font-semibold text-orange-300 hover:text-white hover:border-orange-400 transition-all text-center"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 