import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";

export default function App (){
    return(
        <div>
            <Users/>
            <hr/>
            <Posts/>
            <hr/>
            <Comments/>
        </div>
    );
}
