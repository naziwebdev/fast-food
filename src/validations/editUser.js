import * as yup from "yup";

const UserValidator = yup.object().shape({
  name: yup
    .string()
    .required("نام الزامی می‌باشد")
    .min(3, "نام حداقل باید ۳ کارکتر باشد"),
  email: yup
    .string().email('ایمیل را به درستی وارد کنید'),
  phone: yup
    .string()
    .required("شماره تلفن خود را وارد نمایید")
    .matches(/^۰۹[۰-۹]{9}|09[0-9]{9}$/, "شماره تلفن معتبر نیست"),
});

export default UserValidator;
