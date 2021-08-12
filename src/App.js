import {User} from "./users/User";
import {useEffect, useState} from "react";
import {getUsers} from "./service/user.service";

export default function App() {
    let [users, setUsers]= useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    return (
    <div>

        {
            users && users.map(value => <User user={value} key={value.id}/>)
        }
    </div>
  );
}