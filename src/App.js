import {Movies} from "./components/moviesListCard/Movies";
import './App.css'
import {Header} from "./components/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Movie} from "./components/moviesListCard/Movie";
import {MovieInfo} from "./components/MovieInfo/MovieInfo";
import {MoviesInfo} from './components/MovieInfo/MoviesInfo'

export default function App() {
    let state = useSelector(state => state)
    let dispatch = useDispatch();

    return (

        <Router>
            <Switch>
                <Route path={'/MovieInfo/:id'} component={MoviesInfo}/>
                <div>
                    <header>
                        <Header/>
                        <Movies/>
                    </header>
                    <Route path={'/searchMovie'} component={Movie}/>
                </div>

            </Switch>
        </Router>

    )
};
