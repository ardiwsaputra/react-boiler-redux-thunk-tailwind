import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { createLogger } from "redux-logger";

const initialState = {};

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(createLogger());
}

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
