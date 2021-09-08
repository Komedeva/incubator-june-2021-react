import {Movies} from "./components/moviesListCard/Movies";
import './App.css'
import {Header} from "./components/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Movie} from "./components/moviesListCard/Movie";


export default function App() {
    let state = useSelector(state => state)
    let dispatch = useDispatch();
    return (
        <Router>
            <Switch>
                <Route exact path={'/searchMovie'} component={Movie}/>
                <div>
                    <header>
                        <Header/>
                        <Link to={'/MovieInfo'}> </Link>
                        <Movies/>
                    </header>
                </div>

            </Switch>
        </Router>

    )
};
