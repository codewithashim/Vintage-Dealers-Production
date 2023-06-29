import { Button, Divider, TextField } from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import Swal from "sweetalert2";
import { DataContextApi } from "@/src/Context/DataContext";
import ManageCategory from "../ManageCategory/ManageCategory";

const AddCategory = () => {
  const { register, handleSubmit } = useForm();
  const { baseUrl } = useContext(DataContextApi);

  const onSubmit = async (data) => {
    const categoryData = {
      categories: data.categoryName,
    };

    const res = await fetch(`${baseUrl}/api/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
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
        title: "Successfully Category Added!",
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
    }
  };

  return (
    <section>
      <div className="lg:w-[100%] md:w-[100%] w-[90%]  px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px]  mx-auto bg-[#F7F7F7] shadow-md rounded-lg md:flex justify-center items-center gap-6 ">
        <TextField
          id="outlined-categoryName-input"
          label="Category Name"
          type="text"
          autoComplete="categoryName"
          variant="outlined"
          className="w-full"
          {...register("categoryName", { required: true })}
        />
        <div>
          <Button
            variant="contained"
            className="commonBtn m-4"
            endIcon={<SendIcon />}
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </div>
      </div>

      <Divider className="my-4" />

      <section>
        <ManageCategory />
      </section>
    </section>
  );
};

export default AddCategory;
