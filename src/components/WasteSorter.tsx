/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, AlertCircle, RefreshCw, HelpCircle, Trophy, Award, ArrowRight } from 'lucide-react';
import { WasteItem, BinType } from '../types';

export default function WasteSorter() {
  const wastePool: WasteItem[] = [
    {
      id: '1',
      name: 'Kulit Pisang',
      category: 'organik',
      description: 'Kulit pisang mudah membusuk secara alami di alam dan sangat kaya akan unsur nitrogen yang menyuburkan tanah.',
      alternative: 'Masukkan ke komposter rumahan atau manfaatkan untuk pupuk kulit pisang cair langsung.',
      icon: '🍌',
      point: 10,
    },
    {
      id: '2',
      name: 'Botol Plastik Air Mineral (PET)',
      category: 'anorganik',
      description: 'Botol PET merupakan salah satu jenis plastik dengan nilai ekonomi daur ulang paling tinggi. Harus dipilah dalam keadaan kosong.',
      alternative: 'Gunakan tumbler stainless steel isi ulang untuk menghindari botol kemasan sekali pakai sepenuhnya.',
      icon: '🍼',
      point: 10,
    },
    {
      id: '3',
      name: 'Baterai Bekas AA/AAA',
      category: 'b3',
      description: 'Baterai bekas mengandung zat kimia korosif dan logam berat berbahaya seperti kadmium dan merkuri yang meracuni air tanah.',
      alternative: 'Gunakan baterai isi ulang (rechargeable battery) yang tahan hingga ratusan kali siklus pemakaian.',
      icon: '🔋',
      point: 15,
    },
    {
      id: '4',
      name: 'Sisa Potongan Sayuran',
      category: 'organik',
      description: 'Limbah dapur organik ini menyusun hampir 50% dari total sampah harian rumah tangga Indonesia dan memicu timbunan gas metana jika menumpuk di TPA.',
      alternative: 'Kelola dengan metode pengomposan (takakura, lubang biopori, atau komposter pot).',
      icon: '🥬',
      point: 10,
    },
    {
      id: '5',
      name: 'Kaleng Minuman Soda Aluminium',
      category: 'anorganik',
      description: 'Aluminium adalah bahan ajaib yang dapat didaur ulang tanpa batas waktu secara efisien tanpa menurunkan kualitas fisiknya sedikit pun.',
      alternative: 'Pilih minuman dalam kemasan botol kaca yang dapat dicuci ulang, atau buat jus buah segar sendiri di rumah.',
      icon: '🥫',
      point: 10,
    },
    {
      id: '6',
      name: 'Lampu Neon / LED Rusak',
      category: 'b3',
      description: 'Lampu bekas mengandung bubuk fosfor dan uap merkuri beracun yang dapat membahayakan pernapasan makhluk hidup jika pecah.',
      alternative: 'Kumpulkan terpisah dan salurkan ke pos penampungan limbah elektronik (E-waste) daerah terdekat.',
      icon: '💡',
      point: 15,
    },
    {
      id: '7',
      name: 'Kardus Box Karton',
      category: 'anorganik',
      description: 'Kardus terbuat dari serat kayu yang sangat mudah dihancurkan dan dicetak ulang menjadi produk kertas atau karton baru.',
      alternative: 'Gunakan kembali box kardus bekas untuk wadah penyimpanan barang di rumah sebelum akhirnya didaur ulang.',
      icon: '📦',
      point: 10,
    },
    {
      id: '8',
      name: 'Termometer Air Raksa',
      category: 'b3',
      description: 'Merkuri cair di dalam termometer klasik sangat beracun dan berbahaya bagi saraf jika pecah dan terpapar ke kulit atau terhirup.',
      alternative: 'Gunakan termometer digital bebas merkuri yang jauh lebih aman digunakan untuk keluarga di rumah.',
      icon: '🌡️',
      point: 15,
    },
  ];

  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  
  // Feedback states
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedBin, setSelectedBin] = useState<BinType | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const currentItem = wastePool[currentIndex];

  const handleSort = (bin: BinType) => {
    if (hasAnswered) return;

    const correct = currentItem.category === bin;
    setSelectedBin(bin);
    setIsAnswerCorrect(correct);
    setHasAnswered(true);

    if (correct) {
      setScore((prev) => prev + currentItem.point);
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setHasAnswered(false);
    setSelectedBin(null);
    
    if (currentIndex < wastePool.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setScore(0);
    setCurrentIndex(0);
    setCorrectCount(0);
    setGameOver(false);
    setHasAnswered(false);
    setSelectedBin(null);
  };

  return (
    <section id="permainan" className="py-20 bg-stone-50 border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full">
            Mini Edu-Game
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 mt-4 tracking-tight">
            Tantangan Milah Sampah Mandiri
          </h2>
          <p className="text-stone-600 mt-4 leading-relaxed font-sans text-sm sm:text-base">
            Uji kemampuan pemilahanmu! Pilih kategori tong sampah yang tepat untuk setiap item sampah berikut untuk menyelamatkan bumi dari timbunan racun.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          
          {/* Card Game Container */}
          <div className="bg-white rounded-3xl border border-stone-200/70 p-6 sm:p-10 shadow-md relative overflow-hidden">
            
            {/* Score & Progress Header */}
            <div className="flex justify-between items-center border-b border-stone-100 pb-5 mb-8">
              <div className="flex items-center space-x-2 text-xs text-stone-500 font-mono uppercase tracking-wider">
                <span>Progress:</span>
                <span className="font-bold text-stone-800">
                  {gameOver ? wastePool.length : currentIndex + 1} / {wastePool.length}
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 border border-emerald-100 px-3.5 py-1 rounded-xl">
                <Trophy className="h-4 w-4 text-emerald-600" />
                <span className="text-xs font-mono font-bold">Skor: {score}</span>
              </div>
            </div>

            {!gameOver ? (
              <div className="space-y-8">
                
                {/* Trash Card Container */}
                <div className="flex flex-col items-center justify-center py-6 bg-gradient-to-b from-stone-50 to-stone-100/50 rounded-2xl border border-stone-200/30 shadow-inner relative">
                  <motion.div
                    key={currentIndex}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="flex flex-col items-center"
                  >
                    <span className="text-6xl sm:text-7xl mb-4 drop-shadow-md animate-bounce" role="img" aria-label={currentItem.name}>
                      {currentItem.icon}
                    </span>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-stone-900">
                      {currentItem.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 font-mono uppercase tracking-widest">
                      Nilai: {currentItem.point} Poin
                    </p>
                  </motion.div>
                </div>

                {/* Bins selection */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Organik Bin */}
                  <button
                    onClick={() => handleSort('organik')}
                    disabled={hasAnswered}
                    className={`group border-2 rounded-2xl p-4 transition-all duration-200 flex flex-col items-center justify-center ${
                      hasAnswered
                        ? currentItem.category === 'organik'
                          ? 'border-emerald-600 bg-emerald-50/50 text-emerald-800'
                          : selectedBin === 'organik'
                          ? 'border-red-400 bg-red-50/30 text-stone-400'
                          : 'opacity-50 border-stone-200 bg-stone-50/30 text-stone-400'
                        : 'border-stone-200 hover:border-emerald-600 hover:bg-emerald-50/20 text-stone-700 cursor-pointer'
                    }`}
                  >
                    <span className="text-3xl mb-2">🟢</span>
                    <span className="font-display font-bold text-sm tracking-wide">ORGANIK</span>
                    <span className="text-[10px] text-stone-400 mt-1 text-center font-sans">Sisa makanan, daun, bahan organik</span>
                  </button>

                  {/* Anorganik Bin */}
                  <button
                    onClick={() => handleSort('anorganik')}
                    disabled={hasAnswered}
                    className={`group border-2 rounded-2xl p-4 transition-all duration-200 flex flex-col items-center justify-center ${
                      hasAnswered
                        ? currentItem.category === 'anorganik'
                          ? 'border-blue-600 bg-blue-50/50 text-blue-800'
                          : selectedBin === 'anorganik'
                          ? 'border-red-400 bg-red-50/30 text-stone-400'
                          : 'opacity-50 border-stone-200 bg-stone-50/30 text-stone-400'
                        : 'border-stone-200 hover:border-blue-600 hover:bg-blue-50/20 text-stone-700 cursor-pointer'
                    }`}
                  >
                    <span className="text-3xl mb-2">🔵</span>
                    <span className="font-display font-bold text-sm tracking-wide">ANORGANIK</span>
                    <span className="text-[10px] text-stone-400 mt-1 text-center font-sans">Plastik, kaleng, kertas, kardus</span>
                  </button>

                  {/* B3 Bin */}
                  <button
                    onClick={() => handleSort('b3')}
                    disabled={hasAnswered}
                    className={`group border-2 rounded-2xl p-4 transition-all duration-200 flex flex-col items-center justify-center ${
                      hasAnswered
                        ? currentItem.category === 'b3'
                          ? 'border-red-600 bg-red-50/50 text-red-800'
                          : selectedBin === 'b3'
                          ? 'border-red-400 bg-red-50/30 text-stone-400'
                          : 'opacity-50 border-stone-200 bg-stone-50/30 text-stone-400'
                        : 'border-stone-200 hover:border-red-600 hover:bg-red-50/20 text-stone-700 cursor-pointer'
                    }`}
                  >
                    <span className="text-3xl mb-2">🔴</span>
                    <span className="font-display font-bold text-sm tracking-wide">LIMBAH B3</span>
                    <span className="text-[10px] text-stone-400 mt-1 text-center font-sans">Baterai, lampu, zat kimia, e-waste</span>
                  </button>
                </div>

                {/* Feedback Box */}
                <AnimatePresence>
                  {hasAnswered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-5 rounded-2xl border ${
                        isAnswerCorrect
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                          : 'bg-red-50 border-red-200 text-red-950'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="mt-0.5">
                          {isAnswerCorrect ? (
                            <ShieldCheck className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                          )}
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <span className="font-bold text-sm block">
                              {isAnswerCorrect ? '🎉 Luar Biasa, Jawaban Benar!' : '⚠️ Hampir Tepat!'}
                            </span>
                            <p className="text-xs mt-1 text-stone-600 leading-relaxed">
                              {currentItem.description}
                            </p>
                          </div>
                          <div className="bg-white/80 p-3 rounded-xl border border-stone-200/40 text-xs text-stone-700">
                            <strong>🌱 Alternatif Mengurangi:</strong> {currentItem.alternative}
                          </div>
                          
                          <div className="flex justify-end">
                            <button
                              onClick={handleNext}
                              className="bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors"
                            >
                              <span>
                                {currentIndex < wastePool.length - 1 ? 'Lanjut Item Berikutnya' : 'Lihat Hasil Akhir'}
                              </span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ) : (
              /* Game Over Screen */
              <div className="text-center py-10 space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 border-4 border-emerald-200 text-emerald-600 mb-2">
                  <Award className="h-10 w-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-stone-900">Tantangan Selesai!</h3>
                  <p className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                    Kamu berhasil mengidentifikasi dan memilah sampah dengan sangat baik. Mari pertahankan kebiasaan baik ini di kehidupan nyata!
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto bg-stone-50 rounded-2xl p-4 border border-stone-200/50">
                  <div>
                    <span className="text-[10px] text-stone-400 font-mono uppercase block">Benar</span>
                    <span className="text-2xl font-extrabold text-stone-900 font-display">{correctCount} / {wastePool.length}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-mono uppercase block">Total Skor</span>
                    <span className="text-2xl font-extrabold text-emerald-700 font-display">{score} pts</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={resetGame}
                    className="bg-emerald-700 hover:bg-emerald-800 text-stone-50 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center space-x-2 mx-auto shadow-sm"
                  >
                    <RefreshCw className="h-4 w-4" />
                    <span>Ulangi Tantangan</span>
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
