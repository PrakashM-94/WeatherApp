import React from "react";
import "bootstrap/dist/css/bootstrap.min.css.map";

function Current({ currentWeather, location }) {
  console.log("this is current npage....");
  return (
    <div className="container mt-5 ">
      <h4 className="text-center text-white mb-3 ">
        Current Weather of {location.name}, {location.region},{" "}
        {location.country}.
      </h4>

      <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-4  g-2">
          {/* first row */}
          <div className="col">
            <div className="p-1 d-flex">
              {" "}
              <img
                src={currentWeather?.condition?.icon}
                className="  "
                alt="..."
              />
              <div className=" text-white m-2">
                {currentWeather?.condition?.text}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="p-2">
              {" "}
              <div className=" text-white ">
                Temp(c):{currentWeather.temp_c}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="p-2">
              <div className=" text-white">Temp(f):{currentWeather.temp_f}</div>
            </div>
          </div>

          <div className="col">
            <div className="p-2">
              {" "}
              <div className="text-white">
                Humidity:{currentWeather.humidity}
              </div>
            </div>
          </div>

          {/* second row */}

          <div className="col">
            <div className="p-2">
              <div className=" text-white ">
                Wind deg:{currentWeather.wind_degree}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-2">
              {" "}
              <div className=" text-white ">
                wind Dir:{currentWeather.wind_dir}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-2">
              {" "}
              <div className=" text-white">
                W.speed(kph):{currentWeather.wind_kph}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-2">
              {" "}
              <div className=" text-white ">
                W.speed(mph):{currentWeather.wind_mph}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Current;
