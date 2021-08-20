import {Posts} from "./components/Posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}
    from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/post-page'}> Post-page </Link>
            </div>
            <Route path={'posts'} component={'Post'}/>
            <Route/>
            <div>
            </div>
        </Router>
    );
}
