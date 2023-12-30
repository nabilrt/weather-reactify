import HumidityLogo from "./icons/Humidity";
import Pressure from "./icons/Pressure";
import WindSpeed from "./icons/WindSpeed";
import UV from "./icons/UV";
import Sunset from "./icons/Sunset";
import Sunrise from "./icons/Sunrise";

const WeatherDetails = ({ weatherData }) => {
  return (
    <div className="w-2/3 bg-[#444444] rounded-xl p-8 flex text-white items-center shadow-sm shadow-[#00d8ff] border-1 border-gray-800">
      <div className="w-1/3 flex flex-col space-y-3 ">
        <p className="text-5xl font-extrabold tracking-wider">
          {weatherData.temp_f}&#xb0;F
        </p>
        <p className="text-xl font-semibold tracking-wider">
          Feels Like: {weatherData.feelslike_c}&#xb0;C
        </p>
        <div className="flex space-x-2 items-center">
          <Sunrise />
          <div className="flex flex-col">
            <p className="text-sm font-semibold">Sunrise</p>
            <p className="text-sm font-semibold">N/A</p>
          </div>
        </div>
        <div className="flex space-x-2 items-center">
          <Sunset />
          <div className="flex flex-col">
            <p className="text-sm font-semibold">Sunset</p>
            <p className="text-sm font-semibold">N/A</p>
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col space-y-4 ">
        <div className="flex flex-col text-center m-auto">
          <img
            src={weatherData.condition.icon.replace(/\/64x64\//, "/128x128/")}
            alt="sun-star"
          />
          <p className="text-xl font-bold ">{weatherData.condition.text}</p>
        </div>
      </div>
      <div className="w-1/3 flex flex-col space-y-4 items-end">
        <div className="flex space-x-8">
          <div className="flex flex-col ">
            <div className="mb-2">
              <HumidityLogo />
              <p className="text-center text-sm">{weatherData.humidity}%</p>
            </div>

            <p className="text-center text-sm">Humidity</p>
          </div>
          <div className="flex flex-col">
            <div className="mb-2">
              <WindSpeed />
              <p className="text-center text-sm ">{weatherData.wind_kph}km/h</p>
            </div>

            <div>
              <p className="text-center text-sm">Wind Speed</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-12">
          <div className="flex flex-col">
            <div className="mb-2 ">
              <Pressure />
              <p className="text-center text-sm ">
                {weatherData.pressure_mb} Pa
              </p>
            </div>
            <p className="text-center text-sm ">Pressure</p>
          </div>
          <div className="flex flex-col">
            <div className="mb-2 pr-3">
              <UV />
              <p className="text-center text-sm ">{weatherData.uv}</p>
            </div>
            <p className="text-center text-sm pr-3">UV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
