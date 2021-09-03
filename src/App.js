import {DiscoverMovie} from "./service/MovieService";
import {useEffect} from "react";
import {Movies} from "./components/Movies";
import './App.css'
// import {Header} from "./components/Header";

export default function App() {
    // useEffect(() => {
    //     DiscoverMovie().then(value => console.log(value.data))
    // }, []);

    return (
        <div>
            <header>

                {/*<Header/>*/}
                <Movies/>
                {/*<img/>*/}
            </header>
        </div>
    );
}