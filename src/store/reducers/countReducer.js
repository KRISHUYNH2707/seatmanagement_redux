const DEFAULT_STATE = {
  count: 0,
};

export const countReducer = (state = DEFAULT_STATE, action) => {
  //   console.log("State", state);
  //   console.log("Action", action);

  switch (action.type) {
    case "INCREASE":
      state.count += 1;

      break;

    case "DECREASE":
      state.count -= 1;

      break;

    case "RANDOM":
      state.count = action.payload;

      break;

    default:
      break;
  }

  return { ...state };
};
