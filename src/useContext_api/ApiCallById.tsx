import {useContext, useEffect, useState} from "react";
import {IPost, ResponseIdsContext} from "./ApiCall";
import axios from "axios";

const ApiCallById = () => {
    const postIds = useContext(ResponseIdsContext)
    const [post, setPost] = useState<IPost| null>(null)
    const [id, setId] = useState<number| null>(null)
    const [showPost, setShowPost] = useState<boolean>(false)

    useEffect(() => {
        if(id!=null){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                setPost(response.data)
            })
            .catch()
        }
    },[id])

    return(
        !showPost ? (
                <div>
                    {postIds.map((index,id) => {
                        return(
                            <div key={index}>
                                <button onClick={()=>{
                                    setId(id)
                                    setShowPost(true)
                                }}>
                                    {id}</button>
                            </div>)
                    })
                    }
                </div>):
            (
                <div>
                    <div>
                        {post?.id}
                        {post?.userId}
                        {post?.title}
                        {post?.body}
                    </div>
                    <div>
                        <button onClick={() => setShowPost(false)}>Back</button>
                    </div>
                </div>
            )
    )
}

export default ApiCallById;