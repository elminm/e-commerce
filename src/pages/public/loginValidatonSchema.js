import * as Yup from "yup";
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is Required").email("Invalid Email"),
  password: Yup.string()
    .required("Password Must Fill")
    .min(3, "Password Min 3 Character"),
});
