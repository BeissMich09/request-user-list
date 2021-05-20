import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AddNewUser from "./Components/AddNewUser/AddNewUser";
import TitlePage from "./Components/TitlePage/TitlePage";
import { getUserCount } from "./redux/users_reducer";

const App = () => {
  const state = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {state.countUsers !== 0 ? (
        <div>
          <AddNewUser />
          <TitlePage />
        </div>
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
    </div>
  );
};

export default App;
