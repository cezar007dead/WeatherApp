export default (state, action) => {
  debugger;
  switch (action.type) {
    case "weather":
      return {
        weatherData: action.payload
      };

    default:
      return state;
  }
};
