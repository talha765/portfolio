"use client"

import { useState } from "react"
import { Palette, Database, Globe, Zap } from "lucide-react"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend")

  const categories = [
    { id: "frontend", label: "Frontend", icon: Globe },
    { id: "backend", label: "Backend", icon: Database },
    { id: "design", label: "Design", icon: Palette },
    { id: "tools", label: "Tools", icon: Zap },
  ]

  const skills = {
    frontend: [
      { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "Next.js", level: 90, color: "from-gray-700 to-gray-900" },
      { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-800" },
      { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-blue-500" },
      { name: "Vue.js", level: 75, color: "from-green-400 to-green-600" },
      { name: "JavaScript", level: 94, color: "from-yellow-400 to-orange-500" },
    ],
    backend: [
      { name: "Node.js", level: 90, color: "from-green-500 to-green-700" },
      { name: "Python", level: 85, color: "from-blue-400 to-yellow-400" },
      { name: "Express.js", level: 88, color: "from-gray-600 to-gray-800" },
      { name: "MongoDB", level: 82, color: "from-green-600 to-green-800" },
      { name: "PostgreSQL", level: 80, color: "from-blue-600 to-indigo-600" },
      { name: "GraphQL", level: 75, color: "from-pink-500 to-purple-600" },
    ],
    design: [
      { name: "Figma", level: 90, color: "from-purple-500 to-pink-500" },
      { name: "Adobe XD", level: 85, color: "from-purple-600 to-blue-600" },
      { name: "Photoshop", level: 80, color: "from-blue-600 to-purple-600" },
      { name: "Illustrator", level: 75, color: "from-orange-500 to-red-500" },
      { name: "UI/UX Design", level: 88, color: "from-indigo-500 to-purple-600" },
      { name: "Prototyping", level: 85, color: "from-green-500 to-teal-500" },
    ],
    tools: [
      { name: "Git", level: 92, color: "from-orange-500 to-red-500" },
      { name: "Docker", level: 78, color: "from-blue-500 to-blue-700" },
      { name: "AWS", level: 75, color: "from-yellow-400 to-orange-500" },
      { name: "Vercel", level: 88, color: "from-gray-700 to-black" },
      { name: "VS Code", level: 95, color: "from-blue-600 to-blue-800" },
      { name: "Webpack", level: 70, color: "from-blue-400 to-blue-600" },
    ],
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "glass text-white/70 hover:text-white hover:scale-105"
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className="glass rounded-xl p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-white/70 font-medium">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="glass rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and methodologies
              to stay at the cutting edge of web development. Currently diving deep into AI/ML integration and Web3
              technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
