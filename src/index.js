import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {DiscoverMovie} from "./service/MovieService";

let initialState = {
    moviesPages: {},
    genres: [],
    stars: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "PUT":
            return {...state, moviesPages: {...action.payload}};
        case "GET_GENRE":
            return {...state, genres: {...action.payload}};

        // case "STARS_RATING": {
        //     return {...state, stars: {...action.payload}}
        // }

        default:
            return state;
    }
}
export const putMoviesPages = (payload) => {
    return {type: "PUT", payload};
};

export const getGenres = (payload) => {
    return {type: "GET_GENRE", payload};
};

// export const getStars = (payload) => {
//     return{type:"STARS_RATING", payload};
// };

let store = createStore(reducer);
// store.dispatch({})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
