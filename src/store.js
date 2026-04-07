import { configureStore } from "@reduxjs/toolkit";
import weatherApiSliceReduser from "./weatherApiSlice";

export const store = configureStore({
  reducer: {
    weather: weatherApiSliceReduser,
  },
});
