/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Leaf, Github, Globe, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10 pb-10 border-b border-stone-800">
          
          {/* Col 1: Brand & Desc (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-emerald-600 p-2 rounded-xl text-stone-50 flex items-center justify-center">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-xl text-stone-50 tracking-tight">
                Bumi<span className="text-emerald-400">Nirmala</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Bumi Nirmala adalah kampanye edukasi interaktif independen untuk mengajak masyarakat beralih ke gaya hidup minim sampah (Zero Waste Lifestyle). Mari jaga lingkungan hidup demi generasi masa depan.
            </p>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-stone-50">Navigasi Utama</h4>
            <div className="flex flex-col space-y-2 text-xs text-stone-400">
              <a href="#beranda" className="hover:text-emerald-400 transition-colors">Beranda</a>
              <a href="#edukasi" className="hover:text-emerald-400 transition-colors">Edukasi 5R</a>
              <a href="#kalkulator" className="hover:text-emerald-400 transition-colors">Kalkulator Jejak Sampah</a>
              <a href="#permainan" className="hover:text-emerald-400 transition-colors">Tantangan Milah</a>
              <a href="#komitmen" className="hover:text-emerald-400 transition-colors">Komitmen Hijau</a>
            </div>
          </div>

          {/* Col 3: Tech stack & references (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-stone-50">Platform Rilis</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Didesain sepenuhnya menggunakan React & Tailwind CSS. Siap dipublikasikan di akun <strong>GitHub</strong> dan di-hosting gratis via <strong>Vercel</strong> CDN.
            </p>
          </div>

        </div>

        {/* Footer Bottom copyright area */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-1 text-xs text-stone-500">
            <span>© 2026 Bumi Nirmala. Dibuat dengan</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500 mx-0.5 animate-pulse" />
            <span>untuk kelestarian alam lingkungan Indonesia.</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-stone-800 hover:bg-stone-700 hover:text-emerald-400 rounded-xl transition-colors text-stone-400 flex items-center space-x-1.5 text-xs font-semibold"
              title="Kembali ke atas"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="hidden sm:inline">Ke Atas</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
