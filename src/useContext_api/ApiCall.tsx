import React, {useEffect, useState} from "react";
import axios from "axios";
import ApiCallById from "./ApiCallById";

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}
export const ResponseIdsContext = React.createContext<number[]>([]);

const ApiCall = () => {
    const[postIds, setPostIds] = useState<number[]>([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                let posts: IPost[]= response.data;
                console.log(posts.map(post => post.id))
                setPostIds(posts.map(post => post.id));
            })
            .catch()
    },[])

    return(
        <ResponseIdsContext.Provider value={postIds}>
            <ApiCallById/>
        </ResponseIdsContext.Provider>
    )
}

export default ApiCall;