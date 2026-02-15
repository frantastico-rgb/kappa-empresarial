"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function KappaNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Avanzada', href: '/metodologia/avanzada' },
    { name: 'Diagnóstico', href: '/metodologia/avanzada#diagnostico' },
    { name: 'Casos de Éxito', href: '/metodologia/avanzada#casos' },
    { name: 'Contacto', href: 'mailto:kappaempresarial@gmail.com', external: true },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/logoKappa/kappa-logo-horizontal.svg" 
              alt="Coeficiente Kappa" 
              className="h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#2D3748] hover:text-[#0A4D8C] transition-colors duration-200 font-medium text-sm"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#2D3748] hover:text-[#0A4D8C] transition-colors duration-200 font-medium text-sm"
                >
                  {item.name}
                </Link>
              )
            ))}
            {/* CTA Button */}
            <a
              href="#diagnostico"
              className="bg-gradient-to-r from-[#0A4D8C] to-[#00D9A3] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Medir mi κ
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-[#0A4D8C] hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-md text-[#2D3748] hover:bg-gray-100 transition-colors duration-200 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-md text-[#2D3748] hover:bg-gray-100 transition-colors duration-200 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <a
              href="#diagnostico"
              className="block text-center bg-gradient-to-r from-[#0A4D8C] to-[#00D9A3] text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Medir mi κ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
