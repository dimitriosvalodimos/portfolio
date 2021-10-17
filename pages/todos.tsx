import Layout from '@components/Layout';
import Inputbar from '@components/Inputbar';
import TodosLocalStorageModal from '@components/TodosLocalStorageModal';
import { useTodos } from '@utils/useTodos';
import { useLocalStorage } from '@utils/useLocalStorage';
import { FormEvent, useState, useEffect } from 'react';
import { CgTrash } from 'react-icons/cg';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';

const Todos = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { allowLocalStorageAccess } = useLocalStorage();
  const { todos, addTodo, removeTodo, toggleDone, setTodos } = useTodos();
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (allowLocalStorageAccess) {
      const localData = localStorage.getItem(
        'dimitriosValodimosPortfolioTodos'
      );
      if (localData) {
        const data = JSON.parse(localData);
        if (data) {
          setTodos(data);
        }
      }
    }
  }, [allowLocalStorageAccess]);

  useEffect(() => {
    if (allowLocalStorageAccess) {
      const dataJson = JSON.stringify(todos);
      localStorage.setItem('dimitriosValodimosPortfolioTodos', dataJson);
    }
  }, [todos]);

  const handleSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(inputText);
    setInputText('');
  };

  return (
    <Layout currentPage="Todos">
      <h1 className="text-center font-bold text-4xl mt-8 sm:mt-16">Todos</h1>
      <AnimatePresence exitBeforeEnter>
        {isModalOpen && (
          <TodosLocalStorageModal
            key={'todoModal'}
            close={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <Inputbar
          inputText={inputText}
          setInputText={setInputText}
          handleSubmission={handleSubmission}
          placeholderText="📝 Enter a new ToDo in here ..."
        >
          <AnimateSharedLayout>
            <ul className="flex-col justify-center items-center mx-auto w-3/4 sm:w-1/2 mt-8 sm:mt-16 overflow-x-hidden overflow-y-hidden">
              <AnimatePresence>
                {todos.length > 0 &&
                  todos.map((todo, index) => {
                    return (
                      <motion.li
                        key={todo.id}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          x: '100%',
                          transition: { duration: 0.2 }
                        }}
                        className={`flex rounded-lg justify-between hoverable items-center px-4 py-2 m-2 ${
                          index % 2 == 0 ? 'bg-gray-100 dark:bg-gray-500' : ''
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="text-black rounded focus:ring-1 focus:ring-black default-transition"
                          checked={todo?.done}
                          onChange={() => toggleDone(todo.id)}
                        />
                        <p
                          className={`${
                            todo?.done ? 'line-through' : ''
                          } mx-2 sm:mx-8`}
                        >
                          {todo?.text}
                        </p>
                        <button
                          onClick={() => {
                            removeTodo(todo.id);
                          }}
                        >
                          <CgTrash className="text-2xl" />
                        </button>
                      </motion.li>
                    );
                  })}
                {todos.length === 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.7 } }}
                    exit={{ opacity: 0 }}
                    className="text-center text-gray-400"
                  >
                    no ToDo's to see here 🤷
                  </motion.p>
                )}
              </AnimatePresence>
            </ul>
          </AnimateSharedLayout>
        </Inputbar>
      </AnimatePresence>
    </Layout>
  );
};

export default Todos;
