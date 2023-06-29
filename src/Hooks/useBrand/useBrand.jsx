/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { DataContextApi } from "@/src/Context/DataContext";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const useBrand = () => {
  const { baseUrl } = useContext(DataContextApi);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [totalPages, setTotalPages] = useState(0);
  const [totalBrands, setTotalBrands] = useState(0);
  const [brandsData, setBrands] = useState([]);
  const [isLoadingBrands, setIsLoadingBrands] = useState(false);

  const fetchBrands = async (shouldRefresh = false) => {
    try {
      setIsLoadingBrands(true);
      const response = await fetch(
        `${baseUrl}/api/brand/brandsPagination?page=${page}&pageSize=${pageSize}`
      );
      const data = await response.json();
      setBrands(data.data);
      setTotalBrands(data.totalBrands);
      setTotalPages(data.totalPages);

      setIsLoadingBrands(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingBrands(false);
    }

    if (shouldRefresh) {
      fetchCategories();
    }
  };

  useEffect(() => {
    fetchBrands();
  }, [fetchBrands, page, pageSize]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handleDeleteBrand = async (id) => {
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
      const res = await fetch(`${baseUrl}/api/brand/${id}`, {
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
          title: "Successfully Delete Brand !",
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
        fetchCategories(true);
      }
    }
  };

  return {
    page,
    handlePrevPage,
    totalPages,
    handleNextPage,
    brandsData,
    totalBrands,
    pageSize,
    setPage,
    isLoadingBrands,
    handleDeleteBrand,
  };
};

export default useBrand;
