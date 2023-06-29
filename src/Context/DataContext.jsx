import React, { createContext, useEffect, useState } from "react";

export const DataContextApi = createContext();

const DataContext = ({ children }) => {
  const [cateGoryHeaderShow, setCateGoryHeaderShow] = useState(false);
  const [homeHeroHeaderShow, setHomeHeroHeaderShow] = useState(false);
  const [searchVal, setSearchVal] = useState([]);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    if (cateGoryHeaderShow === true) {
      setHomeHeroHeaderShow(false);
    } else if (homeHeroHeaderShow === true) {
      setCateGoryHeaderShow(false);
    }
  }, [cateGoryHeaderShow, homeHeroHeaderShow]);

  const dataInfo = {
    homeHeroHeaderShow,
    setHomeHeroHeaderShow,
    cateGoryHeaderShow,
    setCateGoryHeaderShow,
    baseUrl,
    searchVal, setSearchVal
  };
  return (
    <DataContextApi.Provider value={dataInfo}>{children}</DataContextApi.Provider>
  );
};

export default DataContext;
