import create from 'zustand';
import {
  WeatherAPIResponseSuccessStamped,
  WeatherCacheStore
} from '@utils/commonProps';

const FIVE_MINUTES = 5 * 60 * 1000;

const isEntryStale = (value: WeatherAPIResponseSuccessStamped): boolean => {
  if (Date.now() - value.timestamp < FIVE_MINUTES) return false;
  return true;
};

const useWeatherCache = create<WeatherCacheStore>((set, get) => ({
  cachedResponses: [],
  addResponse: (res) => {
    set((state) => {
      state.removeStaleEntries();
      return {
        cachedResponses: [
          ...state.cachedResponses,
          { ...res, timestamp: Date.now() } as WeatherAPIResponseSuccessStamped
        ]
      };
    });
  },
  removeStaleEntries: () =>
    set((state) => ({
      cachedResponses: state.cachedResponses.filter(
        (entry) => !isEntryStale(entry)
      )
    })),
  getEntry: (location) =>
    get().cachedResponses.find(
      (entry: WeatherAPIResponseSuccessStamped) => entry.location === location
    )
}));

export { useWeatherCache };
