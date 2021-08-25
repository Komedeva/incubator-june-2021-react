import {withRouter} from "react-router";

function User({user, history}) {
    const navigateTo = () => {
        history.push(`/usersPage/${user.id}`);
    }
    return (
        <div>
            {user.name} - <button onClick={navigateTo}>show details</button>
        </div>
    )
}

export default withRouter(User);