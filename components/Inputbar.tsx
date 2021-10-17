import { InputbarProps } from '@utils/commonProps';
import { motion } from 'framer-motion';

const Inputbar = ({
  inputText,
  setInputText,
  handleSubmission,
  placeholderText,
  children
}: InputbarProps) => {
  return (
    <motion.div className="w-full mt-8 sm:mt-16">
      <form
        className="w-full flex justify-center items-center"
        onSubmit={(e) => handleSubmission(e)}
      >
        <input
          type="text"
          className="w-3/4 sm:w-1/2 md:w-1/3 shadow-lg rounded-lg bg-gray-100 hoverable dark:bg-gray-500 dark:placeholder-gray-300 default-border default-transition py-2 px-4"
          placeholder={placeholderText}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </form>
      {children}
    </motion.div>
  );
};

export default Inputbar;
