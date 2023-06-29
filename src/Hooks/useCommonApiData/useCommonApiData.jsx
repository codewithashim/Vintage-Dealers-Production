import { DataContextApi } from "@/src/Context/DataContext";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";

const useCommonApiData = () => {
  const { baseUrl } = useContext(DataContextApi);
  const {
    data: sliderData,
    isLoading: sliderLoaded,
    refetch: refetchHomeSlider,
  } = useQuery({
    queryKey: ["sliderData"],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/api/brandSlider`);
      const data = await res.json();
      return data.data;
    },
  });

  const {
    data: serviceData,
    isLoading: serviceLoaded,
    refetch: serviceRefetch,
  } = useQuery({
    queryKey: ["serviceData"],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/api/service`);
      const data = await res.json();
      return data.data;
    },
  });

  const {
    data: photoGelaryData,
    isLoading: photoGelaryLoaded,
    refetch: refetchPhotoGelary,
  } = useQuery({
    queryKey: ["photoGelaryData"],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/api/photo-gelary`);
      const data = await res.json();
      return data.data;
    },
  });



  return {
    sliderData,
    refetchHomeSlider,
    sliderLoaded,
    serviceData,
    serviceLoaded,
    serviceRefetch,
    photoGelaryData,
    photoGelaryLoaded,
    refetchPhotoGelary,
    
  };
};

export default useCommonApiData;
