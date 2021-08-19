import {useEffect, useState} from "react";
import {commentsPage} from "../components/ServiceForAll";
import {Comment} from "./Comment";

export function Comments () {
    let [comments, setComments]= useState([]);

    useEffect(() => {
        commentsPage().then(value => setComments([...value]));
    }, []);

    return(
        <div>
            {comments && comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
}