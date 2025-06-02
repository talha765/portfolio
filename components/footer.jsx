"use client"

import { Sparkles, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    company: [
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  }

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "T" },
    { name: "LinkedIn", href: "#", icon: "L" },
    { name: "GitHub", href: "#", icon: "G" },
    { name: "Instagram", href: "#", icon: "I" },
  ]

  return (
    <footer className="relative border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <div className="absolute inset-0 bg-purple-400 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                nanobyte
              </span>
            </Link>

            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Transforming ideas into digital reality with cutting-edge web development, AI solutions, and data science
              expertise.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/60">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@nanobyte.tech</span>
              </div>
              <div className="flex items-center space-x-3 text-white/60">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/60">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Silicon Valley, CA</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-white/60 text-sm">Follow us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <span className="text-white/60 group-hover:text-white text-sm font-medium">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm mb-2">© {currentYear} Nanobyte. All rights reserved.</p>
              <p className="text-white/40 text-xs">Built with ❤️ and cutting-edge technology</p>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30" />
      </div>
    </footer>
  )
}
