/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, Github, CloudLightning } from 'lucide-react';

interface NavbarProps {
  onOpenDeployGuide: () => void;
}

export default function Navbar({ onOpenDeployGuide }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section highlights
      const sections = ['beranda', 'edukasi', 'kalkulator', 'permainan', 'komitmen'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'edukasi', label: 'Edukasi 5R' },
    { id: 'kalkulator', label: 'Kalkulator Sampah' },
    { id: 'permainan', label: 'Tantangan Milah' },
    { id: 'komitmen', label: 'Komitmen' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="app_navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('beranda')}>
            <div className="bg-emerald-600 p-2 rounded-xl text-stone-50 flex items-center justify-center">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="font-display font-bold text-xl text-stone-900 tracking-tight">
              Bumi<span className="text-emerald-600">Nirmala</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  activeSection === link.id ? 'text-emerald-700 font-semibold' : 'text-stone-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenDeployGuide}
              className="flex items-center space-x-2 bg-stone-900 hover:bg-stone-800 text-stone-50 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm shadow-stone-950/20"
            >
              <CloudLightning className="h-4 w-4 text-emerald-400" />
              <span>Deploy ke GitHub & Vercel</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenDeployGuide}
              className="p-2 text-stone-700 hover:text-emerald-600 transition-colors"
              title="Panduan Deploy"
            >
              <CloudLightning className="h-5 w-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-stone-100 text-stone-700 hover:text-emerald-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-50/95 backdrop-blur-lg border-b border-stone-200 py-4 px-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-50 text-emerald-800 font-semibold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-stone-200 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDeployGuide();
                }}
                className="flex items-center justify-center space-x-2 bg-stone-900 hover:bg-stone-800 text-stone-50 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              >
                <CloudLightning className="h-4 w-4 text-emerald-400" />
                <span>Panduan Deploy</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
