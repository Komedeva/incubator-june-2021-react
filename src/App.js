import {BrowserRouter as Router, Switch, Link, Route, withRouter } from "react-router-dom";
import {User} from "./user/User";


export default function App() {
  return (
      <Router>
    <div>
        <Link to={'/'}>HOME</Link>
      <Link to={'/usersPage'}> Users</Link>
        <br/>
      <Link to={'/postsPage'}> Posts </Link>
        <br/>
      <Link to={'/commentsPage'}> Comments</Link>
        <br/>
    </div>
      <div>
          <Route path={'/usersPage'}></Route>
      <User/>
      </div>
      </Router>
  );
}