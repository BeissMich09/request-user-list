import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/users_reducer";
import User from "../User/Users";
import style from "./TitlePage.module.css";

const TitlePage = () => {
  const state = useSelector((state) => state.usersReducer);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(getUsers(data));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);
  let user = state.users.map((item) => <User item={item} />);
  let title = state.tableTitle.map((item) => <div>{item}</div>);
  return (
    <div>
      <div className={style.title}>{title}</div>
      <div>{user}</div>
    </div>
  );
};

export default TitlePage;
