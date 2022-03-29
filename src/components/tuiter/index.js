import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import homePostReducer from "./reducers/home-post-reducer"
import navsReducer from "./reducers/navs-reducer"

import ExploreScreen from "./ExploreScreen/index.js"


const reducer = combineReducers({
    tuits: tuitsReducer,
    who: whoReducer,
    homePosts: homePostReducer,
    navs: navsReducer
});
const store = createStore(reducer);

const Tuiter = () => {
    return (
        <>
            <Provider store={store}>
                <ExploreScreen />
            </Provider>
        </>
    )
};
export default Tuiter;







