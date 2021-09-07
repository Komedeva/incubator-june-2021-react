import {DiscoverMovie} from "./service/MovieService";
import {useEffect} from "react";
import {Movies} from "./components/moviesListCard/Movies";
import './App.css'
import {Header} from "./components/header/Header";
import {useDispatch, useSelector} from "react-redux";


export default function App() {
    let state = useSelector(state => state)
    let dispatch = useDispatch();
    return (
        <div>
            <header>
                <Header/>
            </header>
            <Movies/>
        </div>
    );
}