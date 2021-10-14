import { ReactNode } from "react";

type LayoutProps = {
  currentPage: string;
  children: ReactNode | ReactNode[];
};

type ProjectCardProps = {
  cardNumber: number;
};

type Todo = {
  text: string;
  done: boolean;
};

type TodoItemProps = {
  data: Todo;
  todoNumber: number;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  getTodo: (index: number) => Todo;
  removeTodo: (index: number) => void;
};

export type { LayoutProps, ProjectCardProps, Todo, TodoItemProps, TodoStore };
