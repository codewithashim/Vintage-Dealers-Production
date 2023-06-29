import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { FaRegEdit } from "react-icons/fa";
import { DataContextApi } from "@/src/Context/DataContext";
import Image from "next/image";
import Swal from "sweetalert2";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UpdateService = ({ service, serviceRefetch }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit } = useForm();
  const [imageFile, setImageFile] = useState(null);
  const { baseUrl } = React.useContext(DataContextApi);
  const { services, details, image, _id } = service;

  const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloud_api = process.env.NEXT_PUBLIC_CLOUDINARY_API;
  const cloud_folder = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_FOLDER;

  const handelUpdate = async (updatedata) => {
    ///////////////////////////////////////////////
    //               Photo Upload               //
    /////////////////////////////////////////////*/

    const imageUploadData = new FormData();
    imageUploadData.append("file", imageFile);
    imageUploadData.append(
      "public_id",
      `${cloud_folder}/Searvices/${imageFile?.name}`
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
    const imgdata = await imgRes.json();
    const imgurl = imgdata?.secure_url;
    console.log(imgurl, "Upload Image ++++");

    ///////     End of Photo Upload     ////////

    const { Services, servicesDescription } = updatedata;

    const serviceData = {
      services: Services,
      details: servicesDescription,
      image: imgurl,
    };

    const res = await fetch(`${baseUrl}/api/service/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData),
    });
    const data = await res.json();

    console.log(data);

    if (data.status === 200) {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: "Successfully Update Service!",
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
      handleClose();
      serviceRefetch();
    } else {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: data.message,
        iconColor: "#ED1C24",
        toast: true,
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
      <Button onClick={handleClickOpen}>
        <FaRegEdit className="text-[2.3rem] mr-3 text-red-500" />
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{ position: "relative" }}
          className="bg-red-500 text-[#000]"
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon className="" />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
              className="text-[#000]"
            >
              Update Service
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={handleClose}
              className="text-[#000]"
            >
              Exit
            </Button>
          </Toolbar>
        </AppBar>

        <List>
          <div className="lg:w-[80%] md:w-[80%] w-[90%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px]  mx-auto bg-[#F7F7F7] shadow-md rounded-lg m-6">
            <TextField
              id="outlined-services-input"
              label="Services"
              type="text"
              autoComplete="Services"
              variant="outlined"
              className="w-full"
              defaultValue={services}
              {...register("Services", { required: true })}
            />

            <div className="my-4">
              <TextField
                id="outlined-servicesdescription-static"
                label="Services Description"
                multiline
                rows={7}
                defaultValue={details}
                className="w-full"
                {...register("servicesDescription", { required: true })}
              />
            </div>

            <div class="w-full h-full">
              <div class="rounded-lg shadow-xl bg-gray-50">
                <div class="p-4">
                  <label class="inline-block mb-2 text-gray-500">
                    Upload Service Image
                  </label>
                  <div class="flex items-center justify-center w-full">
                    <label class="flex flex-col w-full h-50 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                      <div class="flex flex-col items-center justify-center pt-7">
                        <Image
                          src={image}
                          alt="ServiceImage"
                          width={100}
                          height={100}
                        />

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
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files[0])}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4">
              <Button
                variant="contained"
                className="commonBtn"
                endIcon={<SendIcon />}
                type="submit"
                onClick={handleSubmit(handelUpdate)}
              >
                Update Service
              </Button>
            </div>
          </div>
        </List>
      </Dialog>
    </section>
  );
};

export default UpdateService;
