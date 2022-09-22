import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth-slice";
import counterReduce from "./counter-slice";

const store = configureStore({
  reducer: { counter: counterReduce, auth: authReducer },
});

// without redux toolkit
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, toggleCounter: state.toggleCounter };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       toggleCounter: state.toggleCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, toggleCounter: state.toggleCounter };
//   }
//   if (action.type === "toggle") {
//     return { counter: state.counter, toggleCounter: !state.toggleCounter };
//   }

//   return state;
// };
// const store = createStore(counterReducer);

export default store;
