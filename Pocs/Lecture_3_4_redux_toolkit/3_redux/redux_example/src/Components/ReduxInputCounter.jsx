import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import counterInputSlice from "../redux/slice/CounterInputSlice";
const actions=counterInputSlice.actions;
function ReduxInputCounter() {
    // state management
    const { count } = useSelector((store) => store.counterInputSlice);
    const [value, setValue] = useState("");
    const dispatch=useDispatch();
    // bussiness logic
    const increment = () => {
        dispatch(actions.increment());
    }
    const decrement = () => {
        dispatch(actions.decrement());
    }
    const updateDeltaHandler = () => {
        dispatch(actions.updateDelta(value));
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