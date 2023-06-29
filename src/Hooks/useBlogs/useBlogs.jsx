import { DataContextApi } from "@/src/Context/DataContext";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Swal from "sweetalert2";

const useBlogs = () => {
  const { baseUrl } = useContext(DataContextApi);
  const {
    data: blogData,
    isLoading: blogLoaded,
    refetch: refetchBlogs,
  } = useQuery({
    queryKey: ["blogData"],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/api/allblog`);
      const data = await res.json();
      return data.data;
    },
  });

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
      const res = await fetch(`${baseUrl}/api/blog/${id}`, {
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
        refetchBlogs();
      }
    }
  };

  return {
    blogData,
    blogLoaded,
    refetchBlogs,
    handelDelete,
  };
};

export default useBlogs;
