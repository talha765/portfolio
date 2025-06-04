"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Loader2, Sparkles } from "lucide-react"

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
      link: "tel:+15551234567",
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

  return (
    <section id="contact" className="">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 pt-8 md:pt-16 pb-12 md:pb-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-white">Get In Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Let's Work together
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to learn more about our services? We'd love to hear from you. Let's create
            something amazing together.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Contact Information */}
          <div className="space-y-6 lg:col-span-1">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 bg-white/5 hover:bg-white/10 transition-all duration-300 group rounded-xl"
                  >
                    <div className="p-2 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-white/80 mb-1">{item.value}</p>
                      <p className="text-sm text-white/60">{item.description}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="bg-gradient-to-br from-purple-600/10 to-cyan-600/10 backdrop-blur-sm border-white/10 rounded-xl">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-white mb-2">Quick Response</h3>
                <p className="text-white/80 text-sm mb-4">We typically respond within 24 hours during business days.</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-white/60">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Usually online</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
         
          </div>
        </div>
      </div>
    </section>
  )
}
