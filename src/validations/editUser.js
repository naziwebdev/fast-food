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


const UserPasswordValidator = yup.object().shape({
  password: yup
  .string()
  .required("رمز عبور خود را وارد نمایید")
  .min(6, "رمز عبور باید حداقل ۶ کارکتر باشد")
  .max(20, "رمز عبور باید حذاکثر ۲۰ کارکتر باشد")
  .matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    "رمز عبور باید حاوی حروف بزرگ و کوچک و اعداد و علائم باشد"
  ),
});

export {UserPasswordValidator}