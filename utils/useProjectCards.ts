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
};

const useCards: UseStore<CardObj> = create((set) => ({
  cardData: [
    {
      name: "Todos",
      description:
        "Simple Todo App with saving to localStorage and using Zustand for very easy access to the data.",
      category: "Web",
      linkTo: "/todos",
      stack: ["Next.js", "TailwindCSS", "Typescript", "Zustand"],
    },
    {
      name: "Todos",
      description:
        "Simple Todo App with saving to localStorage and using Zustand for very easy access to the data.",
      category: "Web",
      linkTo: "/todos",
      stack: ["Next.js", "TailwindCSS", "Typescript", "Zustand"],
    },
    {
      name: "Todos",
      description:
        "Simple Todo App with saving to localStorage and using Zustand for very easy access to the data.",
      category: "Web",
      linkTo: "/todos",
      stack: ["Next.js", "TailwindCSS", "Typescript", "Zustand"],
    },
  ],
  currentCard: -1,
  setCard: (newCard) => set({ currentCard: newCard }),
}));

export { useCards };
