import { ReactNode } from "react";

type LayoutProps = {
  currentPage: string;
  children: ReactNode | ReactNode[];
};

type ProjectCardProps = {
  cardNumber: number;
};

type Todo = {
  id: string;
  text: string;
  done: boolean;
};

type TodoStore = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  toggleDone: (id: string) => void;
};

type LocalStorageStore = {
  allowLocalStorageAccess: boolean;
  changeAccess: (to: boolean) => void;
};

type TodoModalProps = {
  close: () => void;
};

enum Operations {
  PLUS = "+",
  MINUS = "-",
  MUL = "*",
  DIV = "/",
}

type BinaryOps = Operations.PLUS | Operations.MUL | Operations.DIV;
type UnaryOps = Operations.MINUS;

type MathSymbol = number | BinaryOps | UnaryOps;

type CalculatorStore = {
  expression: MathSymbol[];
  result: number;
  appendToHistory: (value: number) => void;
  resultHistory: MathSymbol[];
  appendSymbol: (value: number | string) => void;
  removeSymbol: () => void;
  clearExpression: () => void;
};

export type {
  LayoutProps,
  ProjectCardProps,
  Todo,
  TodoStore,
  LocalStorageStore,
  TodoModalProps,
  Operations,
  BinaryOps,
  UnaryOps,
  MathSymbol,
  CalculatorStore,
};
