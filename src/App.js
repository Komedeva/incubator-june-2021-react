import {
    BrowserRouter as Router,
    Route,
    Link
}
    from "react-router-dom";
import Posts from "./componentsOfPosts/Posts";
import Users from "./componentsOfUsers/Users";

export default function App() {
    return (
        <Router>
            <div className={'link'}>
                <Link to={'/'}><h3>HOME</h3></Link>
                <Link to={'/usersPage'}> <h3>Users </h3></Link>
                <Link to={'/postsPage'}> <h3>Posts</h3> </Link>
                <Link to={'/commentsPage'}><h3>Comments</h3> </Link>
                <br/>
            </div>
            <div>
                <Route path={'/postsPage'} component={Posts}/>
                <Route path={'/usersPage'} component={Users}/>
            </div>
        </Router>
    );
}

