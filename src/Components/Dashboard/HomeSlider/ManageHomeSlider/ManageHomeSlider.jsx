import { DataContextApi } from "@/src/Context/DataContext";
import useCommonApiData from "@/src/Hooks/useCommonApiData/useCommonApiData";
import { Card, CardActions, CardMedia, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageHomeSlider = () => {
  const { sliderData, refetchHomeSlider, sliderLoaded } = useCommonApiData();
  const { baseUrl } = useContext(DataContextApi);

  const handelDelete = async (id) => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmed.isConfirmed) {
      const res = await fetch(`${baseUrl}/api/brandSlider/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!data) {
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
      } else {
        Swal.fire({
          position: "center",
          timerProgressBar: true,
          title: "Successfully Delete Product !",
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
        refetchHomeSlider();
      }
    }
  };

  if (sliderLoaded) {
    return (
      <h2 className="flex justify-center items-center self-center content-center">
        Loading...
      </h2>
    );
  }

  return (
    <section>
      <h2 className="py-4 text-2xl font-bold ">Manage Slider</h2>

      <div className="grid md:grid-cols-3 gap-4 justify-center items-center">
        {sliderData &&
          sliderData.length &&
          sliderData.map((slider) => {
            const { _id, brandSliderImage } = slider;
            return (
              <Card sx={{ maxWidth: 400 }} key={_id}>
                <CardMedia
                  component="img"
                  image={brandSliderImage}
                  alt={"Brand Image Form Red Rose Auto"}
                  className="w-[100%] h-[200px] object-cover"
                />

                <CardActions disableSpacing>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => handelDelete(_id)}
                  >
                    <FaRegTrashAlt className="text-[2.3rem] mr-3 text-red-500" />
                  </IconButton>
                </CardActions>
              </Card>
            );
          })}
      </div>
    </section>
  );
};

export default ManageHomeSlider;
