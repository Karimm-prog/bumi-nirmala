/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Edukasi5R from './components/Edukasi5R';
import ImpactCalculator from './components/ImpactCalculator';
import WasteSorter from './components/WasteSorter';
import PledgeBoard from './components/PledgeBoard';
import DeployGuide from './components/DeployGuide';
import Footer from './components/Footer';
import { CloudLightning, Info } from 'lucide-react';

export default function App() {
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans antialiased text-stone-900 selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Dynamic Deploy Tip Alert banner on top */}
      <div className="bg-emerald-900 text-emerald-100 text-[11px] sm:text-xs py-2 px-4 text-center font-medium border-b border-emerald-800/50 flex items-center justify-center space-x-2">
        <Info className="h-3.5 w-3.5 text-emerald-300" />
        <span>Siap meluncurkan kampanye ini? Klik tombol hitam "Deploy ke GitHub & Vercel" di kanan atas!</span>
      </div>

      {/* Navigation */}
      <Navbar onOpenDeployGuide={() => setIsDeployGuideOpen(true)} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <Edukasi5R />
        <ImpactCalculator />
        <WasteSorter />
        <PledgeBoard />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deploy Guide Modal Overlay */}
      <DeployGuide isOpen={isDeployGuideOpen} onClose={() => setIsDeployGuideOpen(false)} />

    </div>
  );
}
