import * as yup from "yup";

const otpValidation = yup.object().shape({
  phone: yup
    .string()
    .required("شماره تلفن خود را وارد نمایید")
    .matches(/^۰۹[۰-۹]{9}|09[0-9]{9}$/, "شماره تلفن معتبر نیست"),
});

export default otpValidation;

const verifyOtpValidation = yup.object().shape({
  phone: yup
    .string()
    .required("شماره تلفن خود را وارد نمایید")
    .matches(/^۰۹[۰-۹]{9}|09[0-9]{9}$/, "شماره تلفن معتبر نیست"),
  code: yup
    .number()
    .required("شماره تلفن خود را وارد نمایید")
    .matches(/^[0-9]{3,5}$/, "کد  معتبر نیست"),
});

export { verifyOtpValidation };
