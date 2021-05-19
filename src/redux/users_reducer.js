const GET_USERS = "GET_USERS";
const GET_VALUE = "GET_VALUE";
const PUSH_USER = "PUSH_USER";
const GET_USER = "GET_USER";
const STATE_WINDOW = "STATE_WINDOW";
const GET_COUNT_USER = "GET_COUNT_USER";

let initialState = {
  countUsers: 0,
  users: [],
  tableTitle: [
    { id: 0, name: "id", nameSort: "id" },
    { id: 1, name: "First Name", nameSort: "firstName" },
    { id: 2, name: "Last Name", nameSort: "lastName" },
    { id: 3, name: "Email", nameSort: "email" },
    { id: 4, name: "Phone", nameSort: "phone" },
  ],
  searchBarValue: "",
  user: "",
  window: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case GET_VALUE:
      return {
        ...state,
        searchBarValue: action.value,
      };
    case PUSH_USER:
      state.users.unshift(action.user);
      return {
        ...state,
        users: state.users,
      };
    case GET_USER: {
      return {
        ...state,
        user: action.user,
      };
    }
    case STATE_WINDOW:
      return {
        ...state,
        window: action.bool,
      };
    case GET_COUNT_USER:
      return {
        ...state,
        countUsers: action.count,
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

export const getUser = (user) => {
  return {
    type: GET_USER,
    user,
  };
};
export const getStateWindow = (bool) => {
  return {
    type: STATE_WINDOW,
    bool,
  };
};
export const getUserCount = (count) => {
  return {
    type: GET_COUNT_USER,
    count,
  };
};

export default usersReducer;
