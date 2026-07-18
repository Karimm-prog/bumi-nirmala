/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Leaf, ArrowRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export default function Hero() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="beranda"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial from-emerald-50/40 via-stone-50 to-stone-50"
    >
      {/* Dynamic background leaf blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left - Text content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full w-fit"
            >
              <Sparkles className="h-4 w-4 text-emerald-600 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-800 tracking-wide uppercase">
                Zero Waste & Sustainability Campaign
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.1]"
            >
              Langkah Kecilmu, <br />
              <span className="text-emerald-700 relative inline-block">
                Nafas Baru bagi Bumi
                <svg className="absolute left-0 bottom-0.5 w-full h-2 text-emerald-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed font-sans"
            >
              Lebih dari 80% sampah plastik di laut berasal dari aktivitas darat. Mari mulai hidup minim sampah (Zero Waste Lifestyle) melalui edukasi praktis, kalkulator dampak mandiri, dan permainan pemilahan yang seru!
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => scrollToId('kalkulator')}
                className="group flex items-center justify-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-stone-50 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md shadow-emerald-950/20"
              >
                <span>Hitung Jejak Sampahmu</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={() => scrollToId('permainan')}
                className="flex items-center justify-center space-x-2 bg-white border border-stone-200 hover:border-emerald-600 hover:text-emerald-700 text-stone-700 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
              >
                <span>Main Tantangan Milah</span>
              </button>
            </motion.div>

            {/* Micro Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 pt-6 border-t border-stone-200/80"
            >
              <div className="flex items-center space-x-2 text-xs text-stone-500">
                <ShieldCheck className="h-4.5 w-4.5 text-emerald-600" />
                <span>100% Edukatif & Gratis</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-stone-500">
                <Leaf className="h-4.5 w-4.5 text-emerald-600" />
                <span>Ramah Lingkungan</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right - Elegant interactive illustration */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md aspect-square bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-inner border border-emerald-200/40"
            >
              {/* Dynamic Leaf Animation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-emerald-300/20 border-dashed animate-[spin_40s_linear_infinite]" />
              
              <div className="z-10 flex justify-between items-start">
                <div className="bg-stone-50/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-emerald-100 flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-stone-700">Eco System Active</span>
                </div>
                <Leaf className="h-8 w-8 text-emerald-600 animate-bounce" />
              </div>

              {/* Main Earth SVG representation */}
              <div className="my-auto flex justify-center items-center relative py-6">
                <svg className="w-48 h-48 drop-shadow-lg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer circle halo */}
                  <circle cx="100" cy="100" r="90" stroke="#10b981" strokeWidth="1" strokeDasharray="5 5" className="opacity-40" />
                  
                  {/* Clean Earth Background */}
                  <circle cx="100" cy="100" r="75" fill="#d1fae5" />
                  
                  {/* Organic Green continents/shapes */}
                  <path d="M70 60 C80 50, 110 40, 130 50 C140 65, 120 85, 100 80 C80 75, 60 70, 70 60 Z" fill="#34d399" />
                  <path d="M120 110 C130 100, 150 120, 160 135 C155 150, 135 155, 115 140 C105 130, 110 120, 120 110 Z" fill="#10b981" />
                  <path d="M50 110 C60 100, 80 105, 85 120 C80 135, 60 145, 45 135 C35 125, 40 120, 50 110 Z" fill="#059669" />

                  {/* Seedling growing on top */}
                  <path d="M100 125 L100 65" stroke="#047857" strokeWidth="4" strokeLinecap="round" />
                  {/* Left leaf */}
                  <path d="M100 85 Q80 80 75 95 Q90 100 100 95" fill="#10b981" />
                  {/* Right leaf */}
                  <path d="M100 75 Q120 70 125 85 Q110 90 100 85" fill="#34d399" />
                </svg>

                {/* Floating Eco widgets */}
                <div className="absolute -top-1 -left-4 bg-stone-50/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-md border border-stone-100 flex items-center space-x-1.5 animate-pulse">
                  <span className="text-sm">🧴</span>
                  <span className="text-[11px] font-medium text-stone-700">Kurangi Plastik</span>
                </div>

                <div className="absolute bottom-2 -right-4 bg-stone-50/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-md border border-stone-100 flex items-center space-x-1.5 animate-pulse">
                  <span className="text-sm">♻️</span>
                  <span className="text-[11px] font-medium text-stone-700">Bisa Didaur Ulang</span>
                </div>
              </div>

              <div className="bg-stone-900/90 backdrop-blur-md rounded-2xl p-4 text-stone-100 border border-stone-800 shadow-md">
                <div className="flex justify-between items-center text-xs text-stone-400 font-mono mb-1">
                  <span>MISI BULAN INI</span>
                  <span className="text-emerald-400">82% Tercapai</span>
                </div>
                <p className="text-xs font-semibold text-stone-100">Kurangi kantong belanja sekali pakai & kelola sisa makanan organik dari rumah!</p>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Stats Section banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 border-t border-b border-stone-200/80 py-10 bg-white/50 backdrop-blur-xs rounded-2xl px-6">
          <div className="text-center md:border-r border-stone-200/60 last:border-0 px-4">
            <h3 className="font-display text-4xl font-extrabold text-stone-900 mb-1">8 Juta Ton</h3>
            <p className="text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-1">Sampah Plastik di Laut</p>
            <p className="text-xs text-stone-500 max-w-xs mx-auto">Masuk ke perairan samudera kita setiap tahun, mengancam ribuan biota laut.</p>
          </div>
          
          <div className="text-center md:border-r border-stone-200/60 last:border-0 px-4">
            <h3 className="font-display text-4xl font-extrabold text-amber-700 mb-1">450 Tahun</h3>
            <p className="text-xs font-semibold text-amber-800 tracking-wider uppercase mb-1">Waktu Dekomposisi</p>
            <p className="text-xs text-stone-500 max-w-xs mx-auto">Waktu yang dibutuhkan sebuah botol plastik tunggal untuk hancur menjadi mikroplastik.</p>
          </div>

          <div className="text-center last:border-0 px-4">
            <h3 className="font-display text-4xl font-extrabold text-emerald-600 mb-1">365 Hari</h3>
            <p className="text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-1">Gaya Hidup Berkelanjutan</p>
            <p className="text-xs text-stone-500 max-w-xs mx-auto">Setiap hari adalah kesempatan berharga untuk membuat bumi kita jauh lebih bersih.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
