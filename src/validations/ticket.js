import * as yup from "yup";

const ticketValidation = yup.object().shape({
  title: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
  body: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
  department: yup
    .string()
    .required("این فیلد  را وارد کنید")
    .matches(/^[0-9a-fA-F]{24}$/),
  subDepartment: yup
    .string()
    .required("این فیلد  را وارد کنید")
    .matches(/^[0-9a-fA-F]{24}$/),
  priority: yup.number().required("این فیلد الزامی است"),
});

export default ticketValidation;
