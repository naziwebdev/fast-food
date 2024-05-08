import * as yup from "yup";

const offValidation = yup.object().shape({
  code: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
  percent: yup.number().required("این فیلد الزامی است"),
  maxUsage: yup.number().required("این فیلد الزامی است"),

});


const offCodeValidation = yup.object().shape({
  code: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),

});

export {offCodeValidation}

export default offValidation;
