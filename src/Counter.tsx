import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./state/store";
import {decrement, increment, incrementAsync} from "./state/counter/counterSlice.ts";

const Counter = () =>{
    const count = useSelector ((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            Counter
            <h2>{count}</h2>
            <div>
                <button onClick={()=>dispatch(incrementAsync(5))}>Increment</button>
                <button onClick={()=>dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;