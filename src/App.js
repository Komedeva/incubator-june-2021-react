import {BrowserRouter as Router,
    Switch,
    Route,
    Link}
    from "react-router-dom";
import Posts from "./components/Posts";


export default function App() {
    return (
        <Router>
            <div className={'link'}>
                <Link to={'/postsPage'}> <h3>Posts</h3> </Link>

                <br/>
            </div>
            <div>
                <Route path={'/postsPage'}>
                    <Posts/>
                </Route>

            </div>
        </Router>
    );
}

