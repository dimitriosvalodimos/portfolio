import create from "zustand";
import { MathSymbol, CalculatorStore } from "@utils/commonProps";

const useCalculator = create<CalculatorStore>((set) => ({
  expression: [],
  result: 0,
  resultHistory: [],
  appendSymbol: (value) =>
    set((state) => ({
      expression: [...state.expression, value as MathSymbol],
    })),
  appendToHistory: (value) =>
    set((state) => ({
      resultHistory: [...state.resultHistory, value as MathSymbol],
    })),
  removeSymbol: () =>
    set((state) => ({ expression: [...state.expression.slice(0, -1)] })),
  clearExpression: () => set(() => ({ expression: [] })),
}));

export { useCalculator };
