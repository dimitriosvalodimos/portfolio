import { motion } from 'framer-motion';

const WeatherCardFailed = () => {
  return (
    <motion.p
      key="Something went wrong"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: '100%' }}
    >
      Something didn't work, I'm sorry. Please try again or use another city
      close to you.
    </motion.p>
  );
};

export default WeatherCardFailed;
