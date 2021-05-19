const GET_USERS = "GET_USERS";
const GET_VALUE = "GET_VALUE";

let initialState = {
  users: [],
  tableTitle: ["id", "firstName", "lastName", "email", "phone"],
  searchBarValue: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      // state.users.push(action.users);
      return {
        ...state,
        users: action.users,
      };
    case GET_VALUE:
      return {
        ...state,
        searchBarValue: action.value,
      };
    default:
      return { ...state };
  }
};

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

export const getSearchBarValue = (value) => {
  return {
    type: GET_VALUE,
    value,
  };
};

export default usersReducer;
