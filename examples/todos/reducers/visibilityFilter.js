const visibilityFilter = (state = "SHOW_ALL", action) => {
  console.log(`reducer visibilityFilter state`, state);
  console.log(`reducer visibilityFilter action`, action);
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
