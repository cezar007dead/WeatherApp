import { createStore, applyMiddleware } from "redux";
import defaultReducer from "../src/reducers/defaultReducer";
import thunk from "redux-thunk";

const initialState = {
  rotating: true
};

function configureStore(state = { weatherData: {} }) {
  // initial values
  debugger;

  //const testMiddleware = store => next => action => {};

  //const store = createStore(defaultReducer, state, applyMiddleware(thunk));

  return createStore(defaultReducer, state, applyMiddleware(thunk));
}
export default configureStore;
