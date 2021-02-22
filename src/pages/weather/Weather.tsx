import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/hooks";
import "./Weather.scss";

import {
  getCurrentWeatherAction,
  ChangeImageUrlAction,
} from "../../redux/weather/actions";

interface RouteParams {
  id: string;
}

const WeatherPage: React.FC = () => {
  // redux hook
  const dispatch = useDispatch();
  const weather: any = useSelector((state) => state.weather);

  const { weatherList, currentWeather } = weather;

  const {
    name,
    temperature,
    temperatureRange,
    description,
    isShowImage,
  } = currentWeather;

  // react hook
  useEffect(() => {
    dispatch(getCurrentWeatherAction(Number(id)));
  }, []);

  useEffect(() => {
    const timer: any = !isShowImage
      ? setTimeout(() => {
          dispatch(ChangeImageUrlAction(Number(id)));
        }, 2000)
      : "";
    return () => clearTimeout(timer);
  }, [isShowImage, dispatch]);

  const history = useHistory();
  const params = useParams<RouteParams>();
  const { id } = params;

  const getImageUrl = (id: number) => {
    if (id === 1) {
      return "weatherRain";
    } else if (id === 2) {
      return "weatherSunny";
    } else if (id === 3) {
      return "weatherThunderStorm";
    }
  };

  const handlRightBtn = (id: number) => {
    if (id === weatherList.length) {
      id = 1;
    } else {
      id = id + 1;
    }
    history.replace(`/weather/${id}`);
    dispatch(getCurrentWeatherAction(id));
  };

  const handlLeftBtn = (id: number) => {
    if (id === 1) {
      id = weatherList.length;
    } else {
      id = id - 1;
    }
    history.replace(`/weather/${id}`);
    dispatch(getCurrentWeatherAction(id));
  };

  return (
    <div className="weatherContainer">
      <div className="weather">
        {isShowImage ? <div className="weatherName">{name}</div> : ""}
        <div
          className="btnPrev arrow"
          onClick={(e) => handlLeftBtn(Number(id))}
        ></div>

        <div
          className={`${
            isShowImage ? getImageUrl(Number(id)) : "refresh"
          } weatherImg`}
        ></div>
        {isShowImage ? (
          <div className="weatherInfo">
            <span className="weatherTemp">{temperature}</span>
            <div className="weatherRange">
              <span>{temperatureRange[0]}</span>
              <span>{temperatureRange[1]}</span>
            </div>
            <span className="weatherDec">{description}</span>
          </div>
        ) : (
          ""
        )}

        <div
          className="btnNext arrow"
          onClick={(e) => handlRightBtn(Number(id))}
        ></div>
      </div>
    </div>
  );
};

export default WeatherPage;
