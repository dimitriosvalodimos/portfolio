import { useLocalStorage } from '@utils/useLocalStorage';
import { motion } from 'framer-motion';
import { TodoModalProps } from '@utils/commonProps';

const TodosLocalStorageModal = ({ close }: TodoModalProps) => {
  const { changeAccess } = useLocalStorage();
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0.5, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        className="absolute default-bg z-10"
      >
        <div className="my-8 mx-12 sm:my-16 sm:mx-32 text-center">
          <p>
            This small ToDo-App can use the browsers localStorage API to make
            your todo-items persist across browser sessions. So I wanted to ask
            permission.
          </p>
          <hr className="w-1/2 mx-auto my-4" />
          <p>
            Of course it will be fully functional without localStorage. It just
            adds a little bonus of persistance across browser sessions.
          </p>
          <button
            onClick={() => {
              changeAccess(true);
              close();
            }}
            className="p-2 default-button"
          >
            allow localStorage use
          </button>
          <button
            onClick={() => {
              changeAccess(false);
              close();
            }}
            className="p-2 default-button"
          >
            don't allow localStorage use
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TodosLocalStorageModal;
