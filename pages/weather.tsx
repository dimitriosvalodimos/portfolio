import Layout from '@components/Layout';
import Inputbar from '@components/Inputbar';
import WeatherCardFailed from '@components/WeatherCardFailed';
import WeatherCardSuccess from '@components/WeatherCardSuccess';
import WeatherCardUnknown from '@components/WeatherCardUnknown';
import {
  WeatherAPIResponseFailed,
  WeatherAPIResponseSuccessStamped,
  RequestStatus
} from '@utils/commonProps';
import { FormEvent, useState } from 'react';
import { fetchWeatherFor } from '@utils/weatherAPI';
import { useWeatherCache } from '@utils/useWeatherCache';

const Weather = () => {
  const { getEntry, addResponse } = useWeatherCache();
  const [inputText, setInputText] = useState('');
  const [requestStatus, setRequestStatus] = useState(RequestStatus.UNKNOWN);
  const [responseContent, setResponseContent] =
    useState<WeatherAPIResponseSuccessStamped>();

  const getWeatherForLocation = async (location: string) => {
    const cacheResult = getEntry(location);
    if (cacheResult) {
      setRequestStatus(RequestStatus.SUCCESS);
      setResponseContent(cacheResult as WeatherAPIResponseSuccessStamped);
    } else {
      const result = await fetchWeatherFor(location);
      if ((result as WeatherAPIResponseFailed)?.Code) {
        setRequestStatus(RequestStatus.FAILED);
      } else {
        addResponse(result as WeatherAPIResponseSuccessStamped);
        setRequestStatus(RequestStatus.SUCCESS);
        setResponseContent(result as WeatherAPIResponseSuccessStamped);
      }
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
          {requestStatus === RequestStatus.UNKNOWN && <WeatherCardUnknown />}
          {requestStatus === RequestStatus.FAILED && <WeatherCardFailed />}
          {requestStatus === RequestStatus.SUCCESS && (
            <WeatherCardSuccess
              data={responseContent as WeatherAPIResponseSuccessStamped}
            />
          )}
        </div>
      </Inputbar>
    </Layout>
  );
};

export default Weather;
