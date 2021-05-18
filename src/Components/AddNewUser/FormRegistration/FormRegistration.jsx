import React from "react";
import { useForm } from "react-hook-form";
import ReactInputMask, { InputMask } from "react-input-mask";

const FormRegistration = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
  };
  console.log("watch", register.id);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("id", {
          required: true,
          minLength: 3,
          pattern: /^\d+$/i,
        })}
        type="text"
      />
      {errors.id && <span>This field is required</span>}
      <input
        {...register("firstName", {
          required: true,
          minLength: 3,
          pattern: /^[A-Za-z]+$/i,
        })}
        type="text"
      />
      {errors.firstName && <span>This field is required</span>}
      <input
        {...register("lastName", {
          required: true,
          minLength: 3,
          pattern: /^[A-Za-z]+$/i,
        })}
        type="text"
      />
      {errors.lastName && <span>This field is required</span>}
      <input
        {...register("email", {
          required: true,
          pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
        })}
        type="email"
      />
      {errors.email && <span>This field is required</span>}
      <ReactInputMask
        {...register("phone", {
          required: true,
        })}
        mask="(999)999-9999"
        alwaysShowMask={true}
        // value={props.value}
        // onChange={props.onChange}
      ></ReactInputMask>
      <input type="submit" />
    </form>
  );
};

export default FormRegistration;
