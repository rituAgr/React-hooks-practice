import {useState} from "react";

const Counter_useState = () => {
    const[counter, setCounter] = useState({
        counter1: 0,
        counter2: 10
    })

    const counterHandler = (isCounter1: boolean, value: number) =>{
        isCounter1 ? (setCounter(
            {
                ...counter,
                counter1: counter.counter1+value
            }
        )) :(
            setCounter({
                ...counter,
                counter2: counter.counter2+value
            })
        )
    }
    return(
        <div>
            <div>
                counter1 = {counter.counter1}
                <button onClick={()=> counterHandler(true, 1)}>Increment</button>
                <button onClick={()=> counterHandler(true, -1)}>Decrement</button>
            </div>
            <div>
                counter2 = {counter.counter2}
                <button onClick={()=> counterHandler(false, 1)}>Increment</button>
                <button onClick={()=> counterHandler(false, -1)}>Decrement</button>
            </div>
        </div>
    );
}

export default Counter_useState;