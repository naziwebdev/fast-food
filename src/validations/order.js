import * as yup from "yup";

const orderValidation = yup.object().shape({
  userID: yup
    .string()
    .required("دسته بندی را وارد کنید")
    .matches(/^[0-9a-fA-F]{24}$/),
  products: yup.array().required("این فیلد الزامی است"),
  price: yup.number().required("این فیلد الزامی است"),
  address: yup.string().required("این فیلد الزامی است"),
});

export default orderValidation;
