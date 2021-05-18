import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStateAdd } from "../../redux/new-user-reducer";
import FormRegistration from "./FormRegistration/FormRegistration";

const AddNewUser = () => {
  const state = useSelector((state) => state.newUserReducer);
  console.log(state);
  const dispatch = useDispatch();
  let click = () => {
    if (state.addNewUser) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div>
      {state.addNewUser ? <FormRegistration /> : null}

      <button
        onClick={() => {
          dispatch(getStateAdd(click()));
        }}
      >
        Добавить нового пользователя
      </button>
    </div>
  );
};

export default AddNewUser;
