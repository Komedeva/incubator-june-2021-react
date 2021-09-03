import {DiscoverMovie} from "./service/MovieService";
import {useEffect} from "react";
import {Movies} from "./components/moviesListCard/Movies";
import './App.css'
import {Header} from "./components/header/Header";

export default function App() {
    // useEffect(() => {
    //     DiscoverMovie().then(value => console.log(value.data))
    // }, []);

    return (
        <div>
            <header>
                <Header/>
            </header>
                <Movies/>
                {/*<img/>*/}
        </div>
    );
}