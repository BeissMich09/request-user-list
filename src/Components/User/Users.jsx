import React from "react";
import { useDispatch } from "react-redux";
import { getStateWindow, getUser } from "../../redux/users_reducer";
import style from "./User.module.css";

const User = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(getUser(item));
        dispatch(getStateWindow(true));
      }}
      className={style.user}
    >
      <div className={style.required_info}>
        <p>{item.id}</p>
        <p>{item.firstName}</p>
        <p>{item.lastName}</p>
        <p>{item.email}</p>
        <p>{item.phone}</p>
      </div>
    </div>
  );
};

export default User;
