import HumidityLogo from "./icons/Humidity";
import Pressure from "./icons/Pressure";
import WindSpeed from "./icons/WindSpeed";
import UV from "./icons/UV";

const WeatherDetails = ({ weatherData }) => {
  return (
    <div className="w-2/3 bg-[#444444] rounded-xl p-8 flex text-white items-center shadow-sm shadow-[#00d8ff] border-1 border-gray-800">
      <div className="w-1/3 flex flex-col space-y-3 ">
        <p className="text-5xl font-extrabold tracking-wider">{weatherData.temp_f}&#xb0;F</p>
        <p className="text-xl font-semibold tracking-wider">
          Feels Like: {weatherData.feelslike_c}&#xb0;C
        </p>
        <div className="flex space-x-2 items-center">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/ElEQVR4nO2Zyy4EQRSGi5hERGJjxCMgHoGNy4aFxCOI64zL0tblDXgE8SBYiEjcFtiwIhIbK+zmk2NOJ63NjKmZbqqkvqSTTlfXOf8/daqqM2VMxgArchmfAdaAEmXWjY8ACzET6P2q8QnK5VSqYKTkTZkB8zHRUloRi96YAeZiYj/LKHKRKDe5lo0vJpJGKozYsssmiom2L0b0WTH2/pxxBeBRRRUqtH0zos8L2ufBuAIwDIxWaatoRNtGpa/xAWoY8QqCEccII+IaYURcI4yIa/ynETkCDv9aRyAQCAT8BDgATo3v8I929k+M76AY38E1I0AXkPstI0Ab0GHb76egncALcAHkszYC5IEz4BlotxZcI3AOOFdNVzZmbD/jKZuQHKiZtoaF15HgBuhNNcH3HNdZ5MjczK+ZqJLwIo0alhgay7p00zAjid+SSYFW/Zd9R+fHk05aud8FRuSdRJ8e4L2RxcSk9Ct2J56NA5f8jAgeS/TtTnWFagSgBdiMneLKCrcE9MleoFe/Hu5EJSTvbkhf4wrAtop7BWZqiVPTs1qWwpZxAWAyZmLI8pQrMjORrcr6Nsp7FTPbQH854RXuUt/4bACmY3PCuta1zKI5M2X+CmBfRRSaiCFH1cJeuursRNyqiIEmYgxqjOtmxURD6zPHYkS+MH3n5AOmbkN4s1cmDwAAAABJRU5ErkJggg==" />
          <div className="flex flex-col">
            <p className="text-sm font-semibold">Sunrise</p>
            <p className="text-sm font-semibold">N/A</p>
          </div>
        </div>
        <div className="flex space-x-2 items-center">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB70lEQVR4nO2Zyy4EQRSGi5CISGwQj4B4BERcNiwkHkFmiLsdS5c34BHEg2AhInFNsGElkdhYYeeTE6eltJiZmummKqkv6WQyOafO/0+d6uqpNiZngH3gxIQOigkdohHPiDPiG3FGfCPOiG8ENSNALzDoagQYBgaMLwBXwDswV6kRidWcB+MLQEFFyTVfzojEWPFF4xNA0RK39JsRYMaKWzA+wnczy2kjQZhIAKZVqLCWGAFWLBOLJgSARUt0QlgmEqw2so18rZ2gAJYtM6smZPhss7DaKRKJRCLeEM9+fSOo/+yliEbyAmgFGv+qtYAGoNk1r9ygLcAzcA60520EaAdOgSegyVlwiYEbgTPVdOliBjgEDhxNXGotMdNQtfAKCtwAnZkW+FnjOo8auZv5MxO/FDzPoodlDB3LuXWzMCOFX9NFgXo9093W9fGoi1Y+7wBDEpPK6QDeqrmZmIx+xbbUd6PABeURwSOp3LZM71DVANQBG9aJidzhZoEu2Qv06taD66SFJHZdco0vAFsq7gWYKiVOTRe0LYVN4wPAuGWizyGv3zIzlq/KyjbKexVTqPKcWLjLfONzAZi01oRzr2ubJWtmwvwXwJ6KmKthDHnpI+xmq85NxK2K6Knx/aNwXauYZGpD5kiMyBNm6Bx/ACrUQ216v8tzAAAAAElFTkSuQmCC" />
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
              <p className="text-center text-sm ">{weatherData.pressure_mb} Pa</p>
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
