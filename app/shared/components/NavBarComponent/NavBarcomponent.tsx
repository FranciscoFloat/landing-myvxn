"use client";
import React, { useState, useEffect } from 'react';

export default function NavBarComponent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const links = [
    { href: "/", label: "Funcionalidades" },
    { href: "/projects", label: "Precios" },
    { href: "/testimonials", label: "Testimonios" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <div 
      className={`fixed top-0 left-0 right-0 w-full z-50 px-4 py-2 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md shadow-md border-b border-white/5" 
          : "bg-background-navbar backdrop-blur-[2px]"
      }`}
    >
      <nav className="flex justify-between items-center p-4 w-full max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-foreground">My Vxn</div>
        <div className="flex justify-center items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-gray-300 ml-4 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <div className=""></div>
          <button className=" cursor-pointer bg-button-primary inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground glow-button hover:scale-[1.02] active:scale-[0.98] h-12 rounded-2xl px-8 text-base">
            Comenzar ahora
          </button>
        </div>
      </nav>
    </div>
  );
}
