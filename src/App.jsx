import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <nav class="fixed top-0 left-0 w-full bg-white/80 z-50">
  <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
    
    <a href="#home" class="text-2xl font-bold text-blue-600">HD</a>

    
    <ul class="flex space-x-8 text-gray-700 font-medium">
      <li>
        <a href="#projects" class="hover:text-blue-600 transition-colors">Projects</a>
      </li>
      <li>
        <a href="#casestudies" class="hover:text-blue-600 transition-colors">Case Studies</a>
      </li>
      <li>
        <a href="#contact" class="hover:text-blue-600 transition-colors">Contact</a>
      </li>
      <li>
        <a href="resume.pdf" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 transition-colors">Resume</a>
      </li>
    </ul>
  </div>
</nav>

      <div className="bg-gray-50 text-gray-800 scroll-smooth">

          <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <div className="max-w-3xl">
        {/* Profile Image */}
        <div className="mb-6">
          <img
            src="/profile.jpg" // replace with your image
            alt="Hammad Riaz"
            className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
          />
        </div>

        {/* Intro Text */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, <span className="text-black">Sar Nechy Kaam Uper</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 mb-4">
          I’m a <span className="text-black">UI/UX Designer</span> at{" "}
          <span className="text-red-500">Logicode Technologies</span>
        </h2>

        {/* Status and CTA */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <span className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-full text-gray-700 text-sm">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
            Open to work
          </span>

          <a
            href="#contact"
            className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition"
          >
            Book a call
          </a>
        </div>

        {/* Subtext */}
        <p className="text-gray-600 mt-8 text-base md:text-lg">
          Feel free to explore my portfolio and reach out — I’d love to connect!
        </p>
      </div>
    </section>
      {/* Hero Section */}
      {/* <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Sar Nechy Kaam Uper</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-600">
          UX Designer | Creating human-centered interfaces & delightful digital
          stories
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition"
          >
            Get in Touch
          </a>
        </div>
      </section> */}

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center mb-8">
          I’m a UX designer passionate about crafting experiences that make
          technology feel effortless. My approach blends design thinking,
          empathy, and pixel-perfect precision to turn complex ideas into clean,
          engaging interfaces.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-semibold text-gray-800">Experience</p>
            <p>10+ years</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Focus</p>
            <p>Product Design, Prototyping, Systems</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Tools</p>
            <p>Figma, Adobe XD, Notion, Miro</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

          {/* Project 1 */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-2">
              🏘️ Kunji – Smart Society Management System
            </h3>
            <p className="text-gray-600 mb-4">
              Simplifying residential and society management through a unified
              platform for communication, deliveries, and tenant tracking.
            </p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Conducted user interviews and mapped key pain points</li>
              <li>Created wireframes and prototypes for residents and admins</li>
              <li>Improved usability by reducing navigation depth</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-2">
              🏫 EduConnect – Student & Teacher Management System
            </h3>
            <p className="text-gray-600 mb-4">
              Enhancing collaboration between teachers and students with a
              centralized dashboard for assignments, attendance, and performance
              tracking.
            </p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Defined user personas for teachers and students</li>
              <li>Designed responsive dashboard with intuitive data visualization</li>
              <li>Balanced detail and simplicity for optimal clarity</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              ⚖️ Lawyer Management System
            </h3>
            <p className="text-gray-600 mb-4">
              Connecting lawyers and clients with verified profiles and
              transparent case progress tracking.
            </p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Developed dual-platform flow for clients and lawyers</li>
              <li>Integrated credibility indicators like reviews and verification</li>
              <li>Boosted trust and user confidence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Design System Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Design System Showcase</h2>
          <p className="text-gray-600 mb-2">
            Components: Buttons, Cards, Forms, Navigation
          </p>
          <p className="text-gray-600 mb-2">
            Typography: Sans-serif family with medium line spacing
          </p>
          <p className="text-gray-600">
            Colors: Minimal grayscale with a soft blue accent
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
          <blockquote className="text-lg italic text-gray-700">
            “Hammad’s design intuition and attention to detail elevate every
            product he works on.”
          </blockquote>
          <p className="mt-4 text-gray-500">— Product Manager, EduConnect</p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-blue-600 text-white py-20 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">
          Let’s create something meaningful together
        </h2>
        <p className="text-lg mb-4">📧 yourname@email.com</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:underline">
            LinkedIn
          </a>
          <a href="#" className="hover:underline">
            Dribbble
          </a>
          <a href="#" className="hover:underline">
            Behance
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        Designed with ❤️ & minimalism in Notion
        <br />© 2025 Hammad Riaz — UX Designer
      </footer>
    </div>
    </>
  )
}

export default App
