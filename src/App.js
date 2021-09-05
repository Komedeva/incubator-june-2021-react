import {DiscoverMovie} from "./service/MovieService";
import {useEffect} from "react";
import {Movies} from "./components/moviesListCard/Movies";
import './App.css'
import {Header} from "./components/header/Header";
import {Route, Router} from "react-router";
import Star from "./components/starsRating/Star";
import {Genre} from "./components/genres/Genre";


export default function App() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <Movies/>
            {/*<Star/>*/}
            <Genre/>

        </div>
    );
}