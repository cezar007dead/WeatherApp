import axios from "axios";
var mainUrl = "http://api.openweathermap.org/";
const apiKey = "d7efa5c9db56378082369f0d363f8db4";

let get = (lat, lon) => {
  const config = {
    url: `${mainUrl}data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}&units=imperial`,
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };
  return axios(config);
};

export { get };
// look at fetch
