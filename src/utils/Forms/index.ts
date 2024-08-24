import * as Yup from "yup";
const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
// const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/i;
const imageUrlRegex = /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i;
export const SliderForm = Yup.object().shape({
  title: Yup.string().trim().required("The title field is required"),
  photo: Yup.mixed()
    .required("The photo field is required")
    .test(
      "fileSize",
      "File too large",
      (value: any) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value: any) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
});

export const GalleryForm = Yup.object().shape({
  title: Yup.string().trim().required("The title field is required"),
  photo: Yup.mixed()
    .required("The photo field is required")
    .test(
      "fileSize",
      "File too large",
      (value: any) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value: any) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
});
export const LoginForm = Yup.object().shape({
  email: Yup.string().trim().email().required("The email field is required"),
  password: Yup.string().trim().required("The password field is required"),
});
export const RegisterForm = Yup.object().shape({
  email: Yup.string().trim().email().required("The email field is required"),
  name: Yup.string().trim().required("The name field is required"),
  phone: Yup.string().trim().required("The phone field is required"),
  password: Yup.string().trim().required("The password field is required"),
  domain: Yup.string().trim().required("The domain field is required"),
});

export const UpdateBlogForm = Yup.object().shape({
  title: Yup.string().trim().required("The title field is required"),
});

export const JobForm = Yup.object().shape({
  title: Yup.string().trim().required("The title field is required"),
});

export const CreateUserForm = Yup.object().shape({
  name: Yup.string()
    .required("The name field is required")
    .min(2, "The name field is to small"),
  email: Yup.string().trim().required("The title field is required"),
  password: Yup.string()
    .trim()
    .required("The password field is required")
    .min(6, "The password field is to small"),
  role: Yup.string().trim().required("The role field is required"),
});
