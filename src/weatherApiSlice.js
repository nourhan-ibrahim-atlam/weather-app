import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API Request
export const fetchWeather = createAsyncThunk(
  "weatherApi/fetchWeather",
  async () => {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=30.03&lon=31.23&appid=0858bb7ecf5a0a3cea65c09a26a31bc6"
    );

    const responseMain = response.data.main;
    const responseWeather = response.data.weather[0];

    const responseTemp = Math.round(responseMain.temp - 273.15);
    const responseMin = Math.round(responseMain.temp_min - 273.15);
    const responseMax = Math.round(responseMain.temp_max - 273.15);
    const responseDisc = responseWeather.description;
    const responseIcon = responseWeather.icon;

    return {
      responseTemp,
      responseMin,
      responseMax,
      responseDisc,
      responseIcon,
    };
  }
);
export const weatherApiSlice = createSlice({
  name: "weatherApi",
  initialState: {
    result: "empte",
    weather: {},
    isLoading: false,
  },
  reducers: {
    changed: (state) => {
      state.result = "changed";
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;

        // Weather changed
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { changed } = weatherApiSlice.actions;

export default weatherApiSlice.reducer;
