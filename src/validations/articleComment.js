import * as yup from "yup";

const articleCommentValidation = yup.object().shape({
  user: yup
    .string()
    .required("فیلد  را وارد کنید")
    .matches(/^[0-9a-fA-F]{24}$/),
  username: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
  email: yup.string().email("ایمیل را به درستی وارد کنید"),
  title: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
  body: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
  articleID: yup
    .string()
    .required(" فیلد را وارد کنید")
    .matches(/^[0-9a-fA-F]{24}$/),
  score: yup.number().required("این فیلد الزامی است"),
});

export default articleCommentValidation;

const answerArticleCommentValidation = yup.object().shape({
  username: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
  email: yup.string().email("ایمیل را به درستی وارد کنید"),
  title: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
  body: yup
    .string()
    .required("این فیلد الزامی است")
    .min(3, "  باید حداقل 3 کارکتر باشد"),
  articleID: yup
    .string()
    .required("فیلد  را وارد کنید")
    .matches(/^[0-9a-fA-F]{24}$/),
  score: yup.number().required("این فیلد الزامی است"),
  mainCommentID: yup
    .string()
    .required("فیلد   را وارد کنید")
    .matches(/^[0-9a-fA-F]{24}$/),
});

export { answerArticleCommentValidation };