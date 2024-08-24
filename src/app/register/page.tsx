"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import Link from "next/link";
import Cookies from "js-cookie";
import { AuthService } from "../../services/auth.service";
import { RegisterForm } from "../../utils/Forms";
import Loader from "../../components/Loader";
import Input from "../../shared/Components/Input";

const Register = () => {
  const initialValues = {
    email: "",
    password: "",
    name: "",
    phone: "",
    domain: "",
  };
  const router = useRouter();
  const [isLoader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const authService = new AuthService();

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => handleSave(),
    validationSchema: RegisterForm,
  });

  const handleSave = async () => {
    setLoader(true);
    try {
      const response: any = await authService.Register(formik?.values);
      let result = response?.data;
      if (result?.success === true) {
        if (result?.token) {
          toast.success(result?.message || "Register successfully");
          setLoader(false);
          Cookies.set("token", result?.token);
          setTimeout(() => {
            router.push("/admin");
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
        <div className="col-xs-12 col-sm-12 col-md-4">
          <div className="text-center">
            <Image
              alt=""
              src="/assets/icons/destinylogo.svg"
              height={100}
              width={200}
            />
          </div>
          <form
            className="card shadow p-4 mb-3 bg-white rounded"
            onSubmit={formik.handleSubmit}
          >
            <h3 className="text-center py-3">Register</h3>
            {errorMessage ? (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            ) : (
              ""
            )}
            <Input
              label="Name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              error={formik.errors.name}
            />
            <Input
              label="Email address"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              error={formik.errors.email}
            />
            <Input
              label="Phone"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              error={formik.errors.phone}
            />
            <Input
              label="Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              error={formik.errors.password}
            />
            <Input
              label="Domain"
              name="domain"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              error={formik.errors.domain}
            />
            <button type="submit" className="common-btn btn-clr">
              Submit
            </button>
          </form>
          <Link href={"/login"}>Click here to login</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
