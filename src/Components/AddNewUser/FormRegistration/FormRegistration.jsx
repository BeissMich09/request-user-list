import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { pushNewUser } from "../../../redux/users_reducer";
import style from "./FormRegistration.module.css";

const FormRegistration = () => {
  let state = useSelector((state) => state.usersReducer);
  console.log(state);
  let dispatch = useDispatch();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(pushNewUser(data));
    // console.log(typeof data);
  };
  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>id:</p>
        <input
          {...register("id", {
            required: true,
            pattern: /^\d+$/i,
          })}
          type="text"
        />
        {errors.id && <span>This field is required</span>}
      </div>
      <div>
        <p>First Name:</p>
        <input
          {...register("firstName", {
            required: true,
            minLength: 3,
            pattern: /^[A-Za-z]+$/i,
          })}
          type="text"
        />
        {errors.firstName && <span>This field is required</span>}
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
        />
        {errors.lastName && <span>This field is required</span>}
      </div>
      <div>
        <p>Email:</p>
        <input
          {...register("email", {
            required: true,
            pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
          })}
          type="email"
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <p>Phone:</p>
        <InputMask
          {...register("phone", {
            required: true,
            pattern: /^\(([\d]{3})\)+([\d]{3})+-([\d]{4})$/,
          })}
          mask="(999)999-9999"
          alwaysShowMask={true}
        ></InputMask>
        {errors.phone && <span>This field is required</span>}
      </div>
      <div>
        <input
          disabled={
            watch("id") === "" ||
            watch("email") === "" ||
            watch("lastName") === "" ||
            watch("firstName") === "" ||
            watch("phone") === "(___)___-____"
              ? true
              : false
          }
          type="submit"
        />
        {console.log(watch("id") === "" && watch("email") === "")}
      </div>
    </form>
  );
};

export default FormRegistration;
