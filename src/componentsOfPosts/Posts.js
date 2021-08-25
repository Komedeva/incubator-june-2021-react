import {useEffect, useState} from "react";
import {postsPage} from '../service/API'
import {Post} from './Post'
import {Route} from "react-router-dom";
import {PostDetails} from "./PostDetails";


export default function Posts(props) {
    let {match: {url}} = props;
    let [posts, setPosts] = useState([]);


    useEffect(() => {
        postsPage().then(value => setPosts([...value]));
    }, []);
    return (
        <div>
            {posts.map(value => <Post key={value.id} post={value}/>)}
            <hr/>
            <Route path={'/postsPage/:id'} component={PostDetails}/>
        </div>
    );
}
