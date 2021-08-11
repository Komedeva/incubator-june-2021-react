import {useEffect, useState} from "react";
import {User} from '../user/User';

import {getUsers} from "../../services/user.service";


export default function Users(){

    let [users, setUsers]= useState([]);

    useEffect(()=> {
        getUsers().then(value => setUsers([...value]));
    }, []);

    console.log(users[0]);

    return (
        <div>

            {/*<User user={{a: 1, b: 2, c: 3}}/>*/}
            <User user={users[0]}/>

        </div>
    );
}