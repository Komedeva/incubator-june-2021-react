import {useEffect, useState} from "react";
import {usersPage} from '../components/ServiceForAll';
import {User} from "./User";


export function Users(){
    let [users, setUsers]= useState([]);

    useEffect(() => {
        usersPage().then(value => setUsers([...value]));
    }, []);

    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>) }
        </div>
    );
}