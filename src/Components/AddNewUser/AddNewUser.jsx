import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStateAdd } from "../../redux/new-user-reducer";
import FormRegistration from "./FormRegistration/FormRegistration";
import style from "./AddNewUser.module.css";

const AddNewUser = () => {
  const state = useSelector((state) => state.newUserReducer);
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
      <button
        className={style.add_user}
        onClick={() => {
          dispatch(getStateAdd(click()));
        }}
      >
        Добавить нового пользователя
      </button>
      {state.addNewUser ? <FormRegistration /> : null}
    </div>
  );
};

export default AddNewUser;
