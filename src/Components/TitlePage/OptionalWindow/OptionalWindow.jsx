import React from "react";
import { useDispatch } from "react-redux";
import { getStateWindow } from "../../../redux/users_reducer";
import style from "./OptionalWindow.module.css";

const OptionalWindow = ({ item }) => {
  console.log(item.address);
  const dispatch = useDispatch();
  return (
    <div className={style.option}>
      <span
        className={style.close}
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
      <div>
        Описание:
        {item.description !== undefined && item.description !== null
          ? item.description
          : "Нет информации"}
      </div>
      <div>
        Адрес проживания:{" "}
        <b>
          {item.address !== undefined && item.address !== null
            ? item.address.streetAddress
            : "Нет информации"}
        </b>
      </div>
      <div>
        Город:
        <b>
          {item.address !== undefined && item.address !== null
            ? item.address.city
            : "Нет информации"}
        </b>
      </div>
      <div>
        Провинция/штат:{" "}
        <b>
          {item.address !== undefined && item.address !== null
            ? item.address.state
            : "Нет информации"}
        </b>
      </div>
      <div>
        Индекс:{" "}
        <b>
          {item.address !== undefined && item.address !== null
            ? item.address.zip
            : "Нет информации"}
        </b>
      </div>
    </div>
  );
};

export default OptionalWindow;
