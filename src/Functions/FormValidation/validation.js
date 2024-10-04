import React from "react";
import * as Yup from "yup";




export let validationSchema = Yup.object({
    name: Yup.string()
      .required("Please enter your Username")
      .min(4, "Minimum username length 4"),
    email: Yup.string()
      .required("Please enter your email")
      .email("This isn't not correct email format")
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, " "),
      phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^[0-9+()-]*$/,
        "Phone number can only contain numbers, +, -, and ()"
      )
      .min(7, "Phone number is too short")
      .max(15, "Phone number is too long"),
      message:Yup.string().min(20, "too short")
      .max(100, " too long"),
  });