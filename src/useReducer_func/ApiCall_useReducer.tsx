import axios from "axios";
import {useEffect, useReducer} from "react";
//useReducer react hook can elimate the use of useState hooks for api call

const initialState = {
    loading : false,
    data : '',
    error: ''
}

const reducer = (currentState: typeof initialState, action: any) => {

    switch (action.type){
        case 'SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case 'FAILURE':
            return {
                loading: false,
                data: '',
                error: 'Something went wrong'
            }
        default :
            return currentState;
    }
}

const ApiCall_useReducer = () => {

    const [curr, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => dispatch({
                type: 'SUCCESS',
                payload: response.data.title
            }))
            .catch(()=>dispatch({
                    type: "FAILURE",
                    payload: ''
                })
            )
    },[])

    return(
        <div>
            {curr.loading ? 'loading': curr.data}
            {curr.error ? curr.error : null}
        </div>
    )
}

export default ApiCall_useReducer