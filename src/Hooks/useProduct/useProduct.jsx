/* eslint-disable react-hooks/exhaustive-deps */
import { DataContextApi } from "@/src/Context/DataContext";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";

const useProduct = () => {
  const { baseUrl } = useContext(DataContextApi);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [totalPages, setTotalPages] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);

  const fetchProducts = async (shouldRefresh = false) => {
    try {
      setIsLoadingProduct(true);
      const response = await fetch(
        `${baseUrl}/api/product?page=${page}&pageSize=${pageSize}`
      );
      const data = await response.json();
      setProducts(data.data);
      setTotalProducts(data.totalProducts);
      setTotalPages(data.totalPages);
      setIsLoadingProduct(false);
    } catch (error) {
      console.log(error);
      setIsLoadingProduct(false);

    } finally {
      setIsLoadingProduct(false);
    }

    if (shouldRefresh) {
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [pageSize]);

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

  const { data: allProductData, isLoading: productLoaded } = useQuery({
    queryKey: ["allProductData"],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/api/allproduct`);
      const data = await res.json();
      return data.data;
    },
  });

  return {
    page,
    handlePrevPage,
    totalPages,
    handleNextPage,
    products,
    totalProducts,
    pageSize,
    setPageSize,
    setPage,
    isLoadingProduct,
    fetchProducts,
    allProductData
  };
};

export default useProduct;
