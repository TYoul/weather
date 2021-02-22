import { GET_CURRENT_WEATHER, CHANGE_IMG_PATH } from "./constants";
import { ModifyAction } from "./actions";
import { weatherList, currentWeather } from "./weatherData";

type Weather = {
  id: number;
  name: string;
  pathname: string;
  isShowImage: boolean;
  temperature: string;
  temperatureRange: string[];
  description: string;
};

interface StoreState {
  weatherList: Weather[];
  currentWeather: Weather;
}

const defaultState: StoreState = {
  weatherList: weatherList,
  currentWeather: currentWeather,
};

const WeatherReducer = (state = defaultState, action: ModifyAction) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: state.weatherList.find((item) => {
          if (item.id === action.payload) {
            return item;
          }
        }),
      };
    case CHANGE_IMG_PATH:
      return {
        ...state,
        currentWeather: state.weatherList.find((item) => {
          if (item.id === action.payload) {
            item.isShowImage = true;
            return item;
          }
        }),
      };
    default:
      return state;
  }
};

export default WeatherReducer;
