'use client';

import { useState } from 'react';
import AnimatedBackground from "@/components/animated-background";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    role: "Full-Stack Developer",
    description: "Built a modern e-commerce platform with React, Node.js, and PostgreSQL. Features include real-time inventory management, payment processing, and advanced analytics.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    image: "🛍️",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "AI Chat Assistant",
    role: "Frontend Lead",
    description: "Developed an intelligent chat interface using React and WebSocket connections. Integrated with OpenAI API for natural language processing.",
    tech: ["React", "TypeScript", "WebSocket", "OpenAI API", "Tailwind CSS"],
    image: "🤖",
    color: "from-green-500 to-blue-600"
  },
  {
    id: 3,
    title: "Real-Time Dashboard",
    role: "UI/UX Developer",
    description: "Created a responsive analytics dashboard with real-time data visualization. Used D3.js for custom charts and animations.",
    tech: ["Vue.js", "D3.js", "WebSocket", "Chart.js", "SCSS"],
    image: "📊",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 4,
    title: "Mobile Health App",
    role: "React Native Developer",
    description: "Built a cross-platform health tracking app with biometric authentication and cloud sync capabilities.",
    tech: ["React Native", "Firebase", "SQLite", "Expo", "Redux"],
    image: "🏥",
    color: "from-red-500 to-orange-600"
  },
  {
    id: 5,
    title: "Blockchain Wallet",
    role: "Web3 Developer",
    description: "Developed a secure cryptocurrency wallet with multi-chain support and DeFi integrations.",
    tech: ["Web3.js", "Solidity", "Ethereum", "MetaMask", "React"],
    image: "₿",
    color: "from-yellow-500 to-red-600"
  },
  {
    id: 6,
    title: "Video Streaming Platform",
    role: "Backend Developer",
    description: "Built a scalable video streaming service with CDN integration and adaptive bitrate streaming.",
    tech: ["Node.js", "FFmpeg", "AWS S3", "CloudFront", "WebRTC"],
    image: "🎬",
    color: "from-indigo-500 to-purple-600"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <AnimatedBackground />
      
      {/* Parallax background layers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent transform translate-y-0 parallax-slow" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-900/5 to-transparent transform translate-y-0 parallax-medium" />
      </div>
      
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
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
                className="group relative p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4 text-center">{project.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-cyan-400 text-sm mb-3">{project.role}</p>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-500/20 rounded-md text-xs text-purple-300">
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
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
          <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-purple-500/30 max-w-2xl w-full p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-cyan-400">{selectedProject.role}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-sm text-gray-300 border border-purple-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white hover:scale-105 transition-transform">
                View Demo
              </button>
              <button className="flex-1 px-6 py-3 border border-purple-500/50 rounded-xl font-semibold text-purple-300 hover:text-white hover:border-purple-400 transition-all">
                View Code
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 