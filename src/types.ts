/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type BinType = 'organik' | 'anorganik' | 'b3';

export interface WasteItem {
  id: string;
  name: string;
  category: BinType;
  description: string;
  alternative: string;
  icon: string; // lucide icon name
  point: number;
}

export interface GameState {
  score: number;
  totalAttempts: number;
  correctAttempts: number;
  currentItemIndex: number;
  showFeedback: boolean;
  isCorrect: boolean;
  selectedBin: BinType | null;
}

export interface ImpactInputs {
  plasticBags: number;     // per week
  plasticBottles: number;  // per week
  plasticCups: number;     // per week
  straws: number;          // per week
  foodContainers: number;  // per week
}

export interface ImpactResults {
  annualWasteCount: number;  // total single-use items per year
  annualWeightKg: number;    // weight of waste in kg per year
  carbonFootprintKg: number; // carbon emissions in kg CO2 per year
  comparisonAnimal: string;  // e.g. "setara berat seekor penyu belimbing (130 kg)"
  treesRequired: number;     // trees required to absorb the carbon
}

export interface PledgeItem {
  id: string;
  text: string;
  impactLabel: string;
  points: number;
}

export interface AlternativeItem {
  id: string;
  original: string;
  replacement: string;
  benefits: string;
  difficulty: 'Mudah' | 'Sedang' | 'Tantangan';
  impactIcon: string;
}
