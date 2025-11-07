import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <div className="max-w-3xl">
        {/* Profile Image */}
        <div className="mb-6">
          <img
            src="/boss.jpg" // replace with your image
            alt="picture here"
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
  );
}
