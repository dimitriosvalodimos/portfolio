import create from 'zustand';
import { CardData, CardStore } from '@utils/commonProps';

const useCards = create<CardStore>((set, get) => ({
  cardData: [
    {
      name: 'Portfolio',
      description:
        'Die Seite auf der du gerade bist! Statt dir also einen Demo-Link unten bereitzustellen, verlinke ich dir das Projekt auf GitHub.',
      category: 'Web',
      linkTo: 'https://github.com/dimitriosvalodimos/portfolio',
      stack: [
        'Next.js',
        'TailwindCSS',
        'Typescript',
        'zustand',
        'framer-motion'
      ]
    },
    {
      name: 'ToDos',
      description:
        'Eine einfache ToDo-App, die deine Einträge auch im localStorage speichern kann.',
      category: 'Web',
      linkTo: '/todos',
      stack: [
        'Next.js',
        'TailwindCSS',
        'Typescript',
        'zustand',
        'framer-motion'
      ]
    },
    {
      name: 'Wetter',
      description:
        'Kleine Wetter-App, um die wichtigsten Eckdaten zum jetzigen Wetter zu finden.',
      category: 'Web',
      linkTo: '/weather',
      stack: [
        'Next.js',
        'TailwindCSS',
        'Typescript',
        'zustand',
        'framer-motion'
      ]
    }
  ],
  getCardAt: (index: number) => get().cardData[index]
}));

export { useCards };
