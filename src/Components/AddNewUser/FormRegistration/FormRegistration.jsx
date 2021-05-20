import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import { pushNewUser } from "../../../redux/users_reducer";
import style from "./FormRegistration.module.css";

const FormRegistration = () => {
  let dispatch = useDispatch();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(pushNewUser(data));
  };
  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>id:</p>
        <input
          className={errors.id && style.error}
          {...register("id", {
            required: true,
            pattern: /^\d+$/i,
          })}
          type="text"
        />
        {errors.id && <span>Неверно заполнено поле</span>}
      </div>
      <div>
        <p>First Name:</p>
        <input
          className={errors.firstName && style.error}
          {...register("firstName", {
            required: true,
            minLength: 3,
            pattern: /^[A-Za-z]+$/i,
          })}
          type="text"
        />
        {errors.firstName && <span>Неверно заполнено поле</span>}
      </div>
      <div>
        <p>Last Name:</p>
        <input
          {...register("lastName", {
            required: true,
            minLength: 3,
            pattern: /^[A-Za-z]+$/i,
          })}
          type="text"
          className={errors.lastName && style.error}
        />
        {errors.lastName && <span>Неверно заполнено поле</span>}
      </div>
      <div>
        <p>Email:</p>
        <input
          className={errors.email && style.error}
          {...register("email", {
            required: true,
            pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
          })}
          type="email"
        />
        {errors.email && <span>Неверно заполнено поле</span>}
      </div>
      <div>
        <p>Phone:</p>
        <InputMask
          className={errors.phone && style.error}
          {...register("phone", {
            required: true,
            pattern: /^\(([\d]{3})\)+([\d]{3})+-([\d]{4})$/,
          })}
          mask="(999)999-9999"
          alwaysShowMask={true}
        ></InputMask>
        {errors.phone && <span>Неверно заполнено поле</span>}
      </div>
      <div>
        <button
          className={style.button}
          disabled={
            watch("id") === "" ||
            watch("id") === undefined ||
            watch("email") === "" ||
            watch("email") === undefined ||
            watch("lastName") === "" ||
            watch("lastName") === undefined ||
            watch("firstName") === "" ||
            watch("firstName") === undefined ||
            watch("phone") === "(___)___-____" ||
            watch("phone") === undefined
              ? true
              : false
          }
          type="submit"
        >
          Отправить
        </button>
      </div>
    </form>
  );
};

export default FormRegistration;
