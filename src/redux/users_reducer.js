const GET_USERS = "GET_USERS";
const GET_VALUE = "GET_VALUE";
const PUSH_USER = "PUSH_USER";
const SORT_USERS = "SORT_USERS";

let initialState = {
  users: [],
  // tableTitle: ["id", "firstName", "lastName", "email", "phone"],
  tableTitle: [
    { id: 0, name: "id", nameSort: "id" },
    { id: 1, name: "First Name", nameSort: "firstName" },
    { id: 2, name: "Last Name", nameSort: "lastName" },
    { id: 3, name: "Email", nameSort: "email" },
    { id: 4, name: "Phone", nameSort: "phone" },
  ],
  searchBarValue: "",
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
      console.log(action.user);
      state.users.unshift(action.user);
      return {
        ...state,
        users: state.users,
      };
    // case SORT_USERS:
    //   return {
    //     ...state,
    //     tableTitle: {
    //       ...tableTitle,
    //       sort: !action.bool,
    //     },
    //   };
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
