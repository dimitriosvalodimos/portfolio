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

export type {
  LayoutProps,
  ProjectCardProps,
  Todo,
  TodoStore,
  LocalStorageStore,
  TodoModalProps,
};
