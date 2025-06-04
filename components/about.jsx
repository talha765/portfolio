"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Database, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const founders = [
    {
      name: "Talha Wajid",
      role: "Co-Founder & CTO",
      image: "/my_image.jpg?height=350&width=400",
      bio: "MERN stack expert with extensive experience in data science. Passionate about building scalable web applications and deriving insights from complex datasets.",
      skills: ["React", "Node.js", "MongoDB", "Express", "Data Science", "Python", "TensorFlow","PyTorch"],
      icon: Code,
    },
    {
      name: "Ali Mehmood",
      role: "Co-Founder & AI Lead",
      image: "/IMG_5839.JPG?height=400&width=400",
      bio: "AI and LLM specialist focused on developing cutting-edge machine learning solutions. Experienced in natural language processing and building intelligent systems.",
      skills: ["Artificial Intelligence", "Machine Learning", "LLMs", "NLP", "Python", "PyTorch", "Transformers"],
      icon: Brain,
    },
  ]

  const values = [
    {
      icon: Database,
      title: "Data-Driven",
      description: "Every decision backed by comprehensive data analysis",
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Maintainable, scalable, and efficient code architecture",
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Leveraging artificial intelligence for smarter solutions",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized for speed, efficiency, and user experience",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 pt-8 md:pt-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {/* Founders Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Meet Our Founders</h3>
            <p className="text-white/60 max-w-2xl mx-auto">
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 rounded-xl"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <motion.div
                          className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-400/20 mx-auto"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={founder.image || "/placeholder.svg"}
                            alt={founder.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </div>

                      <h4 className="text-2xl font-bold text-white mb-2">{founder.name}</h4>
                      <p className="text-purple-400 font-medium mb-4">{founder.role}</p>
                      <p className="text-white/80 mb-6 leading-relaxed">{founder.bio}</p>

                      <div className="flex flex-wrap gap-2 justify-center">
                        {founder.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="bg-purple-600/20 text-purple-200 border-purple-400/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
