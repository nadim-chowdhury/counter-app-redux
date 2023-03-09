import { DECREMENT, INCREMENT, RESET } from "./counterConstant";

export const incrementCount = () => {
  return {
    type: INCREMENT
  };
};

export const decrementCount = () => {
  return {
    type: DECREMENT
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};
