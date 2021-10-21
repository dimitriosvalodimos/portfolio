import { ReactNode, Dispatch, SetStateAction, FormEvent } from 'react';

type LayoutProps = {
  currentPage: string;
  children: ReactNode | ReactNode[];
};

type CardData = {
  name: string;
  description: string;
  linkTo: string;
  category: string;
  stack: string[];
};

type CardStore = {
  cardData: CardData[];
  getCardAt: (index: number) => CardData;
};

type ProjectCardProps = {
  cardNumber: number;
};

type Todo = {
  id: string;
  text: string;
  done: boolean;
};

type TodoStore = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  toggleDone: (id: string) => void;
};

type LocalStorageStore = {
  allowLocalStorageAccess: boolean;
  changeAccess: (to: boolean) => void;
};

type TodoModalProps = {
  close: () => void;
};

type InputbarProps = {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  handleSubmission: (e: FormEvent<HTMLFormElement>) => void;
  placeholderText: string;
};

type WeatherAPIResponseSuccess = {
  cloud: number;
  condition: string;
  country: string;
  daytime: boolean;
  feels_like_c: number;
  feels_like_f: number;
  humidity: number;
  icon_url: string;
  latitude: number;
  local_time: string;
  location: string;
  longitude: number;
  region: string;
  temp_c: number;
  temp_f: number;
  timezone: string;
  wind_degree: number;
  wind_direction: string;
  wind_kph: number;
  wind_mph: number;
};

type WeatherAPIResponseFailed = {
  Id: string;
  Code: number;
  Detail: string;
  Status: string;
};

type WeatherAPIResponseSuccessStamped = WeatherAPIResponseSuccess & {
  timestamp: number;
};

type WeatherAPIResponse =
  | WeatherAPIResponseSuccess
  | WeatherAPIResponseSuccessStamped
  | WeatherAPIResponseFailed;

enum RequestStatus {
  SUCCESS,
  FAILED,
  UNKNOWN
}

type WeatherCardProps = {
  data: WeatherAPIResponseSuccessStamped;
};

type WeatherCacheStore = {
  cachedResponses: WeatherAPIResponseSuccessStamped[];
  addResponse: (value: WeatherAPIResponseSuccess) => void;
  removeStaleEntries: () => void;
  getEntry: (location: string) => WeatherAPIResponseSuccessStamped | undefined;
};

export { RequestStatus };
export type {
  LayoutProps,
  ProjectCardProps,
  CardData,
  CardStore,
  Todo,
  TodoStore,
  LocalStorageStore,
  TodoModalProps,
  InputbarProps,
  WeatherAPIResponse,
  WeatherAPIResponseSuccess,
  WeatherAPIResponseFailed,
  WeatherAPIResponseSuccessStamped,
  WeatherCacheStore,
  WeatherCardProps
};
