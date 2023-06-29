import { DataContextApi } from "@/src/Context/DataContext";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import Swal from "sweetalert2";
import useProduct from "../useProduct/useProduct";

const useShopHooks = () => {
  const { baseUrl } = useContext(DataContextApi);
  const { fetchProducts } = useProduct();
  const { data: categoryData, isLoading: categoryLoaded } = useQuery({
    queryKey: ["categoryData"],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/api/category`);
      const data = await res.json();
      return data.data;
    },
  });

  const { data: brandData, isLoading: brandLoaded } = useQuery({
    queryKey: ["brandData"],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/api/brand`);
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
      const res = await fetch(`${baseUrl}/api/product/${id}`, {
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
        fetchProducts(true);
      }
    }
  };

  return {
    categoryData,
    categoryLoaded,
    brandData,
    brandLoaded,
    handelDelete,
  };
};

export default useShopHooks;
