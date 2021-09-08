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
                        <Link to={'/MovieInfo'}>
                        <Movies/>
                        </Link>
                    </header>
                    <Route path={'/MovieInfo'} />
                </div>

            </Switch>
        </Router>

    )
};
// export default function App() {
//     return (
//         <Router>
//             <div className={'link'}>
//                 <Link to={'/'}><h3>HOME</h3></Link>
//                 <Link to={'/usersPage'}> <h3>Users </h3></Link>
//                 <Link to={'/postsPage'}> <h3>Posts</h3> </Link>
//                 <Link to={'/commentsPage'}><h3>Comments</h3> </Link>
//                 <br/>
//             </div>
//             <div>
//                 <Route path={'/postsPage'} component={Posts}/>
//                 <Route path={'/usersPage'} component={Users}/>
//             </div>
//         </Router>
//     );
// }
