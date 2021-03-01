import {applyMiddleware, createStore} from "redux";
import { logger } from "redux-logger";
import rootReducer from "./reducers/index"
//*Finally we assign a variable to the createStore method and pass our reducers inside as arguments
//* Also passed composeWithDevTools to be able to use the redux devtools extension on chrome

export const store = createStore(rootReducer, applyMiddleware(logger))
