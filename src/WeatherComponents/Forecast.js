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
          <div className="accordion accordion-flush " id="accordionFlushExample " key={index}>
            <div className="accordion-item m-1" >
              <div className="accordion-header" >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${index}`}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <div className="d-flex flex-row   align-item-center flex-wrap fw-light">
                    <div className="p-2 ">{data?.date}</div>
                    <div className="p-2">
                      <img src={data?.day?.condition?.icon} /> 
                    </div>
                    <div className="p-2">{data?.day?.condition?.text}</div>
                    <div className="p-2">{data.day.maxtemp_c}</div>
                  </div>
                </button>
              </div>
              <div
                id={`${index}`}
                className="accordion-collapse collapse"

                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                 {data.hour.map((data)=>{
                    return(
                       <>
                      <div className="fw-light m-1"> {data.time} <span className="fw-ligh fs-6 ms-5">max temp:{data.temp_c}</span></div>

                        <div
                        className="progress"
                        role="progressbar"
                        aria-label="Example with label"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar " style={{width: `${data.temp_c}%`}}>
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
