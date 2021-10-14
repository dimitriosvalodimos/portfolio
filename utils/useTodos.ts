import create, { UseStore } from "zustand";
import { TodoStore, Todo } from "@utils/commonProps";

const useTodos: UseStore<TodoStore> = create((set, get) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  getTodo: (index) => get().todos[index],
  removeTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, idx) => index !== idx),
    })),
}));

export { useTodos };
