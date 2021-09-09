import {Movies} from "./components/moviesListCard/Movies";
import './App.css'
import {Header} from "./components/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Movie} from "./components/moviesListCard/Movie";
import {MoviesInfo} from './components/MovieInfo/MoviesInfo'
import {useState} from "react";
// import {ThemeProvider} from "react"
// import {Splash} from "react"
// import {Themes} from '/src/components/theme/ThemeWhiteDark'

export default function App() {
    let state = useSelector(state => state)
    let dispatch = useDispatch();
    //
    // const [theme, setTheme] = useState("light")
    // const Page = movie.div`background: ${props => props.theme.pageBackground}`

    return (
        // <ThemeProvider theme={Themes[theme]}>
        //     <Splash theme={theme} setTheme={setTheme}/>
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
        // </ThemeProvider>

    )
};
