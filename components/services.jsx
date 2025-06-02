"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Brain, Database, LineChart, Globe, Server, Sparkles, ArrowRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance and user experience.",
      icon: Code,
      features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Modern Frameworks"],
    },
    {
      title: "AI Solutions",
      description:
        "Intelligent systems powered by machine learning and natural language processing to automate and enhance business processes.",
      icon: Brain,
      features: ["Machine Learning", "NLP Integration", "Predictive Analytics", "Custom AI Models"],
    },
    {
      title: "Data Science",
      description:
        "Extract valuable insights from your data with advanced analytics, visualization tools, and predictive modeling.",
      icon: Database,
      features: ["Data Analysis", "Visualization", "Predictive Models", "Big Data Processing"],
    },
    {
      title: "Business Intelligence",
      description:
        "Make data-driven decisions with custom dashboards, reporting tools, and real-time analytics platforms.",
      icon: LineChart,
      features: ["Custom Dashboards", "Real-time Analytics", "Automated Reports", "KPI Tracking"],
    },
    {
      title: "API Development",
      description: "Robust and scalable APIs to connect your systems and enable seamless third-party integrations.",
      icon: Server,
      features: ["RESTful APIs", "GraphQL", "Microservices", "API Security"],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Complete online stores with secure payment processing, inventory management, and customer analytics.",
      icon: Globe,
      features: ["Payment Integration", "Inventory Management", "Customer Analytics", "Mobile Optimized"],
    },
  ]

  return (
    <section id="services" className="">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-xll font-medium text-white">Our Expertise</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Services We Offer
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive technology solutions to help your business grow and succeed in the digital
            landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 rounded-xl"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-white/10">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-white/60">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
     
      </div>
    </section>
  )
}
