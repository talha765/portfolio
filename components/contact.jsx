"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Loader2, Sparkles, Clock, Users, MessageCircle, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Message sent! We'll get back to you as soon as possible.")

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@lumen.tech",
      link: "mailto:contact@lumen.tech",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+923214546423",
      link: "tel:+923214546423",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "123 Tech Street, Silicon Valley, CA",
      link: "https://maps.google.com",
      description: "Come say hello at our HQ",
    },
  ]

  const stats = [
    { icon: Clock, label: "Response Time", value: "< 24 hours" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: MessageCircle, label: "Messages Handled", value: "10k+" },
  ]

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 hover:bg-white/15 transition-all duration-300">
            <Sparkles className="w-5 h-5 text-purple-400 mr-3 animate-spin" />
            <span className="text-sm font-medium text-white">Get In Touch</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
            Let's Work Together
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Have a project in mind or want to learn more about our services? We'd love to hear from you. Let's create
            something amazing together.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-purple-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-6 p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 group rounded-2xl border border-white/5 hover:border-white/20"
                  >
                    <div className="p-4 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:scale-110">
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-2 text-lg">{item.title}</h4>
                      <p className="text-white/90 mb-2 font-medium">{item.value}</p>
                      <p className="text-sm text-white/60">{item.description}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Quick Response Card */}
            <Card className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border-white/20 rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Quick Response Guarantee</h3>
                <p className="text-white/80 mb-6">
                  We typically respond within 24 hours during business days. Your message is important to us!
                </p>
                <div className="flex items-center justify-center space-x-3 text-sm text-white/80">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-medium">Usually online</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl overflow-hidden">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-white flex items-center ">
                  <Users className="w-6 h-6 mr-3 text-purple-400  " />
                  Connect with Our Founders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
         
                {/* Talha Wajid */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 space-x-0 sm:space-x-6 p-5 bg-white/5 rounded-xl">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-400/30 flex-shrink-0">
                     {/* Placeholder for image or initials */}
                     <div className="w-full h-full bg-purple-700/50 flex items-center justify-center text-white text-4xl font-bold">TW</div>
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-xl font-bold text-white mb-1">Talha Wajid</h3>
                    <p className="text-purple-300 text-sm mb-3">Co-Founder & CTO</p>
                    <ul className="text-white/80 text-sm space-y-1 mb-4">
                      <li>- MERN Stack Expert</li>
                      <li>- Data Science & Python</li>
                      <li>- Scalable Web Applications</li>
                    </ul>
                    <div className="flex justify-center sm:justify-start space-x-4">
                      <a href="https://www.linkedin.com/in/talha-wajid-02a5b1254/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors"><Linkedin className="w-7 h-7" /></a>
                      <a href="https://github.com/talha765" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors"><Github className="w-7 h-7" /></a>
                    </div>
                  </div>
                </div>

                {/* Ali Mahmood */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 space-x-0 sm:space-x-6 p-4 bg-white/5 rounded-xl ">
                   <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-cyan-400/30 flex-shrink-0 ">
                      {/* Placeholder for image or initials */}
                     <div className="w-full h-full bg-cyan-700/50 flex items-center justify-center text-white text-4xl font-bold">AM</div>
                   </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-xl font-bold text-white mb-1">Ali Mahmood</h3>
                    <p className="text-cyan-300 text-sm mb-3">Co-Founder & AI Lead</p>
                    <ul className="text-white/80 text-sm space-y-1 mb-5">
                      <li>- AI and ML Specialist</li>
                      <li>- LLMs and NLP</li>
                      <li>- Intelligent Systems</li>
                    </ul>
                    <div className="flex justify-center sm:justify-start space-x-4">
                      <a href="https://www.linkedin.com/in/ali-408-mehmood/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors"><Linkedin className="w-7 h-7" /></a>
                      <a href="https://github.com/Ali4008" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors"><Github className="w-7 h-7" /></a>
                    </div>
                  </div>
                </div>

                {/* General Stats/Highlights related to expertise */}
               
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}