import SearchButton from "./components/SearchButton";
import SearchedComponent from "./components/SearchInput";
import SearchLogo from "./components/icons/SearchLogo";
import TimeAndDate from "./components/TimeAndDate";
import WeatherDetails from "./components/WeatherDetails";
import LogoDetails from "./components/LogoDetails";
import { useEffect, useReducer, useRef, useState } from "react";
import { INITIAL_STATE, weatherReducer } from "./reducer/weatherReducer";
import { RingLoader } from "react-spinners";

function App() {
  const [city, setCity] = useState("");
  const [state, dispatch] = useReducer(weatherReducer, INITIAL_STATE);
  const inputRef = useRef(null);

  const handleSearchInput = (e) => {
    setCity(e.target.value);
  };

  const fetchWeatherData = async () => {
    dispatch({ type: "FETCH_WEATHER_START" });
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_WEATHER_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_WEATHER_API_HOST,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (response.status === 200) {
        dispatch({
          type: "FETCH_WEATHER_SUCCESS",
          payload: result,
        });
      } else if (response.status === 400) {
        dispatch({
          type: "FETCH_WEATHER_FAILURE",
          payload: result.error.message,
        });
      }
    } catch (error) {
      dispatch({
        type: "FETCH_WEATHER_FAILURE",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col p-4 w-2/3 m-auto space-y-6">
      <LogoDetails />
      <div className="flex w-full space-x-1">
        <SearchedComponent
          value={city}
          onChange={(e) => handleSearchInput(e)}
          ref={inputRef}
        />
        <SearchButton onClick={fetchWeatherData}>
          <SearchLogo />
        </SearchButton>
      </div>

      {state.loading ? (
        <div className="items-center justify-center flex">
          <RingLoader color="#00d8ff" />
        </div>
      ) : (
        <div>
          {state.error ? (
            <div className="items-center justify-center flex text-2xl text-white font-bold uppercase">
              {state.error}
            </div>
          ) : (
            <div>
              {Object.keys(state.locationData).length !== 0 &&
                Object.keys(state.weatherData).length !== 0 && (
                  <div className="flex w-full space-x-2">
                    <TimeAndDate locationData={state.locationData} />
                    <WeatherDetails weatherData={state.weatherData} />
                  </div>
                )}
            </div>
          )}
        </div>
      )}

      <div className="m-auto flex items-center space-x-6 text-white font-bold text-xl">
        <span>Made With </span>
        <img src="src/assets/react.svg" height="100px" width="100px"></img>
      </div>
    </div>
  );
}

export default App;
