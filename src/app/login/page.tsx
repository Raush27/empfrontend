"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./login.module.scss";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { AuthService } from "../../services/auth.service";
import { LoginForm } from "../../utils/Forms";
import Loader from "../../components/Loader";
import Input from "../../shared/Components/Input";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const router = useRouter();
  const [isLoader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const authService = new AuthService();
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => handleSave(),
    validationSchema: LoginForm,
  });

  const handleSave = async () => {
    setLoader(true);
    const { email, password } = formik.values;
     try {
      const response: any = await authService.Login({
        email,
        password,
      });
      let result = response?.data;
      console.log(result,"resultresult")
      if (result?.status === true) {
        if (result?.token) {
          toast.success(result?.message || "login successfully");
          setLoader(false);
          Cookies.set("token", result?.token);
          setTimeout(() => {
            if(result?.user.role === "employee"){
              router.push("/employee");
              Cookies.set("role", "0");
            }else{
              router.push("/admin");
              Cookies.set("role", "1");
            }
          }, 1000);
        }
      }
    } catch (error: any) {
      let message = error?.response?.data?.message;
      toast.warning(message);
      setLoader(false);
    }
  };
  return (
    <React.Fragment>
      {isLoader ? <Loader /> : ""}
      <div className="d-flex justify-content-center py-4 mt-4">
        <div className="text-center">
          <Image alt="" src="/images/sidebanner.jpg" height={630} width={900} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4">
          <form
            className="card shadow p-4 mb-3 bg-white rounded"
            onSubmit={formik.handleSubmit}
          >
            <div className="text-center mb-3">
              <Image alt="" src="/icons/login.png" height={80} width={80} />
            </div>{" "}
            <div className={`${styles.separator}`}>✻ Employee/HR Sign In ✻</div>
            {errorMessage ? (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            ) : (
              ""
            )}
            <Input
              label="Email address"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              error={formik.errors.email}
            />
            <Input
              label="Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              error={formik.errors.password}
            />
            <button type="submit" className="common-btn btn-clr">
              Submit
            </button>
          </form>
          {/* <Link href={"/register"}>Create an account</Link> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
