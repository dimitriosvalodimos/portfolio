import { TodoItemProps } from "@utils/commonProps";
import { CgTrash } from "react-icons/cg";
import { useTodos } from "@utils/useTodos";
import { useState } from "react";

const TodoItem = ({ data, todoNumber }: TodoItemProps) => {
  const [done, setDone] = useState(data.done);
  const removeTodo = useTodos((state) => state.removeTodo);
  const changeTodo = useTodos((state) => state.changeTodo);
  return (
    <li className="flex justify-between hoverable items-center px-4 py-2 m-2">
      <input
        type="checkbox"
        checked={done}
        onChange={() => {
          setDone(!done);
          changeTodo(todoNumber, { text: data.text, done: done });
        }}
      />
      <p>{data.text}</p>
      <button onClick={() => removeTodo(todoNumber)}>
        <CgTrash className="text-2xl" />
      </button>
    </li>
  );
};

export default TodoItem;
