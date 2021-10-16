import create from "zustand";
import { CardData, CardStore } from "@utils/commonProps";

const useCards = create<CardStore>((set, get) => ({
  cardData: [
    {
      name: "Portfolio",
      description:
        "The site your on right now! Since you're already here I'll spare you the link to the demo and give you the link to the GitHub repository.",
      category: "Web",
      linkTo: "https://github.com/dimitriosvalodimos/portfolio",
      stack: [
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "zustand",
        "framer-motion",
      ],
    },
    {
      name: "Todos",
      description:
        "Simple Todo App with saving to localStorage and using Zustand for very easy access to the data.",
      category: "Web",
      linkTo: "/todos",
      stack: [
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "zustand",
        "framer-motion",
      ],
    },
    {
      name: "Weather",
      description: "A simple weather app using Micro Weather API.",
      category: "Web",
      linkTo: "/weather",
      stack: [
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "zustand",
        "framer-motion",
      ],
    },
  ],
  getCardAt: (index: number) => get().cardData[index],
}));

export { useCards };
