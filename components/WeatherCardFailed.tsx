import { motion } from 'framer-motion';

const WeatherCardFailed = () => {
  return (
    <motion.p
      key="Something went wrong"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: '100%' }}
    >
      Tut mir leid, etwas scheint nicht ganz zu funktionieren. probiere es mit
      einer anderen Stadt nochmal.
    </motion.p>
  );
};

export default WeatherCardFailed;
