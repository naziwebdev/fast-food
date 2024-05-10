import * as yup from "yup";

const productValidation = yup.object().shape({
  title: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
  price: yup
    .number()
    .required("این فیلد الزامی است")
    .min(0, "  باید حداقل 0  باشد"),
  tags: yup
    .array()
    .required("این فیلد الزامی است")
    .min(1, "  باید حداقل 1 کارکتر باشد"),
  description: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
  countAvailable: yup
    .number()
    .required("این فیلد الزامی است")
    .min(0, "  باید حداقل 0  باشد"),
  weight: yup
    .number()
    .required("این فیلد الزامی است")
    .min(0, "  باید حداقل 0  باشد"),
  materials: yup
    .array()
    .required("این فیلد الزامی است")
    .min(1, "  باید حداقل 3 کارکتر باشد"),
  tast: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
  size: yup
    .number()
    .required("این فیلد الزامی است")
    .min(0, "  باید حداقل 0 کارکتر باشد"),
  img: yup.mixed().required("این فیلد الزامی است"),
});

export default productValidation;
