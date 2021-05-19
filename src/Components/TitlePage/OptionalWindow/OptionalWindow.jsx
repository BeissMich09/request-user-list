import React from "react";
import { useDispatch } from "react-redux";
import { getStateWindow } from "../../../redux/users_reducer";
import style from "./OptionalWindow.module.css";

const OptionalWindow = ({ item }) => {
  console.log(item);
  const { city, state, streetAddress, zip } = item.address;
  const dispatch = useDispatch();
  return (
    <div className={style.option}>
      <span
        onClick={() => {
          dispatch(getStateWindow(false));
        }}
      >
        x
      </span>
      <div>
        Выбран пользователь:
        <b>
          {item.firstName} {item.lastName}
        </b>
      </div>
      <div> Описание: {item.description}</div>
      <div>
        Адрес проживания: <b>{streetAddress}</b>
      </div>
      <div>
        Город: <b>{city}</b>
      </div>
      <div>
        Провинция/штат: <b>{state}</b>
      </div>
      <div>
        Индекс: <b>{zip}</b>
      </div>
    </div>
  );
};

export default OptionalWindow;
