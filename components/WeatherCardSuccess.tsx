import { WeatherCardProps } from '@utils/commonProps';
import { motion } from 'framer-motion';
import { BiWind } from 'react-icons/bi';
import { IoWater } from 'react-icons/io5';
import { GiWindsock } from 'react-icons/gi';

const container = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { staggerChildren: 0.5 } }
};

const items = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const WeatherCardSuccess = ({ data }: WeatherCardProps) => {
  const englishCardinalsToGerman = (direction: string) => {
    return direction.replaceAll('E', 'O');
  };
  return (
    <motion.div
      key={data?.location}
      className="max-w-sm w-full grid grid-cols-2 text-center bg-gray-100 default-text dark:bg-gray-500 shadow-lg rounded-lg p-3 hoverable default-transition"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div className="text-2xl font-semibold grid" variants={items}>
        {data?.location}
        <motion.span
          variants={items}
          className="text-xs font-light"
          title={`Koordinaten in Längen- und Breitengraden, hier: ${data?.latitude}°N, ${data?.longitude}°O`}
        >
          {data?.latitude}, {data?.longitude}
        </motion.span>
      </motion.div>
      <motion.span
        className="flex text-xl items-center justify-center"
        variants={items}
      >
        <motion.img
          alt="Kleines Wettersymbol, da es durch den Wetter Anbieter mitgeschickt wird, kann ich keine weitere Auskunft über das jetzige Bild geben"
          title={`Icon bereitgestellt durch die Wetter API "https://m3o.com/weather/api"`}
          variants={items}
          src={data?.icon_url}
        />
        {data?.temp_c}°C
      </motion.span>
      <motion.span
        className="flex items-center justify-center"
        variants={items}
        title={`Luftfeuchtigkeit, hier: ${data?.humidity}%`}
      >
        <IoWater className="mr-1" />
        {data?.humidity}%
      </motion.span>
      <motion.span
        variants={items}
        title={`Je nach Luftfeuchtigkeit, Temperatur, Windstärke und anderen Faktoren kann dieser Wert in einigen Fällen wichtiger als der reine Temperaturwert sein. Ein Beispiel wäre bei sehr hohen Temperaturen und Luftfeuchtigkeit kann es dazu kommen, dass der Körper den produzierten Schweiß nicht verdunsten und somit deine Körpertemperatur nicht senken kann. Das würde im schlimmsten Fall zu einem Hitzschlag führen. Hier: ${data?.feels_like_c}°C`}
      >
        gefühlt {data?.feels_like_c}°C
      </motion.span>
      <motion.span
        className="flex justify-center items-center"
        title={`Die Windgeschwindigkeit in km/h, hier: ${data?.wind_kph} km/h`}
        variants={items}
      >
        <BiWind className="mr-1" />
        {data?.wind_kph} km/h
      </motion.span>
      <motion.span
        variants={items}
        title={`Die Windrichtung als Himmelsrichtung angegeben, hier: ${data?.wind_direction}`}
        className="flex justify-center items-center"
      >
        <GiWindsock className="mr-1" />
        {data?.wind_direction?.replaceAll('E', 'O')}
      </motion.span>
    </motion.div>
  );
};

export default WeatherCardSuccess;
