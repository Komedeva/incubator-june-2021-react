import {DiscoverMovie} from "./service/MovieService";
import {useEffect} from "react";
import {Movie} from "./Movie/Movie";

export default function App() {
    useEffect(()=> {
        DiscoverMovie().then(value => console.log(value.data))
    }, [])
  return (
    <div>
        <header>
      App
        </header>
    </div>
  );
}