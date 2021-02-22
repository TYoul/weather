import { CHANGE_IMG_PATH, GET_CURRENT_WEATHER } from "./constants";

interface ChangeImageUrl {
  type: typeof CHANGE_IMG_PATH;
  payload: any;
}

interface GetCurrentWeather {
  type: typeof GET_CURRENT_WEATHER;
  payload: any;
}

export type ModifyAction = ChangeImageUrl | GetCurrentWeather;

export const ChangeImageUrlAction = (data: number): ChangeImageUrl => ({
  type: CHANGE_IMG_PATH,
  payload: data,
});

export const getCurrentWeatherAction = (data: number): GetCurrentWeather => ({
  type: GET_CURRENT_WEATHER,
  payload: data,
});
