import Layout from "@components/Layout";
import TodoItem from "@components/TodoItem";
import { useTodos } from "@utils/useTodos";
import { FormEvent, useState } from "react";
import { CgSearch } from "react-icons/cg";

const Todos = () => {
  const todos = useTodos((state) => state.todos);
  const addTodo = useTodos((state) => state.addTodo);
  const [inputText, setInputText] = useState("");

  const handleSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ text: inputText, done: false });
    setInputText("");
  };

  return (
    <Layout currentPage="Todos">
      <h1 className="text-center font-bold text-4xl mt-8 sm:mt-16">Todos</h1>
      <div className="w-full mt-8 sm:mt-16">
        <form
          className="w-full flex justify-center items-center"
          onSubmit={(e) => handleSubmission(e)}
        >
          <input
            type="text"
            className="w-3/4 sm:w-1/2 shadow-lg rounded-lg bg-gray-100 hoverable dark:bg-gray-500 default-border py-2 px-4"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </form>
        <ul className="flex-col justify-center items-center mx-auto w-3/4 sm:w-1/2 mt-8 sm:mt-16">
          {todos.map((todo, index) => {
            return <TodoItem data={todo} key={index} todoNumber={index} />;
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Todos;
