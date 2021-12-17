import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducers";
const initialState = {};
const middleware = [thunk];
const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

const store =
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      /* TEST-DEV */
      process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   //comment out on production
    )
  )
export default store;