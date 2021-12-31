import {useState} from "react";
import useCall from "./useCall";

const Component1 = () => {
    const [postId, setPostId] = useState<string>('')
    const [id, setId] = useState<string>('')

    const [status, post] = useCall(postId);
    function submitHandler(e: any){
        e.preventDefault()
        setPostId(id);
    }

    return(
        <div>
            <form  onSubmit={(e)=>submitHandler(e)}>
                <label>Enter Post Id (Range 1-100)</label>
                <input value={id} onChange={(e)=> setId(e.target.value)} type="number"/>
                <button>Submit</button>
            </form>
            {status!=="FAILURE" &&
            <div>
                {post?.id}
                {post?.userId}
                {post?.title}
                {post?.body}
            </div>
            }
        </div>
    )
}

export default Component1;