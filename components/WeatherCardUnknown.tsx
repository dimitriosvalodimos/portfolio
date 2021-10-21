import { motion } from 'framer-motion';

const WeatherCardUnknown = () => {
  return (
    <motion.p
      key="Check the weather near you!"
      className="px-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Checke die Temperaturen in deiner Nähe!
    </motion.p>
  );
};

export default WeatherCardUnknown;
