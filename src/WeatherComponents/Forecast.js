import React from "react";
import "bootstrap/dist/css/bootstrap.min.css.map";

function Forecast({forecastWeather, location}) {
  console.log("forecast........", forecastWeather.Forecastday);

  return (
    <div>
      <h4 className="text-center text-white mt-4">
        Forecast Weather of {location?.name}, {location?.region},{" "}
        {location?.country}.
      </h4>

      {forecastWeather?.forecastday?.map((data, index) => {
        return (
          <div class="accordion accordion-flush" id="accordionFlushExample " key={index}>
            <div className="accordion-item" >
              <h2 className="accordion-header" >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${index}`}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <div className="d-flex flex-row mb-3 align-item-center">
                    <div className="p-2">{data?.date}</div>
                    <div className="p-2">
                      <img src={data?.day?.condition?.icon} />
                    </div>
                    <div className="p-2">{data?.day?.condition?.text}</div>
                    <div className="p-2">{data.day.maxtemp_c}</div>
                  </div>
                </button>
              </h2>
              <div
                id={`${index}`}
                className="accordion-collapse collapse"

                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                 {data.hour.map((data)=>{
                    return(
                       <>
                      <h5> {data.time} max temp:{data.temp_c}</h5>

                        <div
                        className="progress"
                        role="progressbar"
                        aria-label="Example with label"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar" style={{width: `${data.temp_c}%`}}>
                        </div>
                      </div>
                       </>
                    )
                 })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Forecast;
