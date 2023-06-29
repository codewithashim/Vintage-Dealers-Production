import ChatLayout from "@/src/Layouts/ChatLayout";
import MainLayout from "@/src/Layouts/MainLayout";
import React, { useContext, useState } from "react";
import loginImg from "../../../src/Assets/Auth/usersignUp.jpeg";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "@/src/Context/UserContext";
import google from "../../../src/Assets/Icons/google.svg";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";
import { DataContextApi } from "@/src/Context/DataContext";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const redirect = router.query.redirect;
  const { baseUrl } = useContext(DataContextApi);

  const passwordVisible = () => {
    setShowPassword(showPassword ? false : true);
  };
  const cPasswordVisible = () => {
    setShowCPassword(showCPassword ? false : true);
  };
  const { signUp, updateUserDetails, signInWithGoogle } =
    useContext(AuthContext);

  const handleGoogleSingnIn = () => {
    signInWithGoogle()
      .then(() => {
        router.push("/");
        Swal.fire({
          position: "top-end",
          timerProgressBar: true,
          title: "Successfully Login!",
          iconColor: "#ED1C24",
          toast: true,
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInRight",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutRight",
          },
          showConfirmButton: false,
          timer: 3500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message,
          text: "User already registered!",
          confirmButtonColor: "#ED1C24",
        });
      });
  };

  const signUpHandler = async (dataValue) => {
    const role = "user";
    const { firstName, lastName, email, phone, password } = dataValue;
    signUp(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, "user info");
        router.push("/auth/login");
        Swal.fire({
          position: "top-end",
          timerProgressBar: true,
          title: "Successfully Login Done !",
          iconColor: "#ED1C24",
          toast: true,
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInRight",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutRight",
          },
          showConfirmButton: false,
          timer: 3500,
        });
        const profileInfo = {
          displayName: firstName + lastName,
          phoneNumber: phone,
          role: role,
        };
        updateUserDetails(profileInfo)
          .then(async () => {
            try {
              await axios
                .post(`${baseUrl}/api/user`, {
                  firstName: firstName,
                  lastName: lastName,
                  phone: phone,
                  role: role,
                  email: email,
                })
                .then((response) => {
                  console.log(response.data);
                })
                .catch((error) => {
                  console.log("error", error);
                });
            } catch (error) {
              console.log("error", error);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                confirmButtonColor: "#ED1C24",
                text: error.message,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Swal.fire({
          icon: "error",
          title: errorMessage,
          text: "User already registered!",
          confirmButtonColor: "#ED1C24",
        });
      });
  };

  return (
    <MainLayout>
      <ChatLayout>
        <div className="bg-white md:px-16">
          <div className=" ">
            <div className="grid grid-cols-12 gap-4 ">
              <div className="lg:col-span-5 xxs:col-span-12 justify-center flex">
                <div className="mx-auto items-center justify-center lg:flex xxs:hidden">
                  <Image
                    className="h-3/5 w-full"
                    src={loginImg}
                    alt="userSignup"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 xxs:col-span-12 py-10">
                <div className="xxs:px-[25px] xs:px-[30px] sm:px-[30px] md:px-[30px] lg:px-[28px] xl:px-[40px] py-10  bg-[#f7f7f7] shadow-md rounded-lg">
                  <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
                    Account details
                  </h4>
                  <p className="mt-4 text-[15px] text-[#676767] font-[400]">
                    You only need to answer a few straightforward questions.
                  </p>
                  <form onSubmit={handleSubmit(signUpHandler)}>
                    <div className="grid gap-4 mb-4 md:grid-cols-2 xxs:grid-cols-1 justify-between pt-4">
                      <div>
                        <input
                          text="text"
                          name="firstName"
                          placeholder="First name"
                          className="text-[15px] font-[500] shadow-md rounded-lg px-2.5 py-4 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          {...register("firstName")}
                        />
                      </div>
                      <div>
                        <input
                          text="text"
                          name="lastName"
                          placeholder="Last name"
                          className="text-[15px] font-[500]  shadow-md rounded-lg px-2.5 py-4 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          defaultValue=""
                          {...register("lastName")}
                        />
                      </div>
                      <div>
                        <input
                          text="text"
                          name="phone"
                          placeholder="Phone number"
                          className="text-[15px] w-full font-[500] shadow-md rounded-lg px-2.5 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          {...register("phone")}
                        />
                      </div>
                      <input
                        text="email"
                        name="email"
                        placeholder="Email address"
                        className="text-[15px] font-[500] rounded-lg w-full px-2.5 py-4 text-gray-700 leading-tight focus:outline-none shadow-md focus:shadow-outline"
                        {...register("email")}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative mb-6">
                        <input
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          className="text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md px-2.5 py-4 "
                          {...register("password")}
                        />
                        <span
                          className="text-[#6b7280] text-[20px] absolute  top-[18px] inset-y-0 right-0 pr-3 flex "
                          onClick={passwordVisible}
                        >
                          {showPassword ? (
                            <AiOutlineEye />
                          ) : (
                            <AiOutlineEyeInvisible />
                          )}
                        </span>
                      </div>
                      <div className="relative mb-6">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="confirmPassword"
                          placeholder="Confirm password"
                          className="text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md px-2.5 py-4 "
                          {...register("confirmPassword")}
                        />
                        <span
                          className="text-[#6b7280] text-[20px] absolute   top-[18px] inset-y-0 right-0 pr-3 flex "
                          onClick={cPasswordVisible}
                        >
                          {showCPassword ? (
                            <AiOutlineEye />
                          ) : (
                            <AiOutlineEyeInvisible />
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="sm:col-span-6 xxs:col-span-12 items-center sm:justify-start xxs:justify-center mb-4 flex">
                        <p className="text-normal text-base">
                          Have already an account?{" "}
                          <Link href="/auth/login">
                            <b className="text-red-10">Login here</b>
                          </Link>
                        </p>
                      </div>
                      <div className=" sm:col-span-6 xxs:col-span-12 md:justify-end flex  xxs:justify-center">
                        <button className="commonBtn uppercase  ">
                          Sign up
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ChatLayout>
    </MainLayout>
  );
};

export default Index;
