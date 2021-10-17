import { WeatherCardProps } from '@utils/commonProps';
import { motion } from 'framer-motion';
import { BiWind } from 'react-icons/bi';
import { BsFillClockFill } from 'react-icons/bs';
import { IoWater, IoCalendarSharp } from 'react-icons/io5';
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
  const getLocalDate = (datetime: string) => {
    const date = datetime?.split(' ')[0];
    const yearMonthDay = date?.split('-');
    return `${yearMonthDay[2]}.${yearMonthDay[1]}.${yearMonthDay[0]}`;
  };
  const getLocalTime = (datetime: string) => {
    return datetime?.split(' ')[1];
  };

  return (
    <motion.div
      key={data?.location}
      className="max-w-sm w-full grid grid-cols-2 items-center text-center bg-gray-100 default-text dark:bg-gray-500 shadow-lg rounded-lg p-3"
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
          title={`Coordinates in Latitude and Longitude, here: ${data?.latitude}°N, ${data?.longitude}°E`}
        >
          {data?.latitude}, {data?.longitude}
        </motion.span>
      </motion.div>
      <motion.span
        className="flex text-xl items-center justify-center"
        variants={items}
      >
        <motion.img
          title={`Icon provided by the Weather API "https://m3o.com/weather/api"`}
          variants={items}
          src={data?.icon_url}
        />
        {data?.temp_c}°C
      </motion.span>
      <motion.span
        className="flex items-center justify-center"
        variants={items}
        title={`Humidity, here: ${data?.humidity}%`}
      >
        <IoWater className="mr-1" />
        {data?.humidity}%
      </motion.span>
      <motion.span
        variants={items}
        title={`Given the humidity, temperature, wind and a few other factors this value can sometimes actually be a better indicator of temperature than the true value, here: ${data?.feels_like_c}°C`}
      >
        feels like {data?.feels_like_c}°C
      </motion.span>
      <motion.span
        className="flex justify-center items-center"
        title={`The wind speed given in kilometers per hour, here: ${data?.wind_kph} km/h`}
        variants={items}
      >
        <BiWind className="mr-1" />
        {data?.wind_kph} km/h
      </motion.span>
      <motion.span
        variants={items}
        title={`The wind direction given in in cardinal values, here: ${data?.wind_direction}`}
        className="flex justify-center items-center"
      >
        <GiWindsock className="mr-1" />
        {data?.wind_direction}
      </motion.span>
      <motion.span
        variants={items}
        title={`The local date formatted as day.month.year, here: ${getLocalDate(
          data?.local_time
        )}`}
        className="flex justify-center items-center"
      >
        <IoCalendarSharp className="mr-1" />
        {getLocalDate(data?.local_time)}
      </motion.span>
      <motion.span
        variants={items}
        title={`The local time formatted as military time, here: ${getLocalTime(
          data?.local_time
        )}`}
        className="flex justify-center items-center"
      >
        <BsFillClockFill className="mr-1" />
        {getLocalTime(data?.local_time)}
      </motion.span>
    </motion.div>
  );
};

export default WeatherCardSuccess;
