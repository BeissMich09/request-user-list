import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { getSearchBarValue, getUsers } from "../../redux/users_reducer";
import User from "../User/Users";
import OptionalWindow from "./OptionalWindow/OptionalWindow";
import style from "./TitlePage.module.css";

const TitlePage = () => {
  const state = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      `http://www.filltext.com/?rows=${state.countUsers}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(getUsers(data));
      })
      .catch((error) => alert(error));
  }, [dispatch, state.countUsers]);
  let array = state.users;
  const [newArr, setNewArr] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  function search() {
    if (state.searchBarValue !== "") {
      let result = state.users.slice().filter((item) => {
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
  const [sort, setSort] = useState(0);
  const sortArray = (array, field) => {
    let newArray;
    if (sort) {
      setSort(!sort);
      newArray = array.slice().sort(function (a, b) {
        if (a[field] > b[field]) return -1;
        if (a[field] < b[field]) return 1;
        return 0;
      });
    } else {
      setSort(!sort);
      newArray = array.slice().sort(function (a, b) {
        if (a[field] > b[field]) return 1;
        if (a[field] < b[field]) return -1;
        return 0;
      });
    }
    dispatch(getUsers(newArray));

    return newArray;
  };

  const users =
    newArr.length !== 0 && state.searchBarValue !== "" ? newArr : array;
  let user = users
    .slice((activePage - 1) * 50, activePage * 50)
    .map((item) => <User key={item.id + item.firstName} item={item} />);
  let title = state.tableTitle.map((item, index) => (
    <div onClick={() => sortArray(users, `${item.nameSort}`)} key={index}>
      {item.name}
    </div>
  ));
  return (
    <div>
      <div className={style.serach_sort}>
        {sort === 0 ? (
          <p>Нет сортировки</p>
        ) : sort ? (
          <p>Сортировка по возрастанию </p>
        ) : (
          <p>Сортировка по убыванию</p>
        )}
        <div className={style.search}>
          <input
            className={style.search_input}
            onChange={(e) => {
              dispatch(getSearchBarValue(e.target.value.trim()));
              if (e.target.value === "") {
                setNewArr([]);
              }
            }}
            value={state.searchBarValue}
            type="text"
          />
          <button className={style.search_button} onClick={search}>
            Найти
          </button>
        </div>
      </div>

      <div className={style.table_pagination}>
        {state.window ? <OptionalWindow item={state.user} /> : null}
        <div className={style.table}>
          <div className={style.title}>{title}</div>
          <div>{user}</div>
        </div>
        <div className={style.pagination_container}>
          <Pagination
            activeClass={style.activeA}
            linkClass={style.linkA}
            innerClass={style.pagination}
            itemClass={style.itemLi}
            activePage={activePage}
            activeLinkClass={style.activePage}
            itemsCountPerPage={50}
            totalItemsCount={users.length}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
