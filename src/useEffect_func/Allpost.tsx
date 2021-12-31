import {useEffect, useState} from "react";
import axios from "axios";

interface Ipost {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Allpost = () =>{
    const [posts, setPosts]= useState<Ipost[]>([])
    const [id, setId]= useState<string|number>('')
    const [post, setPost]= useState<Ipost|null>(null)
    const [showPost, setShowPost] = useState(false)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                response => setPosts(response.data)
            )
            .catch(
                error =>  console.log(`Error Occured ${error}`)
            )
    },[])

    useEffect( () => {
        console.log(`call for id ${id}`)
        if(id !== ''){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(
                    response => setPost(response.data)
                )
                .catch(
                    error =>  console.log(`Error Occured ${error}`)
                )}
    },[id])
    return(
        !showPost ? (
                <div>
                    {posts.map(post =>
                        <div key={post.id}>
                            <button onClick={()=>
                            {
                                setId(post.id)
                                setShowPost(true)
                            }
                            }>{post.title}</button>
                        </div>)}
                </div>) :
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
    );
}

export default Allpost;