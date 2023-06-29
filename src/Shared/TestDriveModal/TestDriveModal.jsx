import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Swal from "sweetalert2";
import { DataContextApi } from "@/src/Context/DataContext";

const TestDriveModal = ({ isModalOpen, toggleModal, product }) => {
  const { register, handleSubmit } = useForm();
  const { baseUrl } = useContext(DataContextApi);

  const onSubmit = async (data) => {
    const { date, fullName, phoneNumber } = data;

    const testDriveData = {
      date: date,
      customerName: fullName,
      phoneNumber: phoneNumber,
      productName: product?.productName,
    };

    const res = await fetch(`${baseUrl}/api/test-drive`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testDriveData),
    });
    const dataRes = await res.json();
    if (!dataRes) {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: "Somthing wento wrang !",
        iconColor: "#ED1C24",
        toast: true,
        icon: "error",
        showClass: {
          popup: "animate__animated animate__fadeInRight",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutRight",
        },
        showConfirmButton: false,
        timer: 3500,
      });
    } else {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: "Successfully Test Drive Booked!",
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
      toggleModal();
    }
  };

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-400 p-6 rounded-lg shadow-lg">
            {/* Modal content */}
            <div className="lg:w-[100%] md:w-[100%] w-[100%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px]  mx-auto bg-[#F7F7F7] shadow-md rounded-lg flex flex-col gap-6">
              <TextField
                id="outlined-date-input"
                // label="Date"
                type="date"
                autoComplete="Date"
                variant="outlined"
                className="w-full"
                {...register("date", { required: true })}
              />

              <TextField
                id="outlined-fullName-input"
                label="Full Name"
                type="text"
                autoComplete="Full Name"
                variant="outlined"
                className="w-full"
                {...register("fullName", { required: true })}
              />

              <TextField
                id="outlined-phoneNumber-input"
                label="Phone Number"
                type="text"
                autoComplete="Phone Number"
                variant="outlined"
                className="w-full"
                {...register("phoneNumber", { required: true })}
              />

              <TextField
                id="outlined-carName-input"
                label="Car Name"
                type="text"
                autoComplete="Car Name"
                defaultValue={product?.productName}
                aria-readonly
                variant="outlined"
                className="w-full"
              />

              <div>
                <Button
                  variant="contained"
                  className="commonBtn"
                  endIcon={<SendIcon />}
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                >
                  Test Drive
                </Button>
              </div>
            </div>

            <button
              onClick={toggleModal}
              className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestDriveModal;
