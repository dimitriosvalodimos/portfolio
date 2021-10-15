import create, { UseStore } from "zustand";

type CardData = {
  name: string;
  description: string;
  linkTo: string;
  category: string;
  stack: string[];
};

type CardObj = {
  cardData: CardData[];
  currentCard: number;
  setCard: (newCard: number) => void;
  getCardAt: (index: number) => CardData;
};

const useCards: UseStore<CardObj> = create((set, get) => ({
  cardData: [
    {
      name: "Todos",
      description:
        "Simple Todo App with saving to localStorage and using Zustand for very easy access to the data.",
      category: "Web",
      linkTo: "/todos",
      stack: ["Next.js", "Tailwind", "Typescript", "Zustand"],
    },
    {
      name: "Calculator",
      description:
        "A calculator without the security concerns! Very simple design but most of the time went into making a lexer and evaluator for the math expressions. No eval()",
      category: "Web",
      linkTo: "/calculator",
      stack: ["Next.js", "Tailwind", "Typescript", "Zustand"],
    },
    {
      name: "Todos",
      description:
        "Simple Todo App with saving to localStorage and using Zustand for very easy access to the data.",
      category: "Web",
      linkTo: "/todos",
      stack: ["Next.js", "Tailwind", "Typescript", "Zustand"],
    },
  ],
  currentCard: -1,
  getCardAt: (index: number) => get().cardData[index],
  setCard: (newCard) => set({ currentCard: newCard }),
}));

export { useCards };
