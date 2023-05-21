import * as Yup from "yup";
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is Required").email("Invalid Email"),
  password: Yup.string()
    .required("Password Must Fill")
    .min(3, "Password Min 3 Character"),
});
export const registerValidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is Required").email("Invalid Email"),
  password: Yup.string()
    .required("Password Must Fill")
    .min(3, "Password Min 3 Character"),
  confirmPassword: Yup.string()
    .required("You need to confirm your password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});
