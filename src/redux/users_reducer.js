const GET_USERS = "GET_USERS";

let initialState = {
  users: [],
  tableTitle: ["id", "firstName", "lastName", "email", "phone"],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      // state.users.push(action.users);
      return {
        ...state,
        users: action.users,
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

export default usersReducer;
