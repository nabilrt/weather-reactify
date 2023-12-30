export const INITIAL_STATE = {
  loading: false,
  error: false,
  locationData: {},
  weatherData: {},
};

export const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_START":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "FETCH_WEATHER_SUCCESS":
      return {
        ...state,
        loading: false,
        locationData: action.payload.location,
        weatherData: action.payload.current,
      };
    case "FETCH_WEATHER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
