"use client"

import { useState, useRef, useEffect } from "react"
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
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const buttonRefs = useRef({});

  const projects = [
    {
      id: 7,
      title: "DyslexiAid",
      description:
        "An AI-powered application utilizing large language models (LLMs) and MERN stack to provide certified tests and support for children with dyslexia.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ai",
      tags: ["LLM", "MERN Stack", "Machine Learning", "React", "Node.js", "MongoDB", "Express"],
      link: "#",
      github: "https://github.com/DyslexiAid-FYP/DyslexiAid_website",
      featured: true,
    },
    {
      id: 8,
      title: "Student Research Lab",
      description:
        "A full-stack web forum designed for students and educators to share research, discuss academic topics, and collaborate.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      tags: ["Full Stack", "React", "Node.js", "Forum"],
      link: "#",
      github: "https://github.com/talha765/student-research-lab/tree/talha",
      featured: false,
    },
    {
      id: 9,
      title: "Smart Attendance System",
      description:
        "Developed a smart attendance system using a Flutter mobile application and deep learning algorithms for automated face recognition and attendance tracking, generating PDF reports.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ai",
      tags: ["Deep Learning", "Flutter", "Face Recognition", "Python"],
      link: "https://github.com/talha765/Smart-Attendance-Project",
      github: "https://github.com/talha765/Smart-Attendance-Project",
      featured: false,
    },
    {
      id: 10,
      title: "Time Series Forecasting",
      description:
        "Implemented time series forecasting models, including ARIMA and exponential smoothing, using Python to predict environmental factors.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ai",
      tags: ["Time Series Analysis", "Machine Learning", "ARIMA", "Python"],
      link: "https://github.com/talha765/Time-Series-Forecasting",
      github: "https://github.com/talha765/Time-Series-Forecasting",
      featured: false,
    },
    {
      id: 11,
      title: "Adversarial Attacks and Defenses",
      description:
        "Investigated adversarial attacks on neural networks using ResNet and developed defense mechanisms to improve model robustness against malicious inputs.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ai",
      tags: ["Deep Learning", "Cybersecurity", "ResNet", "Python"],
      link: "https://github.com/talha765/Adversarial-Attacks-and-Defenses-in-Neural-Networks",
      github: "https://github.com/talha765/Adversarial-Attacks-and-Defenses-in-Neural-Networks",
      featured: false,
    },
    {
      id: 12,
      title: "EDA on Netflix Dataset",
      description:
        "Performed comprehensive Exploratory Data Analysis (EDA) on the Netflix dataset using Python and pandas to identify user behavior and content trends.",
      image: "/placeholder.svg?height=400&width=600",
      category: "data",
      tags: ["Data Science", "EDA", "Pandas", "Python"],
      link: "https://github.com/talha765/EDA_Netflix_Dataset",
      github: "https://github.com/talha765/EDA_Netflix_Dataset",
      featured: false,
    },
  ]

  const filters = [
    { id: "all", label: "Featured" },
    { id: "web", label: "Web Development" },
    { id: "ai", label: "AI & ML" },
    { id: "data", label: "Data Science" },
  ]

  const filteredProjects =
    activeFilter === "all"
      ? projects.filter((project) => project.featured)
      : projects.filter((project) => project.category === activeFilter)

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

  useEffect(() => {
    if (buttonRefs.current[activeFilter]) {
      const activeButton = buttonRefs.current[activeFilter];
      setIndicatorStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [activeFilter]);

  useEffect(() => {
    const filterIds = filters.map(filter => filter.id);
    const interval = setInterval(() => {
      setActiveFilter(prevFilter => {
        const currentIndex = filterIds.indexOf(prevFilter);
        const nextIndex = (currentIndex + 1) % filterIds.length;
        return filterIds[nextIndex];
      });
    }, 5000); // Change filter every 5 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    // Potentially clear the interval here if you want manual selection to stop auto-moving
    // clearInterval(interval); // This requires storing interval ID in a ref or state
  }

  return (
    <section id="projects" className="py-12 md:py-20 relative pb-4 md:pb-8">
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
          <div className="relative flex flex-wrap gap-2 p-1 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
             <motion.div
              className="absolute top-1 left-0 h-[calc(100%-8px)] bg-gradient-to-r from-purple-600 to-cyan-600 rounded-md"
              animate={indicatorStyle}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            {filters.map((filter) => (
              <button
                key={filter.id}
                ref={el => buttonRefs.current[filter.id] = el}
                onClick={() => handleFilterClick(filter.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 relative z-10 ${activeFilter === filter.id ? "text-white" : "text-white/60 hover:text-white"}`}
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
              className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 rounded-xl"
            >
              <div className="relative">
                {/* Image removed */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-0">Featured</Badge>
                  </div>
                )}
                {/* Removed gradient overlay */}
              </div>

              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors mt-7">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-white/10 text-white/80 border-white/20 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 w-32 rounded-full">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>
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
          
        </motion.div>
      </div>
    </section>
  )
}
