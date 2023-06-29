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
import useShopHooks from "@/src/Hooks/useShopHooks/useShopHooks";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import useProduct from "@/src/Hooks/useProduct/useProduct";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const productTypeData = [
  {
    id: 0,
    title: "REGULAR",
  },
  {
    id: 1,
    title: "TRANDING",
  },
  {
    id: 2,
    title: "NEW ARRIVALS",
  },
  {
    id: 3,
    title: "FEATURED",
  },
  {
    id: 4,
    title: "BEST SELLING",
  },
];

const UpdateProduct = ({ product }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { fetchProducts } = useProduct();
  const { register, handleSubmit } = useForm();
  const [imageFile, setImageFile] = useState(null);
  const { categoryData, brandData } = useShopHooks();
  const { baseUrl } = React.useContext(DataContextApi);
  const {
    productName,
    productPrice,
    productImage,
    productBrand,
    productCategory,
    productDescription,
    productType,
    productQuantity,
    _id,
  } = product;

  const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloud_api = process.env.NEXT_PUBLIC_CLOUDINARY_API;
  const cloud_folder = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_FOLDER;

  const handelUpdate = async (updatedata) => {
    ///////////////////////////////////////////////
    //               Photo Upload                //
    /////////////////////////////////////////////*/

    const imageUploadData = new FormData();
    imageUploadData.append("file", imageFile);
    imageUploadData.append(
      "public_id",
      `${cloud_folder}/Products/${imageFile?.name}`
    );
    imageUploadData.append("upload_preset", `${upload_preset}`);
    imageUploadData.append("cloud_name", `${cloud_name}`);
    const imgRes = await fetch(`${cloud_api}`, {
      method: "POST",
      body: imageUploadData,
    });
    const imgdata = await imgRes.json();
    const imgurl = imgdata?.secure_url;
    console.log(imgurl, "Upload Image ++++");

    ///////     End of Photo Upload     ////////

    const {
      productName,
      productPrice,
      productCategory,
      productBrand,
      productType,
      productQuantity,
      productDescription,
      fuelType,
      ccEngine,
      era,
      speed,
      tank,
    } = updatedata;

    const productData = {
      productName: productName,
      productPrice: productPrice,
      productCategory: productCategory,
      productBrand: productBrand,
      productType: productType,
      productQuantity: productQuantity,
      productDescription: productDescription,
      productImage: imgurl,
      fuelType: fuelType,
      ccEngine: ccEngine,
      era: era,
      speed: speed,
      tank: tank,
    };

    const res = await fetch(`${baseUrl}/api/product/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    const data = await res.json();

    if (data.status === 200) {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: "Successfully Update Product !",
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
      fetchProducts(true);
    } else {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: data.message,
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
              Update Product
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
          <section>
            <div className="lg:w-[80%] md:w-[80%] w-[95%] col-span-5 md:px-[60px] md:py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg grid md:grid-cols-2 gap-6  py-10 px-2">
              <TextField
                id="outlined-productname-input"
                label="Product Name"
                type="text"
                autoComplete="productName"
                defaultValue={productName}
                variant="outlined"
                className="w-full"
                {...register("productName", { required: true })}
              />
              <TextField
                id="outlined-productprice-input"
                label="Product Price $"
                type="number"
                autoComplete="productPrice"
                defaultValue={productPrice}
                variant="outlined"
                className="w-full"
                {...register("productPrice", { required: true })}
              />

              <TextField
                id="outlined-fuelType-input"
                label="Fuel Type"
                type="text"
                autoComplete="Fuel Type"
                variant="outlined"
                className="w-full"
                {...register("fuelType", { required: true })}
              />

              <TextField
                id="outlined-ccEngine-input"
                label="CC Engine"
                type="text"
                autoComplete="CC Engine"
                variant="outlined"
                className="w-full"
                {...register("ccEngine", { required: true })}
              />

              <TextField
                id="outlined-era-input"
                label="era"
                type="text"
                autoComplete="era"
                variant="outlined"
                className="w-full"
                {...register("era", { required: true })}
              />

              <TextField
                id="outlined-speed-input"
                label="Speed"
                type="text"
                autoComplete="Speed"
                variant="outlined"
                className="w-full"
                {...register("speed", { required: true })}
              />

              <TextField
                id="outlined-tank-input"
                label="Tank"
                type="text"
                autoComplete="Tank"
                variant="outlined"
                className="w-full"
                {...register("tank", { required: true })}
              />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Category"
                  defaultValue={productCategory}
                  {...register("productCategory")}
                  className="w-full h-30 overflow-y-auto"
                >
                  {categoryData &&
                    categoryData.length &&
                    categoryData?.map((category) => {
                      return (
                        <MenuItem
                          key={category._id}
                          defaultValue={category?._id && category?.categories}
                          value={category?._id && category?.categories}
                        >
                          {category?.categories}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Product Brand
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Product Brand"
                  defaultValue={productBrand}
                  {...register("productBrand", { required: true })}
                  className="w-full h-30 overflow-y-auto"
                >
                  {brandData &&
                    brandData.length &&
                    brandData?.map((brand) => {
                      return (
                        <MenuItem
                          key={brand?._id}
                          defaultValue={brand?._id && brand?.brandName}
                          value={brand?._id && brand?.brandName}
                        >
                          {brand?.brandName}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Product Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Product Type"
                  defaultValue={productType}
                  {...register("productType", { required: true })}
                  className="w-full h-30 overflow-y-auto"
                >
                  {productTypeData &&
                    productTypeData.length &&
                    productTypeData?.map((productType) => {
                      return (
                        <MenuItem
                          key={productType?.id}
                          defaultValue={productType?.id && productType?.title}
                          value={productType?.id && productType?.title}
                        >
                          {productType?.title}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>

              <div>
                <TextField
                  id="outlined-productdescription-static"
                  label="Product Description"
                  multiline
                  defaultValue={productDescription}
                  rows={9}
                  className="w-full"
                  {...register("productDescription", { required: true })}
                />
              </div>

              <div>
                <div class="w-full h-full">
                  <div class="rounded-lg shadow-xl bg-gray-50">
                    <div class="p-4">
                      <label class="inline-block mb-2 text-gray-500">
                        Upload Product Image
                      </label>
                      <div class="flex items-center justify-center w-full">
                        <label class="flex flex-col w-full h-42 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                          <div class="flex flex-col items-center justify-center ">
                            <Image
                              src={
                                imageFile
                                  ? URL.createObjectURL(imageFile)
                                  : productImage
                              }
                              alt="Picture of the author"
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
              </div>

              <TextField
                id="outlined-productQuantity-input"
                label="Product Quantity"
                type="text"
                autoComplete="productQuantity"
                variant="outlined"
                defaultValue={productQuantity}
                className="w-full"
                {...register("productQuantity", { required: true })}
              />

              <div>
                <Button
                  variant="contained"
                  className="commonBtn"
                  endIcon={<SendIcon />}
                  type="submit"
                  onClick={handleSubmit(handelUpdate)}
                >
                  Update Product
                </Button>
              </div>
            </div>
          </section>
        </List>
      </Dialog>
    </section>
  );
};

export default UpdateProduct;
