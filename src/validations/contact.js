import * as yup from "yup";

const contactValidation = yup.object().shape({
  name: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
  email: yup.string().email("ایمیل را به درستی وارد کنید"),
  company: yup.string(),
  phone: yup
    .string()
    .required("شماره تلفن خود را وارد نمایید")
    .matches(/^۰۹[۰-۹]{9}|09[0-9]{9}$/, "شماره تلفن معتبر نیست"),
  message: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
});

export default contactValidation;
