import { useState } from "react";
import { useSelector } from "react-redux";

function ReduxInputCounter() {
    // state management
    const { count, delta } = useSelector((store) => store.counterInputSlice);
    const [value, setValue] = useState("");

    // bussiness logic
    const increment = () => {
        setCount(count + delta);
    }
    const decrement = () => {
        setCount(count - delta);
    }
    const updateDeltaHandler = () => {
        setDelta(Number(value));
    }
    // ui 
    return (
        <>
            <div>
                <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={updateDeltaHandler}>update Delta</button>
            </div>
            <div style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw"
            }}>
                <button onClick={increment}>+</button>
                <p>Count :{count}</p>
                <button onClick={decrement}>-</button>
            </div>
        </>)
}
export default ReduxInputCounter;