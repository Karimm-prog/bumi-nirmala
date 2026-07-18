/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, CheckSquare, Square, Award, Sparkles, Send, Share2, Download, Printer, User } from 'lucide-react';
import { PledgeItem } from '../types';

export default function PledgeBoard() {
  const pledges: PledgeItem[] = [
    { id: '1', text: 'Membawa botol minum (tumbler) sendiri saat bepergian.', impactLabel: 'Mengurangi ~150 botol plastik per tahun', points: 15 },
    { id: '2', text: 'Membawa tas belanja kain sendiri saat berbelanja di pasar atau swalayan.', impactLabel: 'Mengurangi ~250 kantong plastik per tahun', points: 20 },
    { id: '3', text: 'Menghindari sedotan plastik sekali pakai dan alat makan plastik.', impactLabel: 'Mengurangi ~100 sedotan plastik per tahun', points: 10 },
    { id: '4', text: 'Menghabiskan makanan piring sendiri untuk menghindari sisa organik dapur.', impactLabel: 'Mengurangi emisi gas metana di TPA lokal', points: 25 },
    { id: '5', text: 'Memilah sampah organik dan anorganik dari rumah.', impactLabel: 'Memudahkan proses daur ulang hingga 90%', points: 30 },
    { id: '6', text: 'Menggunakan sabun mandi/sampo batangan dibanding kemasan botol plastik.', impactLabel: 'Mengurangi ~12 botol kosmetik plastik per tahun', points: 15 },
  ];

  const [userName, setUserName] = useState('');
  const [selectedPledges, setSelectedPledges] = useState<string[]>(['1', '2']);
  const [showCertificate, setShowCertificate] = useState(false);
  const [pledgedName, setPledgedName] = useState('');
  const [shareSuccess, setShareSuccess] = useState(false);

  const togglePledge = (id: string) => {
    if (selectedPledges.includes(id)) {
      setSelectedPledges((prev) => prev.filter((item) => item !== id));
    } else {
      setSelectedPledges((prev) => [...prev, id]);
    }
  };

  const calculatePoints = () => {
    return selectedPledges.reduce((total, id) => {
      const pledge = pledges.find((p) => p.id === id);
      return total + (pledge ? pledge.points : 0);
    }, 0);
  };

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) {
      alert('Silakan masukkan namamu terlebih dahulu untuk piagam komitmen.');
      return;
    }
    setPledgedName(userName);
    setShowCertificate(true);
  };

  const handleShare = () => {
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 2500);
  };

  const getPledgeLevel = (points: number) => {
    if (points >= 80) return { title: 'Pahlawan Hijau Mandiri (Eco Hero)', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (points >= 40) return { title: 'Duta Pelopor Lingkungan (Eco Guardian)', color: 'text-blue-700 bg-blue-50 border-blue-200' };
    return { title: 'Sahabat Hijau Pemula (Eco Rookie)', color: 'text-amber-700 bg-amber-50 border-amber-200' };
  };

  const level = getPledgeLevel(calculatePoints());

  return (
    <section id="komitmen" className="py-20 bg-white border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full">
            Komitmen Nyata
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 mt-4 tracking-tight">
            Ambil Komitmen Hijau untuk Masa Depan Bumi
          </h2>
          <p className="text-stone-600 mt-4 leading-relaxed font-sans text-sm sm:text-base">
            Perubahan besar selalu bermula dari langkah kecil yang konsisten. Pilih komitmen minim sampah harianmu, masukkan nama, dan dapatkan piagam komitmen digital khusus Bumi Nirmala.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form: Pledge selectors */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/60 shadow-sm">
              <h3 className="font-display font-bold text-lg text-stone-900 mb-6 flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-emerald-600" />
                <span>Pilih Komitmen Gaya Hidupmu:</span>
              </h3>

              <div className="space-y-4">
                {pledges.map((item) => {
                  const isChecked = selectedPledges.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => togglePledge(item.id)}
                      className={`flex items-start space-x-3.5 p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isChecked
                          ? 'border-emerald-600 bg-white shadow-xs ring-1 ring-emerald-600/20'
                          : 'border-stone-200 bg-stone-50/50 hover:bg-white hover:border-stone-300'
                      }`}
                    >
                      <button className="flex-shrink-0 mt-0.5 text-emerald-600">
                        {isChecked ? (
                          <CheckSquare className="h-5 w-5 fill-emerald-50 text-emerald-700" />
                        ) : (
                          <Square className="h-5 w-5 text-stone-400" />
                        )}
                      </button>
                      <div className="flex-1">
                        <span className="text-xs sm:text-sm font-semibold text-stone-800 block">
                          {item.text}
                        </span>
                        <span className="text-[10px] sm:text-xs text-emerald-600 font-medium block mt-1">
                          🌱 Estimasi Dampak: {item.impactLabel}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-md">
                        +{item.points} Pts
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* User Identity Form */}
              <form onSubmit={handlePledgeSubmit} className="mt-8 pt-6 border-t border-stone-200/60 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-xs font-bold text-stone-700 block flex items-center space-x-1">
                    <User className="h-4 w-4 text-emerald-600" />
                    <span>Masukkan Namamu:</span>
                  </label>
                  <input
                    id="user_name"
                    type="text"
                    required
                    maxLength={30}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Nama lengkap untuk piagam komitmen..."
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all duration-200"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-stone-500">
                    Total Komitmen: <strong className="text-emerald-700 font-bold">{selectedPledges.length} Kebiasaan</strong>
                  </div>
                  <button
                    type="submit"
                    disabled={selectedPledges.length === 0}
                    className="bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed text-stone-50 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center space-x-1.5 shadow-md shadow-emerald-950/10"
                  >
                    <Award className="h-4 w-4" />
                    <span>Buat Piagam Komitmen</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Display: Animated Digital Certificate */}
          <div className="lg:col-span-6 flex justify-center items-center w-full">
            <AnimatePresence mode="wait">
              {showCertificate ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col space-y-4"
                >
                  {/* Piagam Certificate layout */}
                  <div className="bg-radial from-stone-50 via-amber-50/10 to-stone-100 border-[10px] border-double border-amber-800/40 rounded-3xl p-6 sm:p-8 shadow-xl text-center relative overflow-hidden">
                    {/* Background seals */}
                    <div className="absolute -top-12 -left-12 w-32 h-32 bg-emerald-700/5 rounded-full" />
                    <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-amber-700/5 rounded-full" />

                    <div className="border border-amber-800/20 p-5 rounded-2xl flex flex-col items-center">
                      {/* Leaf badge header */}
                      <div className="inline-flex items-center justify-center bg-emerald-50 border border-emerald-200 rounded-full p-2.5 text-emerald-700 mb-4 shadow-xs">
                        <Leaf className="h-6 w-6" />
                      </div>

                      <span className="font-mono text-[9px] uppercase tracking-widest text-amber-800 font-bold">PIAGAM KOMITMEN HIJAU</span>
                      <h4 className="font-display font-extrabold text-xl sm:text-2xl text-stone-900 mt-1">Bumi Nirmala</h4>
                      
                      <div className="w-16 h-0.5 bg-amber-700/30 my-4" />

                      <p className="text-xs text-stone-500 italic font-sans">Dengan ini menyatakan bahwa:</p>
                      
                      <h5 className="font-display font-extrabold text-lg sm:text-2xl text-stone-900 my-3 tracking-tight underline decoration-amber-600/30 underline-offset-8">
                        {pledgedName}
                      </h5>

                      <p className="text-xs text-stone-600 max-w-sm leading-relaxed mb-4">
                        Telah mengambil komitmen nyata dalam mempraktikkan hidup minim sampah (Zero Waste Lifestyle) melalui habit harian berwawasan lingkungan:
                      </p>

                      {/* Selected habits checklist */}
                      <div className="w-full max-w-xs space-y-1.5 text-left bg-white/60 backdrop-blur-xs p-4 rounded-xl border border-stone-200/50 mb-4">
                        {selectedPledges.map((id, idx) => {
                          const pl = pledges.find((p) => p.id === id);
                          return (
                            <div key={id} className="text-[11px] text-stone-700 font-medium flex items-center space-x-1.5">
                              <span className="text-emerald-600">✓</span>
                              <span className="truncate">{pl?.text}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full border text-xs font-semibold mb-6 shadow-xs font-display uppercase tracking-wide">
                        <span>Peringkat:</span>
                        <span className="font-extrabold text-emerald-800">{level.title.split(' (')[0]}</span>
                      </div>

                      {/* Seal Stamper style */}
                      <div className="flex justify-between items-center w-full mt-2 pt-4 border-t border-stone-200/50">
                        <div className="text-left text-[9px] text-stone-400 font-mono">
                          <span>Dikeluarkan: Juli 2026</span> <br />
                          <span>Kode: EN-{(selectedPledges.length * 993).toString().padStart(4, '0')}</span>
                        </div>

                        {/* Stamp */}
                        <div className="w-16 h-16 rounded-full border-4 border-emerald-600/30 border-dashed flex items-center justify-center rotate-12 text-center flex-col p-1.5">
                          <span className="text-[7px] text-emerald-700 font-bold font-mono uppercase tracking-tighter">BUMI NIRMALA</span>
                          <span className="text-[8px] text-emerald-950 font-bold">WARGA HIJAU</span>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Actions buttons under certificate */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleShare}
                      className="flex-1 bg-stone-900 hover:bg-stone-800 text-stone-50 px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 flex items-center justify-center space-x-1.5 shadow-sm"
                    >
                      <Share2 className="h-4 w-4" />
                      <span>{shareSuccess ? 'Tautan Disalin!' : 'Bagikan Komitmen'}</span>
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="bg-stone-100 hover:bg-stone-200 text-stone-700 px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 flex items-center justify-center space-x-1.5"
                    >
                      <Printer className="h-4 w-4" />
                      <span>Cetak Piagam</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Prompt to create certificate placeholder style card */
                <div className="w-full bg-stone-50 border-2 border-dashed border-stone-300 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[350px]">
                  <div className="w-16 h-16 rounded-2xl bg-stone-200/50 text-stone-400 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h4 className="font-display font-bold text-stone-800 text-base">Piagam Komitmen Belum Dibuat</h4>
                  <p className="text-xs text-stone-500 max-w-xs mt-1.5 leading-relaxed">
                    Pilih komitmen harianmu di sebelah kiri, masukkan namamu, lalu tekan tombol <strong>"Buat Piagam Komitmen"</strong> untuk mengunduh piagam Warga Hijau Bumi Nirmala milikmu!
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
