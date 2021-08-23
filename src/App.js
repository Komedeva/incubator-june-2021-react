import {BrowserRouter as Router, Switch, Link, Route, withRouter} from "react-router-dom";
import {Users} from "./user/Users";
import {Posts} from './posts/Posts'
import {Comments} from "./comments/Comments";
import './App.css';

export default function App() {
    return (
        <Router>
            {/*<button type="button" className="button is-primary is-light">aboba</button>*/}
            <div className={'link'}>
                <Link to={'/'}><h3>HOME</h3></Link>
                <Link to={'/usersPage'}> <h3>Users </h3></Link>
                <Link to={'/postsPage'}> <h3>Posts</h3> </Link>
                <Link to={'/commentsPage'}><h3>Comments</h3> </Link>
                <br/>
            </div>

            <div className={'userPage table'}>
                <Route path={'/usersPage'}>
                    <Users/>
                </Route>
            </div>

            <div className={'table'}>
                <Route path={'/postsPage'}>
                <Posts/>
            </Route>
        </div>
            <div className={'table'}>
                <Route path={'/commentsPage'}>
                    <Comments/>
                </Route>
            </div>


</Router>
);
}