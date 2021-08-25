import {useEffect, useState} from "react";
import {usersPage} from "../service/API";
import User from './User';
import {Route} from "react-router-dom";
import UserDetails from "./UserDetails";


export default function Users(props) {
    let {match: {url}, history} = props;
    console.log(url);
    let [users, setUsers] = useState([]);

    useEffect(() => {
        usersPage().then(value => setUsers([...value]));
    }, []);
    return (
        <div>
            {users.map(value => <User history={history} key={value.id} user={value}/>)}
            <hr/>
            <Route path={'usersPage/:id'} component={UserDetails} />
        </div>
    );
}

