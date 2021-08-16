import {getComments} from "../service/CommentService";
import {useEffect, useState} from "react";
import {Comment} from "./Comment";
import {CommentsDetails} from './CommentsDetails';

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState(null);

    const chooseComment = (itemComment) => {
        setComment(itemComment)
    };

    useEffect(() => {
        getComments().then(value => {
            setComments([...value]);
        })
    }, []);

    return (
        <div className={'comment'}>
            <div>
                {
                    comments && comments.map(value =>
                        <Comment
                            key={value.id}
                            comment={value}
                            chooseComment={chooseComment}
                        />
                    )
                }
            </div>
            {
                comment && <div>
                    <CommentsDetails comment={comment}/>
                </div>
            }
        </div>
    )
}