import { createStore } from 'redux';
import rootReducer from '../reducers';
import { ConnectedRouter,syncHistoryWithStore } from "react-router-redux";
// import { browserHistory } from "react-router";

const defaltData = {
                    repos : [],
                }
const store = createStore(rootReducer,defaltData,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export const history = syncHistoryWithStore(browserHistory,store);
export default store;