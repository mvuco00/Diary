const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "CREATE_POST":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
