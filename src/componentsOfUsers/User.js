import UserDetails from "./UserDetails";
import {withRouter} from "react-router-dom";
import {Route} from "react-router-dom";

function User({user, history}) {
    const navigateTo = () => {
        history.push({
            pathname: `/usersPage/${user.id}`,
            state: user
        });
    }
    return (
        <div>
            {user.name} - <button onClick={ navigateTo}>show details</button>
            <Route path={`/usersPage/${user.id}`} component={UserDetails}/>
        </div>
    )
}

export default withRouter(User);