import * as yup from "yup";

const wishlistValidation = yup.object().shape({
  user: yup
    .string()
    .required("id کاربر   را وارد کنید")
    .matches(/^[0-9a-fA-F]{24}$/),
  product: yup
    .string()
    .required("id محصول  را وارد کنید")
    .matches(/^[0-9a-fA-F]{24}$/),
});

export default wishlistValidation;
