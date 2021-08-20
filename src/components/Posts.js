import {useEffect, useState} from "react";
import {postsPage} from "../service/PostAPI";
import {Post} from "./Post"
//
// export default function Posts() {
//     let [posts, setPosts] = useState([]);
//
//     useEffect(()=>{
//         getPosts().then(value => {
//             setPosts([...value]);
//             console.log(value);
//         });
//     }, [])
//
//     return (
//         <div>
//             {posts && posts.map(value =><Post post= {value} key={value.id}/>)}
//         </div>
//     );
// }
export function Posts () {
    let [posts, setPosts]= useState([]);

    useEffect(() => {
        postsPage().then(value => setPosts([...value]));
    }, []);
    return(
        <div>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
}