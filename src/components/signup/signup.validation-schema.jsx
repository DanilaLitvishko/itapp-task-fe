import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Ivalid email address").required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
  confirmPassword: Yup.string()
    .min(8, "Too Short!")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export default SignUpSchema;
