import React from "react";
import "bootstrap/dist/css/bootstrap.min.css.map";

function Current({ currentWeather, location }) {
  return (
    <div className="container mt-5 ">
      <h4 className="text-center text-white mb-3 ">
        Current Weather of {location.name}, {location.region},{" "}
        {location.country}.
      </h4>

      {/* first row */}
      <div className="row ">
        {/* col-1 */}
        <div className="col-3 ">
          <div className="col card h-75 p-2">
            <div className="card-body d-flex ">
              <img 
                src={currentWeather?.condition?.icon}
                className="card-img-top w-25 h-150 mb-1 px-2"
                alt="..." 
              />
              <h5 className="card-title text-white ms-3 ">
                {currentWeather?.condition?.text}
              </h5>
            </div>
          </div>
        </div>

        {/* col-2 */}
        <div className="col-3">
          <div className="col card">
            <div className="card-body">
              <h5 className="card-title text-white ">
                Temp(in c):{currentWeather.temp_c}
              </h5>
            </div>
          </div>
        </div>

        {/* col-3 */}
        <div className="col-3">
          <div className="col card">
            <div className="card-body text-white">
              <h5 className="card-title ">
                Temp(in f):{currentWeather.temp_f}
              </h5>
            </div>
          </div>
        </div>

        {/* col-4 */}
        <div className="col-3">
          <div className="col card">
            <div className="card-body">
              <h5 className="card-title text-white">
                Humidity:{currentWeather.humidity}
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* second row */}
      <div className="row mt-3">
        {/* col-1 */}
        <div className="col-3 ">
          <div className="col card">
            <div className="card-body d-flex">
              <h5 className="card-title text-white ">
                Wind degree:{currentWeather.wind_degree}
              </h5>
            </div>
          </div>
        </div>

        {/* col-2 */}
        <div className="col-3">
          <div className="col card">
            <div className="card-body">
              <h5 className="card-title text-white">
                wind Dir:{currentWeather.wind_dir}
              </h5>
            </div>
          </div>
        </div>

        {/* col-3 */}
        <div className="col-3">
          <div className="col card">
            <div className="card-body ">
              <h5 className="card-title text-white">
                Wind speed(kph):{currentWeather.wind_kph}
              </h5>
            </div>
          </div>
        </div>

        {/* col-4 */}
        <div className="col-3">
          <div className="col card">
            <div className="card-body">
              <h5 className="card-title text-white ">
                Wind speed(mph):{currentWeather.wind_mph}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Current;
