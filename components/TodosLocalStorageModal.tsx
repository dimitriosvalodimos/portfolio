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
            Das ist eine kleine ToDo-App, die deine Einträge im localStorage
            speichern kann. Somit brauchst du dich nicht anmelden, um deine
            Einträge beim nächsten Besuch wieder zu finden. Daher wollte ich nur
            kurz um Erlaubnis bitten, die Einträge in deinem Browser speichern
            zu dürfen.
          </p>
          <hr className="w-1/2 mx-auto my-4" />
          <p>
            Selbstverständlich ist die App auch ohne localStorage 100% nutzbar,
            nur würden deine Einträge beim neuladen der Seite verloren gehen.
            Zum testen musst du also nicht zustimmen. Zum ernsthaften Nutzen
            aber vielleicht schon (würde aber davon abraten, da es viel bessere
            Alternativen gibt).
          </p>
          <button
            aria-label="erlaube lokales speichern"
            onClick={() => {
              changeAccess(true);
              close();
            }}
            className="p-2 default-button"
          >
            <span className="font-bold">erlaube</span> lokales speichern
          </button>
          <button
            aria-label="verbiete lokales speichern"
            onClick={() => {
              changeAccess(false);
              close();
            }}
            className="p-2 default-button"
          >
            <span className="font-bold">verbiete</span> lokales speichern
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TodosLocalStorageModal;
