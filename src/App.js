import {BrowserRouter as Router, Switch, Link, Route, withRouter } from "react-router-dom";


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
          <h2></h2>
      </div>
      </Router>
  );
}