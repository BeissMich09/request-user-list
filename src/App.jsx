import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AddNewUser from "./Components/AddNewUser/AddNewUser";
import TitlePage from "./Components/TitlePage/TitlePage";
import { getUserCount, getUsers } from "./redux/users_reducer";
import loading from "./assets/img/loading.gif";

const App = () => {
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
  console.log(state.users);
  return (
    <div className="App">
      {state.countUsers !== 0 ? (
        state.users.length !== 0 ? (
          <div>
            <AddNewUser />
            <TitlePage />
          </div>
        ) : (
          <div className="container_loader">
            <img className="img" src={loading} alt="loader" />
          </div>
        )
      ) : (
        <div className="buttons">
          <button
            onClick={() => {
              dispatch(getUserCount(32));
            }}
          >
            Загрузить маленький набор данных (32)
          </button>
          <button
            onClick={() => {
              dispatch(getUserCount(1000));
            }}
          >
            Загрузить большой набор данных (1000)
          </button>
        </div>
      )}
      {/* <img className="img" src={loading} alt="loader" /> */}
    </div>
  );
};

export default App;
