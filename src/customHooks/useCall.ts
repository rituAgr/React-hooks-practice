import {useEffect, useState} from "react";
import axios from "axios";

const useApi = <T>(postId: any) => {

    const [status, setStatus] = useState('');
    const [data, setData] = useState<T| null>(null);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                setData(response.data)
                setStatus("SUCCESS")
            })
            .catch(error => {
                console.log(`Some went wrong ${error}`)
                setStatus("FAILURE")
            })
    },[postId])

    return [status, data]

}

export default useApi