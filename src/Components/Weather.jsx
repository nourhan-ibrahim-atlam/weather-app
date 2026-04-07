// React
import { useEffect, useState } from "react";

// Reducer
import WeatherReducer from "../Reducers/WeatherReducer";

// External Library
import moment from "moment";
import "moment/dist/locale/ar";
import { useTranslation } from "react-i18next";
moment.locale("ar");

// Redux Toolkit
import { useSelector , useDispatch } from "react-redux";
import { fetchWeather } from "../WeatherApiSlice";

// Get Icon From Open Weather
function WeatherIcon({ icon }) {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return <img src={iconUrl} alt="Weather icon" />;
}

function Weather() {
  // Redux Toolkit
  const resultRedux = useSelector((state) => state.weather);
  const dispatchRedux = useDispatch();
  const weatherData = resultRedux.weather;

  // i18n library
  const { t, i18n } = useTranslation();

  // States
  const [date, setDate] = useState("");
  const [locale, setLocale] = useState("ar");

  // Handle Event
  useEffect(() => {
    // Dispatch for weatherApiSlice
    // dispatchRedux(changed());
    dispatchRedux(fetchWeather());
  
    // Arabic Lang
    i18n.changeLanguage(locale);
  }, [dispatchRedux, i18n, locale]);
  
  useEffect(() => {
    setDate(moment().format("LL"));
  }, []);

  return (
    <main className="absolute top-1/2 left-1/2 -translate-1/2 font-family-base w-4/5 md:w-3/5 lg:w-2/5">
      {/* Main */}
      <div
        dir={locale == "ar" ? "rtl" : "ltr"}
        className="opacity-80 bg-gray-500 px-8 py-6 shadow-xl rounded-xl 
        duration-500 hover:scale-105">
        {/* Title */}
        <div className="flex items-end gap-5 mb-3">
          <h1 className="text-4xl md:text-5xl font-bold">{t("cairo")}</h1>
          <p>{date}</p>
        </div>

        <hr />

        {/* Main Weather */}
        <div className="flex gap-5 mt-3">
          {/* Right Side */}
          <div className="w-1/2">
            {/* Degree */}
            <div className="flex items-center gap-0.5 md:gap-6">
              <h2 className="text-6xl md:text-7xl">{weatherData.responseTemp}</h2>
              {weatherData.responseIcon && <WeatherIcon icon={weatherData.responseIcon} />}
            </div>

            <p className="text-lg mb-3">{t(weatherData.responseDisc)}</p>

            {/* Smallest & Largest Degree */}
            <div className="text-sm flex flex-col gap-1 md:flex-row md:gap-2">
              <p>
                {t("min")}: {weatherData.responseMin}
              </p>
              <div className="hidden md:block">|</div>
              <p>
                {t("max")}: {weatherData.responseMax}
              </p>
            </div>
          </div>

          {/* Left Side */}
          <div className="w-1/2 flex items-center justify-center">
            <i className="fa-solid fa-cloud text-8xl md:text-9xl"></i>
          </div>
        </div>
      </div>

      {/* Swith Lang */}
      <div
        className={`flex w-full ${
          locale === "en" ? "justify-end" : "justify-start"
        }`}>
        {/* Convert arabic to english */}
        <button
          dir={locale == "ar" ? "ltr" : "rtl"}
          className="ml-2 mt-3 cursor-pointer duration-500 hover:text-gray-400"
          onClick={() => {
            if (locale == "en") {
              setLocale("ar");
              moment.locale("ar");
              i18n.changeLanguage("ar");
            } else {
              setLocale("en");
              moment.locale("en");
              i18n.changeLanguage("en");
            }

            setDate(moment().format("LL"));
          }}>
          {locale == "ar" ? "English" : "عربي"}
        </button>
      </div>
    </main>
  );
}

export default Weather;
