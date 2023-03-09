import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount, reset } from "./counterAction";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCount());
  };

  const handleDecrement = () => {
    dispatch(decrementCount());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
