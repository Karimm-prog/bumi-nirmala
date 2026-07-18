/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CloudLightning, Github, Sparkles, CheckCircle2, ArrowRight, BookOpen, ExternalLink } from 'lucide-react';

interface DeployGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeployGuide({ isOpen, onClose }: DeployGuideProps) {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: 'Unggah Kode ke GitHub',
      icon: <Github className="h-5 w-5 text-stone-900" />,
      desc: 'Simpan semua berkas landing page ini ke dalam repositori GitHub pribadimu.',
      substeps: [
        'Masuk ke akun github.com milikmu.',
        'Buat repositori baru bernama bumi-nirmala dan atur sebagai Public.',
        'Gunakan Git untuk mengunggah semua folder project ini, atau klik "upload an existing file" di web GitHub lalu seret semua berkas dari komputermu.',
      ]
    },
    {
      number: 2,
      title: 'Masuk ke Vercel',
      icon: <CloudLightning className="h-5 w-5 text-blue-500" />,
      desc: 'Hubungkan platform Vercel dengan akun GitHub agar sinkronisasi otomatis.',
      substeps: [
        'Buka vercel.com dan lakukan registrasi/masuk menggunakan tombol "Continue with GitHub".',
        'Berikan izin akses verifikatif agar Vercel dapat membaca repositori publikmu.',
      ]
    },
    {
      number: 3,
      title: 'Deploy Dalam Satu Klik',
      icon: <Sparkles className="h-5 w-5 text-emerald-500 animate-pulse" />,
      desc: 'Lakukan instalasi build otomatis dalam hitungan detik.',
      substeps: [
        'Pada dashboard Vercel, klik tombol "Add New..." lalu pilih "Project".',
        'Cari repositori bumi-nirmala lalu klik tombol "Import".',
        'Vercel otomatis mendeteksi Vite. Langsung saja klik tombol "Deploy" tanpa perlu mengubah konfigurasi apapun!',
        'Selesai! Landing page interaktifmu kini online dan siap diakses publik.',
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl border border-stone-200 shadow-2xl w-full max-w-2xl overflow-hidden z-10 relative flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 text-stone-50 p-6 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <CloudLightning className="h-6 w-6 text-emerald-400" />
              <div>
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-stone-50">Panduan GitHub & Vercel</h3>
                <p className="text-[10px] text-emerald-200 uppercase font-mono font-bold tracking-wider">Hanya Butuh Waktu Kurang Dari 5 Menit!</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all text-stone-50"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body Scrollable */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            
            {/* Step indicators */}
            <div className="flex items-center justify-between border-b border-stone-200/60 pb-5">
              {steps.map((st) => (
                <button
                  key={st.number}
                  onClick={() => setActiveStep(st.number)}
                  className={`flex items-center space-x-2 pb-1.5 border-b-2 transition-colors relative ${
                    activeStep === st.number
                      ? 'border-emerald-600 text-emerald-800 font-bold'
                      : 'border-transparent text-stone-500 hover:text-stone-800'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full text-xs font-mono font-bold flex items-center justify-center ${
                    activeStep === st.number ? 'bg-emerald-600 text-stone-50' : 'bg-stone-200 text-stone-600'
                  }`}>
                    {st.number}
                  </span>
                  <span className="text-xs hidden sm:inline">{st.title}</span>
                </button>
              ))}
            </div>

            {/* Active step content */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3.5 bg-stone-50 p-4 rounded-2xl border border-stone-200/50">
                <div className="bg-white p-2.5 rounded-xl border border-stone-200/30 shadow-xs flex-shrink-0 mt-0.5">
                  {steps[activeStep - 1].icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-stone-900">
                    {steps[activeStep - 1].title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    {steps[activeStep - 1].desc}
                  </p>
                </div>
              </div>

              {/* Substeps list */}
              <div className="space-y-2.5 pl-4">
                {steps[activeStep - 1].substeps.map((sub, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700 leading-relaxed font-sans">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Package.json snippet helper (for build validation) */}
            <div className="bg-stone-900 rounded-2xl p-4 text-stone-300 font-mono text-[11px] space-y-2">
              <div className="flex justify-between items-center text-[10px] text-stone-400 border-b border-white/5 pb-2">
                <span>VERCEL BUILD CONFIGURATION</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-md uppercase font-mono font-bold">Auto</span>
              </div>
              <p className="text-stone-400">Vercel akan otomatis mengenali Vite SPA milikmu. Konfigurasi build:</p>
              <pre className="text-emerald-400 text-xs overflow-x-auto bg-stone-950/60 p-3 rounded-xl border border-white/5">
{`"scripts": {
  "build": "vite build"
}`}
              </pre>
              <p className="text-[10px] text-stone-400 leading-relaxed">
                Output build static berada pada folder <code className="text-stone-300">dist/</code>. Vercel akan menyebarkan aset-aset ini secara instan di CDN global mereka.
              </p>
            </div>

          </div>

          {/* Footer Controls */}
          <div className="bg-stone-50 border-t border-stone-200/80 p-5 flex justify-between items-center">
            <span className="text-xs text-stone-500 flex items-center space-x-1">
              <BookOpen className="h-4 w-4 text-emerald-600" />
              <span>Semoga beruntung dengan rilis pertamamu!</span>
            </span>

            <div className="flex items-center space-x-2">
              {activeStep < 3 ? (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="bg-emerald-700 hover:bg-emerald-800 text-stone-50 px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1 transition-colors"
                >
                  <span>Lanjut Langkah {activeStep + 1}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="bg-stone-900 hover:bg-stone-800 text-stone-50 px-4 py-2 rounded-xl text-xs font-semibold transition-colors"
                >
                  Selesai & Tutup
                </button>
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
