import {useEffect, useState} from "react";
import {User} from '../user/User';

import {getUsers} from "../../services/user.service";


export default function Users(){

    let [users, setUsers]= useState([]);

    useEffect(()=> {
        getUsers().then(value => setUsers([...value]));
    }, []);

    return (
        <div>
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>

            <User user={users[4]}/>

        </div>
    );
}