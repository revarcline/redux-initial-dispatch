let state;

const changeState = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const dispatch = (action) => {
  state = changeState(state, action);
  render();
};

const render = () => {
  document.body.textContent = state.count;
};
