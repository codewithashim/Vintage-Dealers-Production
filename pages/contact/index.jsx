import React, { useState } from "react";
import ChatLayout from "@/src/Layouts/ChatLayout";
import MainLayout from "@/src/Layouts/MainLayout";
import Link from "next/link";
import Swal from "sweetalert2";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: name, email: email, message: message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setStatus(data.message);
    if (data.message === "Form submission successful") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your message has been sent",
        showConfirmButton: false,
        timer: 1500,
      });
      setName("");
      setEmail("");
      setMessage("");
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <MainLayout>
      <ChatLayout>
        <div role="presentation" className="py-4 px-2 bg-neutral-100">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Contact Us
            </Typography>
          </Breadcrumbs>
        </div>
        <section className="my-6">
          <div className="title my-6">
            <h2 className="text-center md:text-left text-[1rem] md:text-[1.5rem] lg:text-3xl uppercase xxs:text-2xl  text-black font-bold">
              For More inquires
            </h2>
          </div>

          <div>
            <div className="w-full mx-auto border p-8">
              <div>
                <h2 className="text-center md:text-left text-[1rem] md:text-[1.2rem] lg:text-2xl xxs:text-2xl  text-black my-4">
                  Sent an inquiry to Red Rose Auto Trading
                </h2>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Enter Your Name"
                    name="fullName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    E-mail
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    placeholder="Enter Your E-mail"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Message
                  </label>
                  <textarea
                    className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    type="text"
                    placeholder="Enter Your Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button
                    className="commonBtn"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Send
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div>
            </div>
          </div>
        </section>
      </ChatLayout>
    </MainLayout>
  );
};

export default Index;
