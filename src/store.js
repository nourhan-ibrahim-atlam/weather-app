import { configureStore } from "@reduxjs/toolkit";
import weatherApiSliceReduser from "./WeatherApiSlice";

export const store = configureStore({
  reducer: {
    weather: weatherApiSliceReduser,
  },
});
