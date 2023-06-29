import { DataContextApi } from "@/src/Context/DataContext";
import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SendIcon from "@mui/icons-material/Send";

const AddHomeSlider = () => {
  const { register, handleSubmit } = useForm();
  const [imageFile, setImageFile] = useState(null);
  const { baseUrl } = useContext(DataContextApi);

  const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloud_api = process.env.NEXT_PUBLIC_CLOUDINARY_API;
  const cloud_folder = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_FOLDER;


  const onSubmit = async () => {
    ///////////////////////////////////////////////
    //               Photo Upload               //
    /////////////////////////////////////////////*/

    const imageUploadData = new FormData();
    imageUploadData.append("file", imageFile);
    imageUploadData.append(
      "public_id",
      `${cloud_folder}/HomeSlider/${imageFile?.name}`
    );
    imageUploadData.append("upload_preset", `${upload_preset}`);
    imageUploadData.append("cloud_name", `${cloud_name}`);
    const imgRes = await fetch(
      `${cloud_api}`,
      {
        method: "POST",
        body: imageUploadData,
      }
    );
    const imgData = await imgRes.json();
    const imgPath = imgData.secure_url;

    ///////////////////////////////////////////////
    //               Add Home Slider            //
    /////////////////////////////////////////////*/

    const res = await fetch(`${baseUrl}/api/brandSlider`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ brandSliderImage: imgPath }),
    });
    const dataRes = await res.json();
    console.log(dataRes);
    if (dataRes.sucess === true) {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: "Successfully Home Slider Added!",
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
      imageFile && setImageFile(null);

    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <section>
      <div>
        <div class="w-full h-full my-4">
          <div class="rounded-lg shadow-xl bg-gray-50">
            <div class="p-4">
              <label class="inline-block mb-2 text-gray-500">
                Upload Product Image
              </label>
              <div class="flex items-center justify-center w-full">
                <label class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  <div class="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                      fill="none"
                      viewdiv="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Attach a file{" "}
                      <span className="text-red-500">
                        {" "}
                        (Max Uploading Size 300kb)*
                      </span>
                    </p>
                  </div>
                  <input
                    type="file"
                    className="px-4 pb-4"
                    name="imeage"
                    // {...register("imeage", { required: true })}
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6">
        <Button
          variant="contained"
          className="commonBtn"
          endIcon={<SendIcon />}
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </div>
    </section>
  );
};

export default AddHomeSlider;
