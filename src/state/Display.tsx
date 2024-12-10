import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./state/store.ts";
import {decrement, incrementByValue} from "./counter/counterSlice.ts";

const Display = () =>{
    const count = useSelector ((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            Counter Display
            <h1>{count}</h1>
            <button onClick={() => dispatch(incrementByValue(10))}>Increment By 10</button>
        </div>
    );
};

export default Display;