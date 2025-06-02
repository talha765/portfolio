"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Slider from "react-slick"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: "AI-Powered Customer Support",
      description:
        "An intelligent chatbot system that handles customer inquiries using advanced natural language processing and machine learning algorithms.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ai",
      tags: ["NLP", "Machine Learning", "React", "Node.js", "OpenAI"],
      link: "#",
      github: "#",
      featured: true,
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "A full-featured online shopping platform with payment integration, inventory management, and advanced analytics.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      tags: ["React", "MongoDB", "Express", "Node.js", "Stripe"],
      link: "#",
      github: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description:
        "Interactive dashboard for visualizing complex datasets with customizable charts, filters, and real-time updates.",
      image: "/placeholder.svg?height=400&width=600",
      category: "data",
      tags: ["D3.js", "React", "Python", "Data Science", "PostgreSQL"],
      link: "#",
      github: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Sentiment Analysis Tool",
      description:
        "Advanced tool that analyzes customer feedback and social media mentions to determine sentiment and extract insights.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ai",
      tags: ["NLP", "Python", "Machine Learning", "TensorFlow"],
      link: "#",
      github: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Healthcare Management System",
      description:
        "Comprehensive platform for managing patient records, appointments, medical history, and healthcare analytics.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      tags: ["React", "MongoDB", "Express", "Node.js", "HIPAA"],
      link: "#",
      github: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Predictive Analytics Platform",
      description:
        "System that uses historical data and machine learning to predict future trends and business outcomes.",
      image: "/placeholder.svg?height=400&width=600",
      category: "data",
      tags: ["Python", "TensorFlow", "Data Science", "AWS", "Docker"],
      link: "#",
      github: "#",
      featured: false,
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "ai", label: "AI & ML" },
    { id: "data", label: "Data Science" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const featuredProjects = projects.filter((project) => project.featured)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <ChevronRight className="text-white hover:text-purple-400 transition-colors" />,
    prevArrow: <ChevronLeft className="text-white hover:text-purple-400 transition-colors" />,
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-white">Our Work</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of innovative web applications, AI solutions, and data science projects that drive
            real business value.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 p-1 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 overflow-hidden rounded-xl"
            >
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-t-xl">
                  <LazyLoadImage
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    effect="blur"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-0">Featured</Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-white/10 text-white/80 border-white/20 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 flex-1 rounded-md">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 flex-1 rounded-md"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 px-8 py-3 rounded-full">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
