import {DiscoverMovie} from "./service/MovieService";
import {useEffect} from "react";
import {Movies} from "./components/moviesListCard/Movies";
import './App.css'
import {Header} from "./components/header/Header";
import {Route, Router} from "react-router";
import Star from "./components/starsRating/Star";
import {Genre} from "./components/genres/Genre";
import {useDispatch, useSelector} from "react-redux";
import {MyComponent} from './components/starsRating'


export default function App() {
    let state = useSelector(state => state)
    let dispatch = useDispatch();
    return (
        <div>
            <header>
                <Header/>
            </header>
            <Movies/>
            {/*<Star/>*/}
            {/*<Rating/>*/}
            <Genre/>

        </div>
    );
}