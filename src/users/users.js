import {useEffect, useState} from "react";
import {getPostOfUser, getUsers} from '../service/user-post'
import {getUser} from "../service/user-post";
import {getPost} from "../service/user-post";
import {getPostOfUsers} from '../service/user-post'
import User from "../user/User";
import {Post} from "../post/Post";
import './style.css'

export default function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});

    let [posts, setPosts]= useState(null);

    const chooseUser = (userItem) => {
        console.log(userItem);
        setUser(userItem);
    }

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])


    useEffect(() => {
        getPostOfUser(user.id).then(value => setPosts([...value]))
    }, [user])



    return (
        <div className={'users-wrap'}>
            <div>
                {
                users && users.map(value =>
                    <User
                        key={value.id}
                        user={value}
                        chooseUser={chooseUser}
                    />
                )
                }
            </div>

            <div className={'posts'}>
                {
                    posts && posts.map(value =>
                        <Post
                            key={value.id}
                            post={value}/>
                    )
                }
            </div>
        </div>
    );
}