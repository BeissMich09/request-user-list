const ADD_NEW_USER = "ADD_NEW_USER";

let initialState = {
  addNewUser: false,
};

const newUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        addNewUser: action.boolean,
      };
    default:
      return {
        ...state,
      };
  }
};

export const getStateAdd = (boolean) => {
  return {
    type: ADD_NEW_USER,
    boolean,
  };
};

export default newUserReducer;
