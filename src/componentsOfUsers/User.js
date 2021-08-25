import UserDetails from "./UserDetails";
import {withRouter} from "react-router-dom";
import {Route} from "react-router-dom";

function User({user, history}) {
    const navigateTo = () => {
        history.push(`/usersPage/${user.id}`);
    }
            console.log(user)
    return (
        <div>
            {user.name} - <button onClick={UserDetails}>show details</button>
            {/*<Route component={UserDetails}/>*/}
        </div>
    )
}

export default withRouter(User);