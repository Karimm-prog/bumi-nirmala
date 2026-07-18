/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Ban, Trash2, RotateCcw, RefreshCw, Leaf, ArrowRight, ShieldAlert, Sparkles, Trophy } from 'lucide-react';
import { AlternativeItem } from '../types';

export default function Edukasi5R() {
  const [activeTab, setActiveTab] = useState<'5r' | 'alternatif'>('5r');
  const [expandedR, setExpandedR] = useState<number | null>(null);

  const steps5R = [
    {
      number: 1,
      title: 'Refuse (Menolak)',
      desc: 'Menolak barang sekali pakai atau kemasan yang tidak ramah lingkungan sejak awal.',
      example: 'Katakan tidak pada sedotan plastik, kantong kresek di kasir, dan brosur kertas fisik.',
      impact: 'Mencegah sampah diproduksi sejak awal (efek paling maksimal).',
      icon: <Ban className="h-6 w-6 text-red-500" />,
      color: 'border-red-200 bg-red-50/20 hover:bg-red-50/50'
    },
    {
      number: 2,
      title: 'Reduce (Mengurangi)',
      desc: 'Mengurangi konsumsi barang secara berlebihan dan membatasi pembelian barang yang berpotensi menjadi sampah.',
      example: 'Membeli produk dalam ukuran besar (bulk) dibanding saset kecil, merencanakan belanjaan agar tidak ada makanan sisa.',
      impact: 'Menghemat sumber daya alam bumi dan menekan volume sampah pribadi.',
      icon: <Trash2 className="h-6 w-6 text-amber-500" />,
      color: 'border-amber-200 bg-amber-50/20 hover:bg-amber-50/50'
    },
    {
      number: 3,
      title: 'Reuse (Menggunakan Kembali)',
      desc: 'Memaksimalkan masa pakai barang yang sudah ada dengan menggunakan kembali atau mengalihfungsikannya.',
      example: 'Memakai kembali botol kaca bekas selai untuk wadah bumbu dapur, membawa botol minum dan wadah makan sendiri.',
      impact: 'Meningkatkan nilai guna barang dan meminimalkan ketergantungan pada produk baru.',
      icon: <RotateCcw className="h-6 w-6 text-emerald-500" />,
      color: 'border-emerald-200 bg-emerald-50/20 hover:bg-emerald-50/50'
    },
    {
      number: 4,
      title: 'Recycle (Mendaur Ulang)',
      desc: 'Mengolah kembali sampah anorganik menjadi produk baru yang bernilai guna melalui proses industri.',
      example: 'Memilah kertas bekas, botol plastik PET, dan kaleng aluminium untuk disalurkan ke bank sampah atau pusat daur ulang.',
      impact: 'Mengembalikan materi sampah kembali ke siklus produksi dan mengurangi beban TPA.',
      icon: <RefreshCw className="h-6 w-6 text-blue-500" />,
      color: 'border-blue-200 bg-blue-50/20 hover:bg-blue-50/50'
    },
    {
      number: 5,
      title: 'Rot (Membusukkan / Kompos)',
      desc: 'Mengembalikan sisa sampah organik dapur kembali ke tanah menjadi pupuk kaya nutrisi.',
      example: 'Membuat kompos dari sisa potongan sayur, kulit buah, daun kering, dan ampas kopi di halaman rumah.',
      impact: 'Mencegah sampah organik membusuk anaerobik di TPA yang menghasilkan gas metana berbahaya.',
      icon: <Leaf className="h-6 w-6 text-lime-600" />,
      color: 'border-lime-200 bg-lime-50/20 hover:bg-lime-50/50'
    }
  ];

  const alternatives: AlternativeItem[] = [
    {
      id: '1',
      original: 'Kantong Plastik Sekali Pakai',
      replacement: 'Tas Belanja Lipat & Totebag Katun',
      benefits: 'Tahan lama, bisa dicuci, hemat biaya jangka panjang, dan tidak mudah robek.',
      difficulty: 'Mudah',
      impactIcon: '🛍️'
    },
    {
      id: '2',
      original: 'Botol Air Mineral Plastik',
      replacement: 'Tumbler Stainless Steel / Kaca',
      benefits: 'Menjaga air tetap dingin/hangat lebih lama, menghemat puluhan ribu rupiah per minggu.',
      difficulty: 'Mudah',
      impactIcon: '🥤'
    },
    {
      id: '3',
      original: 'Sedotan Plastik Sekali Pakai',
      replacement: 'Sedotan Stainless Steel / Bambu / Kertas',
      benefits: 'Bisa dibersihkan dengan sikat khusus, ramah lingkungan, terlihat jauh lebih estetik.',
      difficulty: 'Mudah',
      impactIcon: '🍹'
    },
    {
      id: '4',
      original: 'Wadah Styrofoam / Plastik Makanan',
      replacement: 'Wadah Makan Kaca / Silikon / Rantang',
      benefits: 'Lebih higienis, bebas bahan kimia berbahaya saat makanan panas, dapat dipanaskan di microwave.',
      difficulty: 'Sedang',
      impactIcon: '🍱'
    },
    {
      id: '5',
      original: 'Spons Cuci Piring Sintetis',
      replacement: 'Spons Loofah Alami / Sabut Kelapa',
      benefits: '100% biodegradable (bisa dikompos saat rusak), tidak melepas mikroplastik ke air.',
      difficulty: 'Sedang',
      impactIcon: '🧽'
    },
    {
      id: '6',
      original: 'Sikat Gigi Plastik Konvensional',
      replacement: 'Sikat Gigi Bambu dengan Bulu Nilon Bebas BPA',
      benefits: 'Gagang bambu dapat dikompos alami di tanah, mengurangi ratusan sikat gigi abadi di laut.',
      difficulty: 'Mudah',
      impactIcon: '🪥'
    },
    {
      id: '7',
      original: 'Pembalut Sekali Pakai',
      replacement: 'Menstrual Cup / Pembalut Kain Cuci Ulang',
      benefits: 'Mencegah iritasi kulit, bertahan hingga 10 tahun, mengurangi ribuan kilogram sampah per wanita.',
      difficulty: 'Tantangan',
      impactIcon: '🩸'
    },
    {
      id: '8',
      original: 'Sabun Cair Botol Plastik',
      replacement: 'Sabun Batang (Bar Soap) Ramah Lingkungan',
      benefits: 'Bebas kemasan plastik, lebih hemat karena tidak mudah tumpah, minim jejak karbon transportasi.',
      difficulty: 'Mudah',
      impactIcon: '🧼'
    }
  ];

  return (
    <section id="edukasi" className="py-20 bg-stone-50 border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full">
            Edukasi Keberlanjutan
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 mt-4 tracking-tight">
            Pahami Fondasi Gaya Hidup Minim Sampah
          </h2>
          <p className="text-stone-600 mt-4 leading-relaxed font-sans text-sm sm:text-base">
            Sebelum melangkah lebih jauh, mari kuasai konsep dasar 5R dan temukan alternatif ramah lingkungan terbaik yang bisa langsung kamu terapkan dalam keseharianmu.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="bg-stone-100 p-1 rounded-2xl flex space-x-1 border border-stone-200/60 shadow-sm">
            <button
              onClick={() => setActiveTab('5r')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center space-x-2 ${
                activeTab === '5r'
                  ? 'bg-emerald-700 text-stone-50 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Leaf className="h-4 w-4" />
              <span>Hierarki 5R</span>
            </button>
            <button
              onClick={() => setActiveTab('alternatif')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'alternatif'
                  ? 'bg-emerald-700 text-stone-50 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Sparkles className="h-4 w-4" />
              <span>Alternatif Ramah Lingkungan</span>
            </button>
          </div>
        </div>

        {/* Tab Contents: 5R */}
        {activeTab === '5r' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-2xl border border-stone-200/70 shadow-xs text-xs sm:text-sm text-stone-600 flex items-start space-x-3 mb-6">
              <ShieldAlert className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Catatan Penting:</strong> Konsep 5R diurutkan berdasarkan skala efektivitasnya. Cara terbaik adalah selalu memprioritaskan <strong>Refuse</strong> dan <strong>Reduce</strong> sebelum melompat ke daur ulang (Recycle), karena daur ulang masih membutuhkan energi besar.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {steps5R.map((step, idx) => {
                const isExpanded = expandedR === idx;
                return (
                  <motion.div
                    key={step.number}
                    layout="position"
                    className={`border rounded-2xl p-6 transition-all duration-300 cursor-pointer ${step.color} ${
                      isExpanded ? 'ring-2 ring-emerald-600/30 shadow-md' : 'shadow-xs'
                    }`}
                    onClick={() => setExpandedR(isExpanded ? null : idx)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-xs border border-stone-100">
                          {step.icon}
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-stone-400 font-mono">LANGKAH 0{step.number}</div>
                          <h3 className="font-display font-bold text-base sm:text-lg text-stone-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                        {isExpanded ? 'Tutup Detail' : 'Pelajari Selengkapnya'}
                      </span>
                    </div>

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-stone-200/60 flex flex-col space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed"
                      >
                        <div>
                          <span className="font-semibold text-stone-900 block mb-1">💡 Penjelasan Singkat:</span>
                          <p>{step.desc}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-stone-900 block mb-1">🌱 Contoh di Keseharian:</span>
                          <p className="bg-white/80 p-3 rounded-xl border border-stone-200/50 italic text-stone-700">
                            "{step.example}"
                          </p>
                        </div>
                        <div>
                          <span className="font-semibold text-emerald-900 block mb-1 flex items-center space-x-1.5">
                            <Trophy className="h-4 w-4 text-emerald-600" />
                            <span>Dampak Nyata:</span>
                          </span>
                          <p className="text-emerald-900 font-medium">{step.impact}</p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab Contents: Alternatif Ramah Lingkungan */}
        {activeTab === 'alternatif' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {alternatives.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-200/70 p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-3xl" role="img" aria-label="Eco item">
                      {item.impactIcon}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide uppercase ${
                        item.difficulty === 'Mudah'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                          : item.difficulty === 'Sedang'
                          ? 'bg-amber-50 text-amber-800 border border-amber-100'
                          : 'bg-red-50 text-red-800 border border-red-100'
                      }`}
                    >
                      Kesulitan: {item.difficulty}
                    </span>
                  </div>

                  {/* Comparison Layout */}
                  <div className="flex flex-col space-y-3">
                    <div className="bg-red-50/40 p-3 rounded-xl border border-red-100/40 flex items-start space-x-2.5">
                      <div className="bg-red-100 p-1 rounded-md text-red-700 mt-0.5 text-xs font-bold font-mono">SEBELUM</div>
                      <div>
                        <p className="text-xs text-red-900 line-through font-medium">{item.original}</p>
                      </div>
                    </div>

                    <div className="flex justify-center py-0.5">
                      <ArrowRight className="h-4 w-4 text-stone-400 rotate-90 md:rotate-0" />
                    </div>

                    <div className="bg-emerald-50/40 p-3 rounded-xl border border-emerald-100/40 flex items-start space-x-2.5">
                      <div className="bg-emerald-100 p-1 rounded-md text-emerald-700 mt-0.5 text-xs font-bold font-mono">SETELAH</div>
                      <div>
                        <p className="text-xs sm:text-sm text-emerald-950 font-semibold">{item.replacement}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-stone-500 mt-4 leading-relaxed">
                    <strong>Manfaat:</strong> {item.benefits}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
