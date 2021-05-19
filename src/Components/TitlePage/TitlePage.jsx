import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchBarValue, getUsers } from "../../redux/users_reducer";
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
  let array = state.users;
  const [newArr, setNewArr] = useState([]);

  function search() {
    console.log(state.searchBarValue !== "");
    if (state.searchBarValue !== "") {
      let result = state.users.slice().filter((item) => {
        // console.log(item);
        return (
          item.firstName.trim().includes(state.searchBarValue) ||
          item.lastName.trim().includes(state.searchBarValue) ||
          item.email.trim().includes(state.searchBarValue) ||
          item.phone.trim().includes(state.searchBarValue) ||
          item.id.toString().includes(state.searchBarValue)
        );
      });
      setNewArr(result);
    } else {
      setNewArr([]);
    }
  }
  console.log(newArr);

  let user = (
    newArr.length !== 0 && state.searchBarValue !== "" ? newArr : array
  ).map((item) => <User key={item.id + item.firstName} item={item} />);
  let title = state.tableTitle.map((item, index) => (
    <div key={index}>{item}</div>
  ));
  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            dispatch(getSearchBarValue(e.target.value.trim()));
            if (e.target.value === "") {
              setNewArr([]);
            }
          }}
          value={state.searchBarValue}
          type="text"
        />
        <button onClick={search}>Найти</button>
      </div>
      <div className={style.title}>{title}</div>
      <div>{user}</div>
    </div>
  );
};

export default TitlePage;
