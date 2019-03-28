import * as service from "../Service/weatherService";

export const getWeatherAction = data => {
  debugger;
  return { type: "weather", payload: data };
};

export const getWeatherActionAsnc = (lat, long) => {
  debugger;
  return dispach => {
    debugger;
    let weatherData = JSON.parse(localStorage.getItem("weatherData"));
    let date = localStorage.getItem("date");

    if (weatherData !== null) {
      if (Date.now() - date <= 3600000) {
        dispach(getWeatherAction(weatherData));
      } else {
        service
          .get(lat, long)
          .then(response => {
            localStorage.setItem("date", Date.now());
            localStorage.setItem("weatherData", JSON.stringify(response.data));

            dispach(getWeatherAction(response.data));
          })
          .catch();
      }
    } else {
      service
        .get(lat, long)
        .then(response => {
          localStorage.setItem("date", Date.now());
          localStorage.setItem("weatherData", JSON.stringify(response.data));

          dispach(getWeatherAction(response.data));
        })
        .catch();
    }
    // service
    //   .get(lat, long)
    //   .then(response => {
    //     dispach(getWeatherActionAsnc(response.data));
    //   })
    //   .catch();
  };
};
