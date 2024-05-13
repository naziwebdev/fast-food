import * as yup from "yup";

const articleValidation = yup.object().shape({
  title: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
  description: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
  img: yup.mixed().required("این فیلد الزامی است"),
  author: yup
    .string()
    .min(3, "  باید حداقل 3 کارکتر باشد"),
});

export default articleValidation;
