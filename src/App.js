import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import Current from "./WeatherComponents/Current";
import Forecast from "./WeatherComponents/Forecast";
import "../node_modules/bootstrap/dist/js/bootstrap";

function App() {
  let [city, setCity] = useState();
  let [clickedCity, setClickedCity] = useState();
  let [getCityData, setGetCityData] = useState([]);
  let [currentWeather, setCurrent] = useState([]);
  let [forecastWeather, setForecast] = useState([]);
  let [location, setLocation] = useState([]);

  let autoCompURL =
    "https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q=";

  useEffect(() => {
    if (city && city.length > 3) {
      fetchAutoCompAPI();
    }
  }, [city]);

  let WeatherURL = (city) =>
    `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`;

  let fetchAutoCompAPI = async () => {
    try {
      let response = await axios.get(autoCompURL + city);
      let resp = response.data;
      console.log(resp);
      let cityData = resp.map((data) => {
        return `${data.name},${data.region},${data.country}`;
      });
      setGetCityData(cityData);
    } catch (e) {
      console.log("error", e);
    }
  };

  let handleSelectedCity = (city) => {
    console.log("clicked city", city);
    setClickedCity(city);
    fetchWeatherAPI(city);
    setGetCityData([]);
  };

  let fetchWeatherAPI = async (city) => {
    try {
      let response = await axios.get(WeatherURL(city));
      let resp = response.data;
      //console.log(resp);
      setCurrent(resp.current);
      setForecast(resp.forecast);
      setLocation(resp.location);
      console.log("current", resp.current);
      console.log("forecast", resp.forecast);
      console.log("location", resp.location);
    } catch (e) {
      console.log("Weather API error", e);
    }
  };

  return (
    <div className="container bg-primary p-5 rounded mt-5  ">
      <h2 className="weatherhead-div text-center mb-3 text-info ">Weather Condition</h2>
      <input
        type="text"
        value={clickedCity}
        className="form-control"
        onChange={(e) => {
          setCity(e.target.value);
          if (e.target.value === "") {
            setCurrent();
            setForecast();
            setLocation();
            setClickedCity();
          }
        }}
      />
      {/* {city && <h4 className="text-white">{city}</h4>} */}
      {getCityData &&
        getCityData.map((city, index) => {
          return (
            <div
              key={index}
              className="bg-info text-center rounded p-1 m-0 text-white bg-opacity-10 border border-info border-opacity-25 fs-10 "
              style={{ cursor: "pointer" }}
              onClick={() => handleSelectedCity(city)}
            >
              {city}
            </div>
          );
        })}
        
      {currentWeather && (
        <Current currentWeather={currentWeather} location={location} />
      )}
      {forecastWeather && (
        <Forecast forecastWeather={forecastWeather} location={location} />
      )}
      
    </div>
  );
}

export default App;
