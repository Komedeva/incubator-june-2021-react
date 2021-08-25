import {UsersDetails} from "./UsersDetails";
import {Route} from "react-router-dom";

export default function User({user, history}) {
    const navigateTo = () => {
        history.push(`/usersPage/${user.id}`);
    }
    return (
        <div>
            {user.name} - <button onClick={navigateTo}>show details</button>
            <Route component={UsersDetails}/>
        </div>
    )
}

// export default withRouter(User);