import { TextField, Autocomplete } from "@mui/material";
import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import useShopHooks from "@/src/Hooks/useShopHooks/useShopHooks";
import { DataContextApi } from "@/src/Context/DataContext";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Swal from "sweetalert2";

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

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [imageFile, setImageFile] = useState(null);
  const { baseUrl } = useContext(DataContextApi);

  const { categoryData, brandData } = useShopHooks();

  const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloud_api = process.env.NEXT_PUBLIC_CLOUDINARY_API;
  const cloud_folder = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_FOLDER;

  const onSubmit = async (data) => {
    ///////////////////////////////////////////////
    //               Photo Upload               //
    /////////////////////////////////////////////*/

    const imageUploadData = new FormData();
    imageUploadData.append("file", imageFile);
    imageUploadData.append(
      "public_id",
      `${cloud_folder}/Products/${imageFile.name}`
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
    } = data;

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

    const res = await fetch(`${baseUrl}/api/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
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
        title: "Successfully Product Added!",
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
      <div className="lg:w-[100%] md:w-[100%] w-[90%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px]  mx-auto bg-[#F7F7F7] shadow-md rounded-lg grid md:grid-cols-2 gap-6">
        <TextField
          id="outlined-productname-input"
          label="Product Name"
          type="text"
          autoComplete="productName"
          variant="outlined"
          className="w-full"
          {...register("productName", { required: true })}
        />
        <TextField
          id="outlined-productprice-input"
          label="Product Price $"
          type="number"
          autoComplete="productPrice"
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
            {...register("productCategory")}
            className="w-full h-30 overflow-y-auto"
          >
            {categoryData &&
              categoryData.length &&
              categoryData?.map((category) => {
                return (
                  <MenuItem
                    key={category._id}
                    value={category?._id && category?.categories}
                  >
                    {category?.categories}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Product Brand</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Product Brand"
            {...register("productBrand", { required: true })}
            className="w-full h-30 overflow-y-auto"
          >
            {brandData &&
              brandData.length &&
              brandData?.map((brand) => {
                return (
                  <MenuItem
                    key={brand?._id}
                    value={brand?._id && brand?.brandName}
                  >
                    {brand?.brandName}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Product Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Product Type"
            {...register("productType", { required: true })}
            className="w-full h-30 overflow-y-auto"
          >
            {productTypeData &&
              productTypeData.length &&
              productTypeData?.map((productType) => {
                return (
                  <MenuItem
                    key={productType?.id}
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
            rows={7}
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

        <TextField
          id="outlined-productQuantity-input"
          label="Product Quantity"
          type="text"
          autoComplete="productQuantity"
          variant="outlined"
          className="w-full"
          {...register("productQuantity", { required: true })}
        />

        <div>
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
      </div>
    </section>
  );
};

export default AddProduct;
