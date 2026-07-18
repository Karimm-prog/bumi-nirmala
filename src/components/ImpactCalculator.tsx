/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, Sparkles, RefreshCw, AlertCircle, Trees, Trophy, Flame } from 'lucide-react';
import { ImpactInputs, ImpactResults } from '../types';

export default function ImpactCalculator() {
  const [inputs, setInputs] = useState<ImpactInputs>({
    plasticBags: 5,
    plasticBottles: 4,
    plasticCups: 3,
    straws: 6,
    foodContainers: 2,
  });

  const [results, setResults] = useState<ImpactResults>({
    annualWasteCount: 0,
    annualWeightKg: 0,
    carbonFootprintKg: 0,
    comparisonAnimal: '',
    treesRequired: 0,
  });

  const [isCalculated, setIsCalculated] = useState(false);

  // Constants for calculations
  // Weight averages per item in grams
  const WEIGHT_BAG = 8;
  const WEIGHT_BOTTLE = 15;
  const WEIGHT_CUP = 12;
  const WEIGHT_STRAW = 1.2;
  const WEIGHT_CONTAINER = 16;

  // CO2 Emissions factors per kg of plastic ~ 6 kg CO2 per kg plastic (lifecycle)
  const CO2_FACTOR = 6; 

  useEffect(() => {
    // Total weekly counts
    const weeklyCount = 
      inputs.plasticBags + 
      inputs.plasticBottles + 
      inputs.plasticCups + 
      inputs.straws + 
      inputs.foodContainers;

    const annualCount = weeklyCount * 52;

    // Total weight in grams per week, converted to kg per year
    const weeklyWeightG = 
      (inputs.plasticBags * WEIGHT_BAG) + 
      (inputs.plasticBottles * WEIGHT_BOTTLE) + 
      (inputs.plasticCups * WEIGHT_CUP) + 
      (inputs.straws * WEIGHT_STRAW) + 
      (inputs.foodContainers * WEIGHT_CONTAINER);

    const annualWeightKg = Math.round(((weeklyWeightG * 52) / 1000) * 10) / 10;

    // Carbon emissions (CO2)
    const carbonFootprintKg = Math.round((annualWeightKg * CO2_FACTOR) * 10) / 10;

    // One mature tree absorbs ~22 kg CO2 per year
    const treesRequired = Math.ceil(carbonFootprintKg / 22);

    // Fun & impactful comparisons
    let comparisonAnimal = '';
    if (annualWeightKg < 5) {
      comparisonAnimal = 'setara berat seekor kucing rumahan dewasa (4 kg).';
    } else if (annualWeightKg < 15) {
      comparisonAnimal = 'setara berat seekor anjing ras Beagle (12 kg).';
    } else if (annualWeightKg < 40) {
      comparisonAnimal = 'setara berat seekor lumba-lumba kecil (30 kg).';
    } else if (annualWeightKg < 100) {
      comparisonAnimal = 'setara berat seekor kambing kurban dewasa (65 kg).';
    } else {
      comparisonAnimal = 'setara berat seekor penyu belimbing raksasa dewasa (150 kg!).';
    }

    setResults({
      annualWasteCount: annualCount,
      annualWeightKg,
      carbonFootprintKg,
      comparisonAnimal,
      treesRequired,
    });
    setIsCalculated(true);
  }, [inputs]);

  const handleSliderChange = (name: keyof ImpactInputs, value: number) => {
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetInputs = () => {
    setInputs({
      plasticBags: 0,
      plasticBottles: 0,
      plasticCups: 0,
      straws: 0,
      foodContainers: 0,
    });
  };

  return (
    <section id="kalkulator" className="py-20 bg-white border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-700 tracking-widest uppercase bg-amber-50 px-3.5 py-1.5 rounded-full">
            Interaktif & Edukatif
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 mt-4 tracking-tight">
            Kalkulator Jejak Sampah Plastik Pribadi
          </h2>
          <p className="text-stone-600 mt-4 leading-relaxed font-sans text-sm sm:text-base">
            Geser tuas di bawah ini untuk mengestimasi seberapa banyak sampah plastik yang kamu konsumsi dalam setahun, serta dampaknya bagi lingkungan sekitar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Sliders Form (7 cols) */}
          <div className="lg:col-span-6 bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/60 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-stone-200/60 pb-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Calculator className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-display font-bold text-lg text-stone-900">Konsumsi Mingguanmu</h3>
                </div>
                <button
                  onClick={resetInputs}
                  className="text-xs font-semibold text-stone-500 hover:text-emerald-700 flex items-center space-x-1 transition-colors"
                >
                  <RefreshCw className="h-3 w-3" />
                  <span>Reset Semua</span>
                </button>
              </div>

              {/* Sliders */}
              <div className="space-y-6">
                
                {/* Plastic Bags */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold text-stone-800">
                    <span>🛍️ Kantong Belanja Plastik (Kresek)</span>
                    <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-md text-xs font-mono font-bold">
                      {inputs.plasticBags} pcs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={inputs.plasticBags}
                    onChange={(e) => handleSliderChange('plasticBags', parseInt(e.target.value))}
                    className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                    <span>0</span>
                    <span>25</span>
                    <span>50 pcs / minggu</span>
                  </div>
                </div>

                {/* Plastic Bottles */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold text-stone-800">
                    <span>🥤 Botol Plastik Air Mineral</span>
                    <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-md text-xs font-mono font-bold">
                      {inputs.plasticBottles} pcs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={inputs.plasticBottles}
                    onChange={(e) => handleSliderChange('plasticBottles', parseInt(e.target.value))}
                    className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                    <span>0</span>
                    <span>25</span>
                    <span>50 pcs / minggu</span>
                  </div>
                </div>

                {/* Plastic Cups */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold text-stone-800">
                    <span>🥤 Gelas Plastik Kopi / Boba</span>
                    <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-md text-xs font-mono font-bold">
                      {inputs.plasticCups} pcs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={inputs.plasticCups}
                    onChange={(e) => handleSliderChange('plasticCups', parseInt(e.target.value))}
                    className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                    <span>0</span>
                    <span>15</span>
                    <span>30 pcs / minggu</span>
                  </div>
                </div>

                {/* Straws */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold text-stone-800">
                    <span>🍹 Sedotan Plastik</span>
                    <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-md text-xs font-mono font-bold">
                      {inputs.straws} pcs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={inputs.straws}
                    onChange={(e) => handleSliderChange('straws', parseInt(e.target.value))}
                    className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                    <span>0</span>
                    <span>15</span>
                    <span>30 pcs / minggu</span>
                  </div>
                </div>

                {/* Food Containers */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold text-stone-800">
                    <span>🍱 Wadah Plastik / Kotak Styrofoam</span>
                    <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-md text-xs font-mono font-bold">
                      {inputs.foodContainers} pcs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={inputs.foodContainers}
                    onChange={(e) => handleSliderChange('foodContainers', parseInt(e.target.value))}
                    className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                    <span>0</span>
                    <span>15</span>
                    <span>30 pcs / minggu</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 bg-amber-50 p-4 rounded-2xl border border-amber-200/50 text-xs text-amber-800 flex items-start space-x-2.5">
              <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
              <span>
                Angka di atas dihitung berdasarkan ukuran rata-rata limbah konsumsi rumah tangga di Indonesia. Hasil bersifat estimasi edukasi.
              </span>
            </div>
          </div>

          {/* Results Display (5 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-emerald-950 to-stone-900 rounded-3xl p-6 sm:p-8 text-stone-50 flex flex-col justify-between shadow-xl relative overflow-hidden">
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-800/10 rounded-full blur-2xl" />
            
            <div className="z-10">
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="h-5 w-5 text-emerald-400 animate-pulse" />
                <h3 className="font-display font-bold text-lg text-emerald-200">Proyeksi Jejak Tahunanmu</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Box 1: Annual Waste Item count */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <span className="text-[10px] text-stone-400 font-mono uppercase tracking-wider block">Jumlah Sampah Plastik</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-stone-50 mt-1 font-display">
                    {results.annualWasteCount.toLocaleString('id-ID')}
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold block mt-1">item / tahun</span>
                </div>

                {/* Box 2: Waste weight */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <span className="text-[10px] text-stone-400 font-mono uppercase tracking-wider block">Berat Total Limbah</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-stone-50 mt-1 font-display">
                    {results.annualWeightKg}
                  </div>
                  <span className="text-xs text-amber-400 font-semibold block mt-1">kg / tahun</span>
                </div>
              </div>

              {/* Carbon emissions footprint */}
              <div className="bg-emerald-900/40 border border-emerald-500/10 rounded-2xl p-5 mb-6 flex items-start space-x-4">
                <div className="bg-emerald-500/20 p-2.5 rounded-xl text-emerald-400 mt-0.5">
                  <Flame className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-300 font-mono uppercase tracking-wider block">Emisi Gas Rumah Kaca (CO2)</span>
                  <div className="text-2xl font-extrabold text-stone-50 mt-0.5 font-display">
                    {results.carbonFootprintKg} kg <span className="text-sm font-normal text-stone-400">CO2 / tahun</span>
                  </div>
                  <p className="text-xs text-stone-300 mt-1.5 leading-relaxed">
                    Setiap siklus hidup plastik dari ekstraksi minyak, manufaktur, hingga pembakaran menyumbang emisi karbon abadi.
                  </p>
                </div>
              </div>

              {/* Comparison Text */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-start space-x-3 mb-6">
                <span className="text-2xl" role="img" aria-label="Turtle">🐢</span>
                <div>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold block uppercase tracking-wider">Perbandingan Berat</span>
                  <p className="text-xs sm:text-sm text-stone-200 mt-1 leading-relaxed">
                    Sampah plastik tahunanmu {results.comparisonAnimal}
                  </p>
                </div>
              </div>

              {/* Offset: Trees needed */}
              <div className="bg-emerald-800/20 border border-emerald-500/20 rounded-2xl p-4 flex items-center space-x-4">
                <div className="bg-emerald-500/30 p-2.5 rounded-xl text-emerald-300">
                  <Trees className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] text-emerald-300 font-mono font-bold block uppercase tracking-wider">Langkah Kompensasi</span>
                  <p className="text-xs text-stone-200 mt-1 leading-relaxed">
                    Diperlukan minimal <strong className="text-emerald-400 font-bold">{results.treesRequired} pohon dewasa</strong> yang tumbuh selama setahun penuh hanya untuk mengimbangi emisi jejak karbon plastikmu ini.
                  </p>
                </div>
              </div>
            </div>

            {/* Micro Call to action inside results */}
            <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-xs">
              <span className="text-stone-400">Siap untuk memulai perubahan nyata?</span>
              <button
                onClick={() => {
                  const el = document.getElementById('komitmen');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-emerald-400 font-bold hover:text-emerald-300 flex items-center space-x-1 transition-colors"
              >
                <span>Ambil Komitmen 5R</span>
                <span>→</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
