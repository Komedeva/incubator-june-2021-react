import {Movies} from "./components/moviesListCard/Movies";
import './App.css'
import {Header} from "./components/header/Header";
import {useDispatch, useSelector} from "react-redux";
// import {BrowserRouter as Router, Link, Route} from "react-router-dom";


export default function App() {
    let state = useSelector(state => state)
    let dispatch = useDispatch();
    return (
        // <Router>
        //     <Route path={'/searchMovie'}>
                <div>
                    <header>
                        <Header/>
                        <Movies/>
                        {/*<Link to={'/MovieInfo'}> sksoljaxdksa </Link>*/}
                    </header>
                </div>
            // </Route>
        // </Router>

    )
};
