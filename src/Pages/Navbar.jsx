import React from "react";

export default function Navbar() {
  return (
    <nav class="fixed top-0 left-0 w-full bg-white/80 z-50">
      <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" class="text-2xl font-bold text-gray-500">
          HD
        </a>

        <ul class="flex space-x-8 text-gray-500 font-medium">
          <li>
            <a href="#projects" class="hover:text-black transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#casestudies" class="hover:text-black transition-colors">
              Case Studies
            </a>
          </li>
          <li>
            <a href="#contact" class="hover:text-black transition-colors">
              Contact
            </a>
          </li>
          <li>
            <a
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-black transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
