import React from "react";
import style from "./User.module.css";

const User = ({ item }) => {
  return (
    <div className={style.user}>
      <p>{item.id}</p>
      <p>{item.firstName}</p>
      <p>{item.lastName}</p>
      <p>{item.email}</p>
      <p>{item.phone}</p>
    </div>
  );
};

export default User;
