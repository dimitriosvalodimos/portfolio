import { ReactNode, Dispatch, SetStateAction, FormEvent } from "react";

type LayoutProps = {
  currentPage: string;
  children: ReactNode | ReactNode[];
};

type CardData = {
  name: string;
  description: string;
  linkTo: string;
  category: string;
  stack: string[];
};

type CardStore = {
  cardData: CardData[];
  getCardAt: (index: number) => CardData;
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

type InputbarProps = {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  handleSubmission: (e: FormEvent<HTMLFormElement>) => void;
  placeholderText: string;
  children: ReactNode | ReactNode[];
};

export type {
  LayoutProps,
  ProjectCardProps,
  CardData,
  CardStore,
  Todo,
  TodoStore,
  LocalStorageStore,
  TodoModalProps,
  InputbarProps,
};
