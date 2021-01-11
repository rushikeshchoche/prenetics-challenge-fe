export const initialState = {
  token: null,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_USER_GENETIC":
      return {
        ...state,
        genetic: action.genetic,
      };
    default:
      return state;
  }
};

export default reducer;
