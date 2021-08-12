import {getComments} from "../../services/comment.service";
import {Comment} from '../comment/Comment';

import {useEffect, useState} from "react";


export default function Comments (){
    const [comments, setComments] = useState();

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, []);

    return(
        <div>
            {comments && comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    )
}