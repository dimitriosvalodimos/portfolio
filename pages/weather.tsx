import Inputbar from '@components/Inputbar';
import Layout from '@components/Layout';
import { WeatherAPIResponseSuccess } from '@utils/commonProps';
import { FormEvent, useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { BiWind } from 'react-icons/bi';
import { IoWater } from 'react-icons/io5';
const weatherAPIKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

enum RequestStatus {
  SUCCESS,
  FAILED,
  UNKNOWN
}

const container = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.5 } }
};

const items = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 }
};

const Weather = () => {
  const [inputText, setInputText] = useState('');
  const [requestStatus, setRequestStatus] = useState(RequestStatus.UNKNOWN);
  const [responseContent, setResponseContent] =
    useState<WeatherAPIResponseSuccess>();

  const getWeatherForLocation = async (location: string) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${weatherAPIKey}`);
    const response = await fetch('https://api.m3o.com/v1/weather/Now', {
      method: 'POST',
      mode: 'cors',
      headers: myHeaders,
      body: JSON.stringify({ location: location })
    });
    if (!response.ok) {
      setRequestStatus(RequestStatus.FAILED);
    } else {
      setRequestStatus(RequestStatus.SUCCESS);
      const data = await response.json();
      setResponseContent(data);
    }
  };

  const handleSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if inputText is numeric, it's probably a zip-code/postal-code else turn name of location into lowercase
    const location = !/\d/.test(inputText)
      ? inputText
      : inputText.toLowerCase();
    getWeatherForLocation(location);
    setInputText('');
  };
  return (
    <Layout currentPage="Weather">
      <Inputbar
        inputText={inputText}
        setInputText={setInputText}
        handleSubmission={handleSubmission}
        placeholderText="📍 Enter a city by name ..."
      >
        <div className="flex mt-8 sm:mt-16 justify-center mx-8">
          <AnimatePresence exitBeforeEnter>
            <AnimateSharedLayout>
              {requestStatus === RequestStatus.UNKNOWN && (
                <motion.p
                  key="Check the weather near you!"
                  className="px-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: '100%' }}
                >
                  Check the weather near you!
                </motion.p>
              )}
              {requestStatus === RequestStatus.FAILED && (
                <motion.p
                  key="Something went wrong"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: '100%' }}
                >
                  Something didn't work, I'm sorry. Please try again or use
                  another city close to you.
                </motion.p>
              )}
              {requestStatus === RequestStatus.SUCCESS && (
                <motion.div
                  key={responseContent?.location}
                  className="max-w-sm w-full bg-gray-100 default-text dark:bg-gray-500 shadow-lg rounded-lg p-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.div
                      className="flex justify-between items-center"
                      variants={items}
                    >
                      <motion.h1 className="text-3xl" variants={items}>
                        {responseContent?.location}
                      </motion.h1>
                      <motion.div
                        className="flex-col justify-center items-center mt-2"
                        variants={items}
                      >
                        <motion.p
                          className="flex items-center"
                          variants={items}
                        >
                          <IoWater />
                          {responseContent?.humidity}%
                        </motion.p>
                        <motion.p
                          className="flex items-center"
                          variants={items}
                        >
                          <BiWind />
                          {responseContent?.wind_kph.toFixed(0)} km/h
                        </motion.p>
                      </motion.div>
                    </motion.div>
                    <motion.span className="flex" variants={items}>
                      <motion.p
                        className="text-xs flex justify-center items-center"
                        variants={items}
                      >
                        {responseContent?.latitude.toFixed(2)}'N,{' '}
                        {responseContent?.longitude.toFixed(2)}'E
                      </motion.p>
                    </motion.span>
                    <motion.p>{responseContent?.condition}</motion.p>
                  </motion.div>
                  <motion.span
                    variants={items}
                    className="flex w-full justify-end items-center"
                  >
                    <motion.img
                      src={responseContent?.icon_url}
                      variants={items}
                    ></motion.img>
                    <p className="text-4xl">{responseContent?.temp_c}°C</p>
                  </motion.span>
                </motion.div>
              )}
            </AnimateSharedLayout>
          </AnimatePresence>
        </div>
      </Inputbar>
    </Layout>
  );
};

export default Weather;
