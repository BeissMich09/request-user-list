const GET_USERS = "GET_USERS";
const GET_VALUE = "GET_VALUE";
const PUSH_USER = "PUSH_USER";

let initialState = {
  users: [],
  tableTitle: ["id", "firstName", "lastName", "email", "phone"],
  searchBarValue: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      let newArr = state.users.concat(action.users);
      return {
        ...state,
        users: newArr,
      };
    case GET_VALUE:
      return {
        ...state,
        searchBarValue: action.value,
      };
    case PUSH_USER:
      console.log(action.user);
      state.users.unshift(action.user);
      return {
        ...state,
        users: state.users,
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
export const pushNewUser = (user) => {
  return {
    type: PUSH_USER,
    user,
  };
};

export default usersReducer;
