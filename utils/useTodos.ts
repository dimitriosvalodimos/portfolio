import create from "zustand";
import { TodoStore, Todo } from "@utils/commonProps";
import { v4 as uuidv4 } from "uuid";

const useTodos = create<TodoStore>((set) => ({
  todos: [],
  setTodos: (localStorageTodos) => {
    set(() => ({ todos: [...localStorageTodos] }));
  },
  addTodo: (text) => {
    set((state) => ({
      todos: [...state.todos, { id: uuidv4(), text, done: false } as Todo],
    }));
  },

  removeTodo: (id) => {
    set((state) => ({ todos: state.todos.filter((val) => val.id !== id) }));
  },
  toggleDone: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? ({ ...todo, done: !todo.done } as Todo) : todo
      ),
    }));
  },
}));
export { useTodos };
